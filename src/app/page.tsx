import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';
import { getHomepage } from '../../sanity/lib/queries';
import styles from './page.module.css';

// Fallback defaults — shown before Sanity content is published
const DEFAULTS = {
  heroHeadline: 'Start where customers',
  heroHeadlineItalic: 'actually buy.',
  heroSubtext: 'A specialist retail media agency for growing UK consumer brands. We build your presence on Amazon, Tesco, Nectar360 and Boots Media Group — then layer social where it demonstrably feeds conversion.',
  missionManifestoLine1: 'Most brands are wasting money on media.',
  missionManifestoLine2: 'Not on the wrong platforms — in the wrong order.',
  missionManifestoLine3: 'Awareness first. Consideration maybe. Conversion, eventually. Billboard logic applied to a world that has fundamentally changed.',
  missionManifestoLine4: 'We know exactly where customers buy. So we start there.',
  missionProseLeft: 'We flip the order. We start on the digital shelf — where customers are already in buying mode — and build outwards from there. Less waste, faster feedback loops, and a clearer connection between spend and revenue growth.',
  missionProseRight: "Every pound of media either drives a sale or builds demand we can trace back to one. If it can't do either, it probably shouldn't be spent.",
  service1Title: 'Retail Media Audit',
  service1Body: "A 125-point diagnostic across Amazon, Tesco, Nectar360 and Boots Media Group. Where you're leaking spend, missing share, and underinvesting — with a prioritised 90-day plan to fix it.",
  service2Title: '90-Day Commerce Strategy',
  service2Body: 'A commerce-first plan across every live platform. Clear KPIs, budgets and owners, written to be activated — not to sit in a drawer.',
  service3Title: 'Retainer + Performance',
  service3Body: 'Ongoing management of your retail media engine. Weekly optimisation, monthly strategy, honest reporting. Performance-aligned fee structure available.',
  service4Title: 'Growth Partnership',
  service4Body: 'Embedded commercial partnership for brands scaling past £3m ARR. Quarterly planning, platform relationships, on-tap advisory. We become part of your commercial team.',
  pillar1Title: 'Discovery', pillar1Stage: 'Upper funnel', pillar1Body: 'Making your brand visible to customers in environments close to where they buy — browse placements, prospecting audiences, adjacent category capture.', pillar1Platforms: 'Amazon · Tesco · Meta',
  pillar2Title: 'Demand',    pillar2Stage: 'Upper funnel', pillar2Body: 'Converting visibility into active interest. Strategic retargeting, product content, consistent presence across retail and social touchpoints.',          pillar2Platforms: 'DSP · Social · Display',
  pillar3Title: 'Convert',   pillar3Stage: 'Lower funnel', pillar3Body: 'The moment of purchase. Sponsored placements, retail search, Google Shopping — optimised for high-intent capture in the buying environment.',              pillar3Platforms: 'All retail networks',
  pillar4Title: 'Loyalty',   pillar4Stage: 'Lower funnel', pillar4Body: 'What happens after the first purchase. Lapsed-buyer campaigns, repeat-purchase strategy, compounding LTV reinvestment.',                                   pillar4Platforms: 'Clubcard · Nectar · Advantage',
  enquiryHeadline: "Let's start a conversation.",
  enquirySubtext: "Tell us about your brand, where you sell, and what you're trying to solve. No pitch, no pressure — just a useful 30-minute call to see if we can help.",
};

