'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

const BLACK_LOGO = 'data:image/png;base64,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';
const WHITE_LOGO = 'data:image/png;base64,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';
const MARK_PATH  = 'M705.999573,1188.500000 C705.999573,1209.281616 705.999573,1230.063232 705.999573,1251.413574 C779.237793,1250.635620 843.288086,1226.457275 898.587891,1179.635132 C953.811584,1132.877441 987.929688,1073.433838 1001.963501,1002.245300 C1015.955811,1073.417969 1049.994751,1132.926392 1105.239624,1179.719360 C1160.654541,1226.656372 1224.800659,1250.785400 1297.778931,1251.405762 C1297.778931,1195.493530 1297.778931,1140.407715 1297.778931,1085.325195 C1223.109253,1084.341187 1163.686768,1022.203796 1164.559692,949.841492 C1164.954102,917.149353 1176.275635,888.619446 1197.660645,864.275574 C1224.059448,834.224121 1257.677002,818.891785 1297.652344,817.881104 C1297.652344,762.348389 1297.652344,707.139832 1297.652344,651.755554 C1239.100220,651.667969 1185.596558,667.905273 1137.140747,699.643188 C1063.781006,747.692993 1019.002563,815.424255 1001.700134,902.191711 C971.642761,740.355530 828.690857,648.835571 706.280884,652.187195 C706.280884,707.397461 706.280884,762.612732 706.280884,817.822876 C780.328735,819.155273 834.262024,877.647827 838.874146,942.009766 C841.234741,974.951599 832.425903,1004.779053 812.453857,1030.840088 C785.793213,1065.628906 750.014526,1083.596558 705.999573,1085.204834 C705.999573,1119.549316 705.999573,1153.524658 705.999573,1188.500000';

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll fade-up
    const els = document.querySelectorAll('.' + styles.fadeUp);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));

    // Nav scroll
    const nav = document.getElementById('mainNav');
    const onScroll = () => {
      if (!nav) return;
      nav.style.background = window.scrollY > 30 ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Framework mark animation
    const PILLARS = [
      { quad: 'fwQ1', lbl: 'lbl-discovery', desc: 'desc-discovery', descY: 118 },
      { quad: 'fwQ2', lbl: 'lbl-demand',    desc: 'desc-demand',    descY: 118 },
      { quad: 'fwQ3', lbl: 'lbl-convert',   desc: 'desc-convert',   descY: 425 },
      { quad: 'fwQ4', lbl: 'lbl-loyalty',   desc: 'desc-loyalty',   descY: 425 },
    ];

    PILLARS.forEach(p => {
      const el = document.getElementById(p.desc);
      if (el) el.setAttribute('y', String(p.descY));
    });

    function clearAll() {
      PILLARS.forEach(p => {
        const q = document.getElementById(p.quad);
        const l = document.getElementById(p.lbl);
        const d = document.getElementById(p.desc);
        if (q) q.style.opacity = '0';
        if (l) l.style.opacity = '0.35';
        if (d) d.style.opacity = '0';
      });
    }

    function activate(idx: number) {
      clearAll();
      const p = PILLARS[idx];
      const q = document.getElementById(p.quad);
      const l = document.getElementById(p.lbl);
      const d = document.getElementById(p.desc);
      if (q) q.style.opacity = '0.6';
      if (l) l.style.opacity = '1';
      if (d) d.style.opacity = '1';
    }

    let cycleIdx = 0;
    let hovering = false;
    let cycleTimer: ReturnType<typeof setInterval> | null = null;

    function startCycle() {
      cycleTimer = setInterval(() => {
        if (!hovering) {
          cycleIdx = (cycleIdx + 1) % PILLARS.length;
          activate(cycleIdx);
        }
      }, 2200);
    }

    const fwSection = document.getElementById('framework');
    if (fwSection) {
      const fwObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          activate(0);
          startCycle();
          fwObs.disconnect();
        }
      }, { threshold: 0.3 });
      fwObs.observe(fwSection);
    }

    PILLARS.forEach((p, i) => {
      const lbl = document.getElementById(p.lbl);
      if (!lbl) return;
      lbl.addEventListener('mouseenter', () => {
        hovering = true;
        if (cycleTimer) clearInterval(cycleTimer);
        cycleIdx = i;
        activate(i);
      });
      lbl.addEventListener('mouseleave', () => {
        hovering = false;
        startCycle();
      });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (cycleTimer) clearInterval(cycleTimer);
    };
  }, []);

  const s: Record<string, React.CSSProperties> = {
    // tokens
    sans:   { fontFamily: 'var(--sans)' },
    mono:   { fontFamily: 'var(--mono)' },
    white:  { color: 'var(--white)' },
    ink:    { color: 'var(--ink)' },
    ink2:   { color: 'var(--ink2)' },
    g5:     { color: 'var(--g5)' },
    g7:     { color: 'var(--g7)' },
  };

  return (
    <div ref={pageRef} style={{ fontFamily: 'var(--sans)' }}>

      {/* NAV */}
      <nav id="mainNav" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--g2)', padding: '0 var(--pad)',
        height: 60, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', transition: 'background 0.3s',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          {/* Replace with <Image> using /images/mark-black.svg once exported from Canva */}
          <img src={BLACK_LOGO} alt="CxC" style={{ width: 26, height: 26 }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
            Connected<span style={{ fontWeight: 300, color: 'var(--g5)', margin: '0 0.1em' }}>×</span>Commerce
          </span>
        </a>
        <a href="#contact" style={{
          fontSize: 12, fontWeight: 700, color: 'var(--white)', background: 'var(--ink)',
          borderRadius: 100, padding: '9px 20px', textDecoration: 'none', transition: 'opacity 0.2s',
        }}>Book a call</a>
      </nav>

      {/* §1 HERO */}
      <section className={styles.fadeUp} style={{ padding: '148px var(--pad) 104px', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--g5)', marginBottom: 36 }}>
          Commerce-first retail media
        </div>
        <h1 style={{
          fontSize: 'clamp(46px, 6.5vw, 90px)', fontWeight: 800, letterSpacing: '-0.045em',
          lineHeight: 0.96, color: 'var(--ink)', maxWidth: '13ch', marginBottom: 40,
        }}>
          Most brands are buying media in{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--g5)' }}>the wrong order.</em>
        </h1>
        <p style={{ fontSize: 'clamp(16px,1.8vw,19px)', color: 'var(--ink2)', lineHeight: 1.68, maxWidth: '52ch', marginBottom: 52 }}>
          We start where your customers actually buy. Connected&nbsp;×&nbsp;Commerce is a UK retail media specialist — building commerce-first strategies for growth-stage brands on Amazon, Tesco, Boots, and Nectar360.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em',
            color: 'var(--white)', background: 'var(--ink)',
            borderRadius: 100, padding: '15px 28px', textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            Book a free 30-minute call →
          </a>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.05em', color: 'var(--g5)' }}>
            An honest conversation, no agenda.
          </span>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid var(--g2)' }} />

      {/* §2 THE SHIFT */}
      <section style={{ borderBottom: '1px solid var(--g2)', padding: '84px var(--pad)', background: 'var(--paper)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'clamp(160px,220px,220px) 1fr', gap: 72, alignItems: 'start' }}>
          <div className={styles.fadeUp} style={{ fontSize: 'clamp(20px,2.6vw,32px)', fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            The third wave of media{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--g5)' }}>is already here.</em>
          </div>
          <div className={styles.fadeUp} style={{ fontSize: 17, color: 'var(--ink2)', lineHeight: 1.78 }}>
            <p>Broadcast reach, digital performance, and now retail media — the only channel where you can reach customers at the exact moment of purchase, using first-party loyalty data, with closed-loop attribution.</p>
            <p style={{ marginTop: 18 }}>Tesco&apos;s 27 million Clubcard members. 20 million Nectar holders. 17 million Boots Advantage cardholders. Most growth brands aren&apos;t on any of them. That&apos;s the opportunity — and it won&apos;t stay cheap for long.</p>
          </div>
        </div>
      </section>

      {/* §3 FRAMEWORK */}
      <section id="framework" style={{ padding: '100px var(--pad)', maxWidth: 'var(--max)', margin: '0 auto' }}>
        <div className={styles.fadeUp} style={{ marginBottom: 72 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--g5)', marginBottom: 28 }}>The CBC framework</div>
          <h2 style={{ fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.04 }}>
            Four principles.{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--g5)' }}>One journey.</em>
          </h2>
        </div>

        <div className={styles.fadeUp} style={{ width: '100%' }}>
          <svg id="fwDiagram" viewBox="0 0 1000 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block', overflow: 'visible' }}>
            <defs>
              <clipPath id="fwClip">
                <path d={`${MARK_PATH}Z`} transform="translate(195.3,-29.3) scale(0.3041)" />
              </clipPath>
            </defs>

            {/* Mark body */}
            <path d={`${MARK_PATH}Z`} transform="translate(195.3,-29.3) scale(0.3041)" fill="#E5E5E5" />

            {/* Quadrant highlights */}
            <rect id="fwQ1" x="385" y="155" width="120" height="100" fill="#0A0A0A" opacity="0" clipPath="url(#fwClip)" style={{ transition: 'opacity 0.5s ease' }} />
            <rect id="fwQ2" x="490" y="155" width="120" height="100" fill="#0A0A0A" opacity="0" clipPath="url(#fwClip)" style={{ transition: 'opacity 0.5s ease' }} />
            <rect id="fwQ3" x="385" y="285" width="120" height="100" fill="#0A0A0A" opacity="0" clipPath="url(#fwClip)" style={{ transition: 'opacity 0.5s ease' }} />
            <rect id="fwQ4" x="490" y="285" width="120" height="100" fill="#0A0A0A" opacity="0" clipPath="url(#fwClip)" style={{ transition: 'opacity 0.5s ease' }} />

            {/* Crosshair */}
            <line x1="385" y1="260" x2="615" y2="260" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
            <line x1="500" y1="158" x2="500" y2="370" stroke="#8A8A8A" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />

            {/* Funnel bands */}
            <text x="500" y="134" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="3" fill="#8A8A8A" opacity="0.7">UPPER FUNNEL</text>
            <text x="500" y="402" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="3" fill="#8A8A8A" opacity="0.7">LOWER FUNNEL</text>

            {/* Discovery — top-left */}
            <g id="lbl-discovery" opacity="0.35" style={{ transition: 'opacity 0.4s ease', cursor: 'default' }}>
              <text x="258" y="78" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#8A8A8A">01 · UPPER FUNNEL</text>
              <text x="258" y="102" textAnchor="middle" fontFamily="var(--sans)" fontSize="28" fontWeight="800" letterSpacing="-1.5" fill="#0A0A0A">Discovery</text>
            </g>
            {/* Demand — top-right */}
            <g id="lbl-demand" opacity="0.35" style={{ transition: 'opacity 0.4s ease', cursor: 'default' }}>
              <text x="740" y="78" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#8A8A8A">02 · UPPER FUNNEL</text>
              <text x="740" y="102" textAnchor="middle" fontFamily="var(--sans)" fontSize="28" fontWeight="800" letterSpacing="-1.5" fill="#0A0A0A">Demand</text>
            </g>
            {/* Convert — bottom-left */}
            <g id="lbl-convert" opacity="0.35" style={{ transition: 'opacity 0.4s ease', cursor: 'default' }}>
              <text x="258" y="388" textAnchor="middle" fontFamily="var(--sans)" fontSize="28" fontWeight="800" letterSpacing="-1.5" fill="#0A0A0A">Convert</text>
              <text x="258" y="410" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#8A8A8A">03 · LOWER FUNNEL</text>
            </g>
            {/* Loyalty — bottom-right */}
            <g id="lbl-loyalty" opacity="0.35" style={{ transition: 'opacity 0.4s ease', cursor: 'default' }}>
              <text x="740" y="388" textAnchor="middle" fontFamily="var(--sans)" fontSize="28" fontWeight="800" letterSpacing="-1.5" fill="#0A0A0A">Loyalty</text>
              <text x="740" y="410" textAnchor="middle" fontFamily="var(--mono)" fontSize="9" letterSpacing="2" fill="#8A8A8A">04 · LOWER FUNNEL</text>
            </g>

            {/* Descriptions */}
            <text id="desc-discovery" x="258" y="0" textAnchor="middle" fontFamily="var(--sans)" fontSize="12.5" fill="#545454" opacity="0" style={{ transition: 'opacity 0.4s ease' }}>
              <tspan x="258" dy="0">Making your brand visible to shoppers</tspan>
              <tspan x="258" dy="17">who don&apos;t yet know you exist — browse</tspan>
              <tspan x="258" dy="17">placements, prospecting, category capture.</tspan>
            </text>
            <text id="desc-demand" x="740" y="0" textAnchor="middle" fontFamily="var(--sans)" fontSize="12.5" fill="#545454" opacity="0" style={{ transition: 'opacity 0.4s ease' }}>
              <tspan x="740" dy="0">Converting visibility into active interest.</tspan>
              <tspan x="740" dy="17">Retargeting, product content, consistent</tspan>
              <tspan x="740" dy="17">presence across every retail touchpoint.</tspan>
            </text>
            <text id="desc-convert" x="258" y="0" textAnchor="middle" fontFamily="var(--sans)" fontSize="12.5" fill="#545454" opacity="0" style={{ transition: 'opacity 0.4s ease' }}>
              <tspan x="258" dy="0">The moment of purchase. Sponsored</tspan>
              <tspan x="258" dy="17">placements, retail search, Google Shopping</tspan>
              <tspan x="258" dy="17">— optimised for high-intent capture.</tspan>
            </text>
            <text id="desc-loyalty" x="740" y="0" textAnchor="middle" fontFamily="var(--sans)" fontSize="12.5" fill="#545454" opacity="0" style={{ transition: 'opacity 0.4s ease' }}>
              <tspan x="740" dy="0">What happens after the first purchase.</tspan>
              <tspan x="740" dy="17">Lapsed-buyer campaigns, repeat-purchase</tspan>
              <tspan x="740" dy="17">strategy, compounding LTV over time.</tspan>
            </text>
          </svg>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid var(--g2)' }} />

      {/* §4 WHY CBC */}
      <section id="why" style={{ background: 'var(--ink)', padding: '100px var(--pad)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>Why Connected × Commerce</div>
          <h2 className={styles.fadeUp} style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.04, color: 'var(--white)', marginBottom: 64, maxWidth: '20ch' }}>
            Three things you won&apos;t get{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>anywhere else.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { n:'01', t:'Specialist depth', b:"Not a generalist agency bolting retail media on. We do three things well — retail media, paid social that feeds it, and the strategy to connect them. Not twelve things adequately." },
              { n:'02', t:'Honest measurement', b:"Cross-platform attribution is messy. We refuse to pretend otherwise. Three measurement layers, no theatre. You'll know what's working — even when the answer is inconvenient." },
              { n:'03', t:'Founder-led work', b:"You talk to the person doing the thinking — not an account handler passing briefs to a junior. That's the model. It's not a positioning line, it's the way we work." },
            ].map((item, i) => (
              <div key={item.n} className={styles.fadeUp} style={{
                padding: '40px 40px 40px 0',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingLeft: i > 0 ? 40 : 0,
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', marginBottom: 18 }}>{item.n}</div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--white)', marginBottom: 12 }}>{item.t}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.72 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §5 CTA CLOSE */}
      <section id="contact" style={{ background: 'var(--black)', padding: '128px var(--pad)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 44 }}>Let&apos;s talk</div>
          <h2 className={styles.fadeUp} style={{ fontSize: 'clamp(36px,5.5vw,72px)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.96, color: 'var(--white)', marginBottom: 28 }}>
            Start where your customers{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>actually buy.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.72, maxWidth: '44ch', margin: '0 auto 52px' }}>
            A 30-minute call. We&apos;ll be straight with you about whether we can help — and what we&apos;d do first if the answer is yes.
          </p>
          <a href="mailto:hello@connectedbycommerce.co.uk" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em',
            color: 'var(--ink)', background: 'var(--white)',
            borderRadius: 100, padding: '15px 28px', textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>
            Book a call →
          </a>
          <div style={{ marginTop: 28, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
            hello@connectedbycommerce.co.uk · connectedbycommerce.co.uk
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--black)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '28px var(--pad)' }}>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <img src={WHITE_LOGO} alt="CxC" style={{ width: 20, height: 20, opacity: 0.5 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.35)' }}>
              Connected<span style={{ fontWeight: 300, margin: '0 0.1em' }}>×</span>Commerce
            </span>
          </div>
          <div style={{ display: 'flex', gap: 22 }}>
            {['Framework', 'About', 'Contact'].map((l, i) => (
              <a key={l} href={['#framework','#why','#contact'][i]} style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
