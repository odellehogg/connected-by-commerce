import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPostSlugs } from '../../../../sanity/lib/queries';
import { urlFor } from '../../../../sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';
import type { Metadata } from 'next';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs().catch(() => []);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) return { title: 'Post not found' };
  return {
    title: `${post.title} — Connected × Commerce`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.publishDate },
  };
}

// Custom components for Portable Text rendering
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className={styles.figure}>
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt ?? ''}
          width={1200}
          height={675}
          className={styles.figureImg}
        />
        {value.caption && <figcaption className={styles.figureCaption}>{value.caption}</figcaption>}
      </figure>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className={styles.bodyH2}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={styles.bodyH3}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className={styles.blockquote}>{children}</blockquote>,
    normal: ({ children }: any) => <p>{children}</p>,
  },
};

const CATEGORY_LABELS: Record<string, string> = {
  'retail-media': 'Retail Media',
  'amazon': 'Amazon',
  'uk-retail-networks': 'UK Retail Networks',
  'strategy': 'Strategy',
  'measurement': 'Measurement',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main>
        <header className={styles.header}>
          <Link href="/thinking" className={styles.back}>← Thinking</Link>
          <div className={styles.meta}>
            <span className={styles.category}>{CATEGORY_LABELS[post.category] ?? post.category}</span>
            {post.publishDate && <span className={styles.date}>{formatDate(post.publishDate)}</span>}
          </div>
          <h1 className={styles.heading}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.rule} />
        </header>

        {post.featuredImageUrl && (
          <div className={styles.featuredImage}>
            <Image
              src={post.featuredImageUrl}
              alt={post.featuredImageAlt ?? post.title}
              width={1440}
              height={640}
              className={styles.featuredImg}
              priority
            />
          </div>
        )}

        <article className={styles.body}>
          {post.body && <PortableText value={post.body} components={ptComponents} />}
        </article>

        <section className={styles.postFooter}>
          <div className={styles.postFooterInner}>
            <div>
              <div className={styles.postFooterBrand}>Connected × Commerce</div>
              <p>Commerce-first retail media for growing UK consumer brands.</p>
            </div>
            <div>
              <p className={styles.postFooterCta}>Want to talk strategy?</p>
              <a href="/#enquire" className="cta">Start a conversation →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
