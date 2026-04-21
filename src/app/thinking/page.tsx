import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllPosts } from '../../../sanity/lib/queries';
import Link from 'next/link';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thinking — Connected × Commerce',
  description: 'Thought leadership on retail media, commerce-first planning, and growing UK consumer brands.',
};

const CATEGORY_LABELS: Record<string, string> = {
  'retail-media': 'Retail Media',
  'amazon': 'Amazon',
  'uk-retail-networks': 'UK Retail Networks',
  'strategy': 'Strategy',
  'measurement': 'Measurement',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default async function ThinkingPage() {
  const posts = await getAllPosts().catch(() => []);

  return (
    <>
      <Nav />
      <main>
        <header className={styles.header}>
          <div className="section-label">Thinking</div>
          <h1 className={styles.heading}>
            Commerce-first.<br /><em>Written down.</em>
          </h1>
          <p className={styles.intro}>
            Occasional writing on retail media, platform strategy, and what it actually takes to grow a brand on the digital shelf.
          </p>
        </header>

        {posts.length === 0 ? (
          <section className={styles.empty}>
            <p>First post coming soon.</p>
          </section>
        ) : (
          <section className={styles.grid}>
            {posts.map((post: any, i: number) => (
              <Link
                key={post._id}
                href={`/thinking/${post.slug.current}`}
                className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
              >
                <div className={styles.cardMeta}>
                  <span className={styles.category}>
                    {CATEGORY_LABELS[post.category] ?? post.category}
                  </span>
                  {post.publishDate && (
                    <span className={styles.date}>{formatDate(post.publishDate)}</span>
                  )}
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardRead}>Read →</span>
              </Link>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
