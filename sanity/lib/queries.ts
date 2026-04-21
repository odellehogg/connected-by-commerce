import { client } from './client';

// ─── HOMEPAGE ─────────────────────────────────────────────────────────────
export async function getHomepage() {
  return client.fetch(
    `*[_type == "homepage"][0]{
      heroHeadline,
      heroHeadlineItalic,
      heroSubtext,
      missionManifestoLine1,
      missionManifestoLine2,
      missionManifestoLine3,
      missionManifestoLine4,
      missionProseLeft,
      missionProseRight,
      service1Title, service1Body,
      service2Title, service2Body,
      service3Title, service3Body,
      service4Title, service4Body,
      pillar1Title, pillar1Stage, pillar1Body, pillar1Platforms,
      pillar2Title, pillar2Stage, pillar2Body, pillar2Platforms,
      pillar3Title, pillar3Stage, pillar3Body, pillar3Platforms,
      pillar4Title, pillar4Stage, pillar4Body, pillar4Platforms,
      enquiryHeadline,
      enquirySubtext,
      footerTagline,
      footerSubtext,
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

// ─── BLOG POSTS ───────────────────────────────────────────────────────────
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishDate desc){
      _id,
      title,
      slug,
      publishDate,
      excerpt,
      category,
      "featuredImageUrl": featuredImage.asset->url,
    }`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishDate,
      excerpt,
      category,
      body,
      "featuredImageUrl": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt,
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`,
    {},
    { next: { revalidate: 60 } }
  );
}
