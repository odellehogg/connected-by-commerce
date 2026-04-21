import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero',      title: '🎯 Hero' },
    { name: 'mission',   title: '§1 Mission' },
    { name: 'services',  title: '§2 Services' },
    { name: 'framework', title: '§3 Framework' },
    { name: 'enquiry',   title: '§4 Enquiry' },
    { name: 'footer',    title: 'Footer' },
  ],
  fields: [
    // ── HERO ──────────────────────────────────────────────────────
    defineField({
      name: 'heroHeadline', title: 'Hero Headline (line 1)',
      type: 'string', group: 'hero',
      initialValue: 'Start where customers',
    }),
    defineField({
      name: 'heroHeadlineItalic', title: 'Hero Headline (line 2, italic)',
      type: 'string', group: 'hero',
      initialValue: 'actually buy.',
    }),
    defineField({
      name: 'heroSubtext', title: 'Hero Subtext',
      type: 'text', rows: 3, group: 'hero',
      initialValue: 'A specialist retail media agency for growing UK consumer brands. We build your presence on Amazon, Tesco, Nectar360 and Boots Media Group — then layer social where it demonstrably feeds conversion.',
    }),

    // ── MISSION ───────────────────────────────────────────────────
    defineField({
      name: 'missionManifestoLine1', title: 'Manifesto Line 1',
      type: 'string', group: 'mission',
      initialValue: 'Most brands are wasting money on media.',
    }),
    defineField({
      name: 'missionManifestoLine2', title: 'Manifesto Line 2',
      type: 'string', group: 'mission',
      initialValue: 'Not on the wrong platforms — in the wrong order.',
    }),
    defineField({
      name: 'missionManifestoLine3', title: 'Manifesto Line 3',
      type: 'string', group: 'mission',
      initialValue: 'Awareness first. Consideration maybe. Conversion, eventually. Billboard logic applied to a world that has fundamentally changed.',
    }),
    defineField({
      name: 'missionManifestoLine4', title: 'Manifesto Line 4',
      type: 'string', group: 'mission',
      initialValue: 'We know exactly where customers buy. So we start there.',
    }),
    defineField({
      name: 'missionProseLeft', title: 'Prose Column — Left',
      type: 'text', rows: 4, group: 'mission',
      initialValue: 'We flip the order. We start on the digital shelf — where customers are already in buying mode — and build outwards from there. Less waste, faster feedback loops, and a clearer connection between spend and revenue growth.',
    }),
    defineField({
      name: 'missionProseRight', title: 'Prose Column — Right',
      type: 'text', rows: 4, group: 'mission',
      initialValue: "Every pound of media either drives a sale or builds demand we can trace back to one. If it can't do either, it probably shouldn't be spent.",
    }),

    // ── SERVICES ──────────────────────────────────────────────────
    defineField({ name: 'service1Title', title: 'Service 1 — Title', type: 'string', group: 'services', initialValue: 'Retail Media Audit' }),
    defineField({ name: 'service1Body', title: 'Service 1 — Description', type: 'text', rows: 3, group: 'services', initialValue: "A 125-point diagnostic across Amazon, Tesco, Nectar360 and Boots Media Group. Where you're leaking spend, missing share, and underinvesting — with a prioritised 90-day plan to fix it." }),
    defineField({ name: 'service2Title', title: 'Service 2 — Title', type: 'string', group: 'services', initialValue: '90-Day Commerce Strategy' }),
    defineField({ name: 'service2Body', title: 'Service 2 — Description', type: 'text', rows: 3, group: 'services', initialValue: 'A commerce-first plan across every live platform. Clear KPIs, budgets and owners, written to be activated — not to sit in a drawer.' }),
    defineField({ name: 'service3Title', title: 'Service 3 — Title', type: 'string', group: 'services', initialValue: 'Retainer + Performance' }),
    defineField({ name: 'service3Body', title: 'Service 3 — Description', type: 'text', rows: 3, group: 'services', initialValue: 'Ongoing management of your retail media engine. Weekly optimisation, monthly strategy, honest reporting. Performance-aligned fee structure available.' }),
    defineField({ name: 'service4Title', title: 'Service 4 — Title', type: 'string', group: 'services', initialValue: 'Growth Partnership' }),
    defineField({ name: 'service4Body', title: 'Service 4 — Description', type: 'text', rows: 3, group: 'services', initialValue: 'Embedded commercial partnership for brands scaling past £3m ARR. Quarterly planning, platform relationships, on-tap advisory. We become part of your commercial team.' }),

    // ── FRAMEWORK ─────────────────────────────────────────────────
    defineField({ name: 'pillar1Title', title: 'Pillar 1 — Title', type: 'string', group: 'framework', initialValue: 'Discovery' }),
    defineField({ name: 'pillar1Stage', title: 'Pillar 1 — Stage', type: 'string', group: 'framework', initialValue: 'Upper funnel' }),
    defineField({ name: 'pillar1Body', title: 'Pillar 1 — Description', type: 'text', rows: 3, group: 'framework', initialValue: 'Making your brand visible to customers in environments close to where they buy — browse placements, prospecting audiences, adjacent category capture.' }),
    defineField({ name: 'pillar1Platforms', title: 'Pillar 1 — Platforms', type: 'string', group: 'framework', initialValue: 'Amazon · Tesco · Meta' }),

    defineField({ name: 'pillar2Title', title: 'Pillar 2 — Title', type: 'string', group: 'framework', initialValue: 'Demand' }),
    defineField({ name: 'pillar2Stage', title: 'Pillar 2 — Stage', type: 'string', group: 'framework', initialValue: 'Upper funnel' }),
    defineField({ name: 'pillar2Body', title: 'Pillar 2 — Description', type: 'text', rows: 3, group: 'framework', initialValue: 'Converting visibility into active interest. Strategic retargeting, product content, consistent presence across retail and social touchpoints.' }),
    defineField({ name: 'pillar2Platforms', title: 'Pillar 2 — Platforms', type: 'string', group: 'framework', initialValue: 'DSP · Social · Display' }),

    defineField({ name: 'pillar3Title', title: 'Pillar 3 — Title', type: 'string', group: 'framework', initialValue: 'Convert' }),
    defineField({ name: 'pillar3Stage', title: 'Pillar 3 — Stage', type: 'string', group: 'framework', initialValue: 'Lower funnel' }),
    defineField({ name: 'pillar3Body', title: 'Pillar 3 — Description', type: 'text', rows: 3, group: 'framework', initialValue: 'The moment of purchase. Sponsored placements, retail search, Google Shopping — optimised for high-intent capture in the buying environment.' }),
    defineField({ name: 'pillar3Platforms', title: 'Pillar 3 — Platforms', type: 'string', group: 'framework', initialValue: 'All retail networks' }),

    defineField({ name: 'pillar4Title', title: 'Pillar 4 — Title', type: 'string', group: 'framework', initialValue: 'Loyalty' }),
    defineField({ name: 'pillar4Stage', title: 'Pillar 4 — Stage', type: 'string', group: 'framework', initialValue: 'Lower funnel' }),
    defineField({ name: 'pillar4Body', title: 'Pillar 4 — Description', type: 'text', rows: 3, group: 'framework', initialValue: 'What happens after the first purchase. Lapsed-buyer campaigns, repeat-purchase strategy, compounding LTV reinvestment.' }),
    defineField({ name: 'pillar4Platforms', title: 'Pillar 4 — Platforms', type: 'string', group: 'framework', initialValue: 'Clubcard · Nectar · Advantage' }),

    // ── ENQUIRY ───────────────────────────────────────────────────
    defineField({ name: 'enquiryHeadline', title: 'Enquiry — Headline', type: 'string', group: 'enquiry', initialValue: "Let's start a conversation." }),
    defineField({ name: 'enquirySubtext', title: 'Enquiry — Subtext', type: 'text', rows: 3, group: 'enquiry', initialValue: "Tell us about your brand, where you sell, and what you're trying to solve. No pitch, no pressure — just a useful 30-minute call to see if we can help." }),

    // ── FOOTER ────────────────────────────────────────────────────
    defineField({ name: 'footerTagline', title: 'Footer — Tagline', type: 'string', group: 'footer', initialValue: 'Start where your customers actually buy.' }),
    defineField({ name: 'footerSubtext', title: 'Footer — Subtext', type: 'text', rows: 3, group: 'footer', initialValue: "A 30-minute call. No pitch, no pressure. We'll tell you straight whether we can help — and what we'd do first if the answer is yes." }),
  ],

  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
});