export default async function Home() {
  // Fetch from Sanity; fall back to defaults if not yet published
  const raw = await getHomepage().catch(() => null);
  const c = { ...DEFAULTS, ...raw };

  const services = [
    { num: '01', title: c.service1Title, body: c.service1Body },
    { num: '02', title: c.service2Title, body: c.service2Body },
    { num: '03', title: c.service3Title, body: c.service3Body },
    { num: '04', title: c.service4Title, body: c.service4Body },
  ];

  const pillars = [
    { num: '01', title: c.pillar1Title, stage: c.pillar1Stage, body: c.pillar1Body, platforms: c.pillar1Platforms },
    { num: '02', title: c.pillar2Title, stage: c.pillar2Stage, body: c.pillar2Body, platforms: c.pillar2Platforms },
    { num: '03', title: c.pillar3Title, stage: c.pillar3Stage, body: c.pillar3Body, platforms: c.pillar3Platforms },
    { num: '04', title: c.pillar4Title, stage: c.pillar4Stage, body: c.pillar4Body, platforms: c.pillar4Platforms },
  ];

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className={styles.hero} style={{ borderTop: 'none' }}>
          <div className={`${styles.heroTop} anim-1`}>
            <span>Commerce-first retail media</span>
          </div>

          <div>
            <div className={`${styles.heroMark} anim-2`}>
              <Image
                src="/images/mark.png"
                alt="Connected × Commerce"
                width={220} height={220}
                priority
                className={styles.markImg}
              />
            </div>
            <div className={`${styles.heroWordmark} anim-3`}>
              Connected <em>×</em> Commerce
            </div>
            <div className={styles.heroStatement}>
              <h1 className={`${styles.heroH1} anim-4`}>
                {c.heroHeadline}<br /><em>{c.heroHeadlineItalic}</em>
              </h1>
              <p className={`${styles.heroSub} anim-5`}>{c.heroSubtext}</p>
              <div className={`${styles.heroCtas} anim-6`}>
                <a href="#enquire" className="cta">Start a conversation →</a>
                <a href="#mission" className="cta cta-ghost">Our approach</a>
              </div>
            </div>
          </div>

          <div className={`${styles.heroScroll} anim-7`}>Scroll to begin</div>
        </section>

        {/* ── §1 MISSION ─────────────────────────────────────── */}
        <section id="mission">
          <div className="section-label">§1 · Our mission</div>
          <h2 className={styles.sectionH2}>
            Retail media,<br /><em>done properly.</em>
          </h2>

          <div className={styles.manifesto}>
            <p>{c.missionManifestoLine1}</p>
            <p>Not on the wrong platforms — <em>in the wrong order.</em></p>
            <p>
              Awareness first. Consideration maybe. Conversion, eventually.
              Billboard logic applied to a world that has{' '}
              <span className={styles.hl}>fundamentally changed.</span>
            </p>
            <p>We know <em>exactly</em> where customers buy. So we start there.</p>
          </div>

          <div className={styles.missionProse}>
            <p>{c.missionProseLeft}</p>
            <p>{c.missionProseRight}</p>
          </div>
        </section>

        {/* ── §2 SERVICES ────────────────────────────────────── */}
        <section id="services">
          <div className="section-label">§2 · Services</div>
          <h2 className={styles.sectionH2}>
            Four ways<br />to <em>work together.</em>
          </h2>
          <div className={styles.servicesList}>
            {services.map(s => (
              <article key={s.num} className={styles.service}>
                <div className={styles.serviceNum}>{s.num}</div>
                <div className={styles.serviceMain}>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: s.title.replace(
                        /(Audit|Strategy|Performance|Partnership)/,
                        '<em>$1</em>'
                      ),
                    }}
                  />
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── §3 FRAMEWORK ───────────────────────────────────── */}
        <section id="framework">
          <div className="section-label">§3 · The CBC Framework</div>
          <h2 className={styles.sectionH2}>
            Four principles.<br /><em>One journey.</em>
          </h2>
          <p className={styles.frameworkIntro}>
            Every campaign we run is mapped against one of four principles — the stages of a real commerce journey, from first encounter to lasting relationship. No vanity layers. No empty awareness buckets.
          </p>
          <div className={styles.pillars}>
            {pillars.map(p => (
              <div key={p.num} className={styles.pillar} data-num={p.num}>
                <div className={styles.pillarMeta}>
                  <span>{p.num}</span>
                  <span className={styles.dot} />
                  <span>{p.stage}</span>
                </div>
                <h3><em>{p.title}</em></h3>
                <p>{p.body}</p>
                <div className={styles.pillarFooter}>{p.platforms}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── §4 ENQUIRE ─────────────────────────────────────── */}
        <section id="enquire">
          <div className="section-label">§4 · Enquire</div>
          <div className={styles.enquiryLayout}>
            <div className={styles.enquiryLeft}>
              <h2 className={styles.sectionH2} style={{ marginBottom: '24px' }}>
                Let&apos;s start a <em>conversation.</em>
              </h2>
              <p className={styles.enquiryLead}>{c.enquirySubtext}</p>
              <a
                href="mailto:info@connectedbycommerce.co.uk"
                className={styles.enquiryEmail}
              >
                info@connectedbycommerce.co.uk →
              </a>
            </div>
            <div className={styles.enquiryFormWrap}>
              <EnquiryForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
