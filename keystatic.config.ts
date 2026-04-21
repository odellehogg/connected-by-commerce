import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: {
      name: 'Connected × Commerce',
    },
  },

  singletons: {
    // ─── SITE SETTINGS ──────────────────────────────────────────
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      schema: {
        siteTitle: fields.text({
          label: 'Site Title',
          defaultValue: 'Connected × Commerce',
        }),
        siteDescription: fields.text({
          label: 'Meta Description',
          defaultValue:
            'A specialist retail media agency for growing UK consumer brands.',
          multiline: true,
        }),
        contactEmail: fields.text({
          label: 'Contact Email',
          defaultValue: 'info@connectedbycommerce.co.uk',
        }),
        linkedinUrl: fields.url({
          label: 'LinkedIn URL',
        }),
      },
    }),

    // ─── HOMEPAGE ────────────────────────────────────────────────
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage',
      schema: {
        // Hero
        heroHeadline: fields.text({
          label: 'Hero Headline — Line 1',
          defaultValue: 'Start where customers',
        }),
        heroHeadlineItalic: fields.text({
          label: 'Hero Headline — Line 2 (italic)',
          defaultValue: 'actually buy.',
        }),
        heroSubtext: fields.text({
          label: 'Hero Subtext',
          multiline: true,
          defaultValue:
            'A specialist retail media agency for growing UK consumer brands. We build your presence on Amazon, Tesco, Nectar360 and Boots Media Group — then layer social where it demonstrably feeds conversion.',
        }),

        // Mission
        missionManifestoLine1: fields.text({
          label: 'Mission — Manifesto Line 1',
          defaultValue: 'Most brands are wasting money on media.',
        }),
        missionManifestoLine2: fields.text({
          label: 'Mission — Manifesto Line 2',
          defaultValue: 'Not on the wrong platforms — in the wrong order.',
        }),
        missionManifestoLine3: fields.text({
          label: 'Mission — Manifesto Line 3',
          defaultValue:
            'Awareness first. Consideration maybe. Conversion, eventually. Billboard logic applied to a world that has fundamentally changed.',
        }),
        missionManifestoLine4: fields.text({
          label: 'Mission — Manifesto Line 4',
          defaultValue: 'We know exactly where customers buy. So we start there.',
        }),
        missionProseLeft: fields.text({
          label: 'Mission — Prose (left column)',
          multiline: true,
          defaultValue:
            'We flip the order. We start on the digital shelf — where customers are already in buying mode — and build outwards from there. Less waste, faster feedback loops, and a clearer connection between spend and revenue growth.',
        }),
        missionProseRight: fields.text({
          label: 'Mission — Prose (right column)',
          multiline: true,
          defaultValue:
            'Every pound of media either drives a sale or builds demand we can trace back to one. If it can\'t do either, it probably shouldn\'t be spent.',
        }),

        // Services
        service1Title: fields.text({ label: 'Service 1 — Title', defaultValue: 'Retail Media Audit' }),
        service1Body: fields.text({ label: 'Service 1 — Description', multiline: true, defaultValue: 'A 125-point diagnostic across Amazon, Tesco, Nectar360 and Boots Media Group. Where you\'re leaking spend, missing share, and underinvesting — with a prioritised 90-day plan to fix it.' }),
        service2Title: fields.text({ label: 'Service 2 — Title', defaultValue: '90-Day Commerce Strategy' }),
        service2Body: fields.text({ label: 'Service 2 — Description', multiline: true, defaultValue: 'A commerce-first plan across every live platform. Clear KPIs, budgets and owners, written to be activated — not to sit in a drawer.' }),
        service3Title: fields.text({ label: 'Service 3 — Title', defaultValue: 'Retainer + Performance' }),
        service3Body: fields.text({ label: 'Service 3 — Description', multiline: true, defaultValue: 'Ongoing management of your retail media engine. Weekly optimisation, monthly strategy, honest reporting. Performance-aligned fee structure available.' }),
        service4Title: fields.text({ label: 'Service 4 — Title', defaultValue: 'Growth Partnership' }),
        service4Body: fields.text({ label: 'Service 4 — Description', multiline: true, defaultValue: 'Embedded commercial partnership for brands scaling past £3m ARR. Quarterly planning, platform relationships, on-tap advisory. We become part of your commercial team.' }),

        // Framework
        pillar1Title: fields.text({ label: 'Pillar 1 — Title', defaultValue: 'Discovery' }),
        pillar1Stage: fields.text({ label: 'Pillar 1 — Stage', defaultValue: 'Upper funnel' }),
        pillar1Body: fields.text({ label: 'Pillar 1 — Description', multiline: true, defaultValue: 'Making your brand visible to customers in environments close to where they buy — browse placements, prospecting audiences, adjacent category capture.' }),
        pillar1Platforms: fields.text({ label: 'Pillar 1 — Platforms', defaultValue: 'Amazon · Tesco · Meta' }),

        pillar2Title: fields.text({ label: 'Pillar 2 — Title', defaultValue: 'Demand' }),
        pillar2Stage: fields.text({ label: 'Pillar 2 — Stage', defaultValue: 'Upper funnel' }),
        pillar2Body: fields.text({ label: 'Pillar 2 — Description', multiline: true, defaultValue: 'Converting visibility into active interest. Strategic retargeting, product content, consistent presence across retail and social touchpoints.' }),
        pillar2Platforms: fields.text({ label: 'Pillar 2 — Platforms', defaultValue: 'DSP · Social · Display' }),

        pillar3Title: fields.text({ label: 'Pillar 3 — Title', defaultValue: 'Convert' }),
        pillar3Stage: fields.text({ label: 'Pillar 3 — Stage', defaultValue: 'Lower funnel' }),
        pillar3Body: fields.text({ label: 'Pillar 3 — Description', multiline: true, defaultValue: 'The moment of purchase. Sponsored placements, retail search, Google Shopping — optimised for high-intent capture in the buying environment.' }),
        pillar3Platforms: fields.text({ label: 'Pillar 3 — Platforms', defaultValue: 'All retail networks' }),

        pillar4Title: fields.text({ label: 'Pillar 4 — Title', defaultValue: 'Loyalty' }),
        pillar4Stage: fields.text({ label: 'Pillar 4 — Stage', defaultValue: 'Lower funnel' }),
        pillar4Body: fields.text({ label: 'Pillar 4 — Description', multiline: true, defaultValue: 'What happens after the first purchase. Lapsed-buyer campaigns, repeat-purchase strategy, compounding LTV reinvestment.' }),
        pillar4Platforms: fields.text({ label: 'Pillar 4 — Platforms', defaultValue: 'Clubcard · Nectar · Advantage' }),

        // Enquiry
        enquiryHeadline: fields.text({ label: 'Enquiry — Headline', defaultValue: "Let's start a conversation." }),
        enquirySubtext: fields.text({ label: 'Enquiry — Subtext', multiline: true, defaultValue: "Tell us about your brand, where you sell, and what you're trying to solve. No pitch, no pressure — just a useful 30-minute call to see if we can help." }),

        // Footer
        footerTagline: fields.text({ label: 'Footer — Tagline headline', defaultValue: "Start where your customers actually buy." }),
        footerSubtext: fields.text({ label: 'Footer — Subtext', multiline: true, defaultValue: "A 30-minute call. No pitch, no pressure. We'll tell you straight whether we can help — and what we'd do first if the answer is yes." }),
      },
    }),
  },

  // ─── BLOG POSTS ────────────────────────────────────────────────
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
          slug: { label: 'URL Slug', description: 'Auto-generated from title. e.g. "my-post-title"' },
        }),
        publishDate: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          description: 'Short summary shown on the blog listing page and in meta tags.',
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Retail Media', value: 'retail-media' },
            { label: 'Amazon', value: 'amazon' },
            { label: 'UK Retail Networks', value: 'uk-retail-networks' },
            { label: 'Strategy', value: 'strategy' },
            { label: 'Measurement', value: 'measurement' },
          ],
          defaultValue: 'retail-media',
        }),
        featuredImage: fields.image({
          label: 'Featured Image',
          description: 'Optional. Shown at top of post and in post cards.',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.mdx({
          label: 'Content',
          extension: 'mdx',
        }),
      },
    }),
  },
});
