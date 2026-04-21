import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pre}>
        <h3>Start where your customers<br /><em>actually buy.</em></h3>
        <div className={styles.preRow}>
          <p>A 30-minute call. No pitch, no pressure. We&apos;ll tell you straight whether we can help — and what we&apos;d do first if the answer is yes.</p>
          <a href="mailto:info@connectedbycommerce.co.uk" className="cta cta-ghost">info@connectedbycommerce.co.uk →</a>
        </div>
      </div>
      <div className={styles.cols}>
        <div>
          <div className={styles.brandName}>Connected × Commerce</div>
          <p className={styles.brandDesc}>A commerce-first retail media specialist agency for growing UK consumer brands. Founded 2026 in London.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="/#services">Retail Media Audit</a></li>
            <li><a href="/#services">90-Day Strategy</a></li>
            <li><a href="/#services">Retainer + Performance</a></li>
            <li><a href="/#services">Growth Partnership</a></li>
          </ul>
        </div>
        <div>
          <h4>Platforms</h4>
          <ul>
            <li><a href="/#framework">Amazon</a></li>
            <li><a href="/#framework">Tesco Connect</a></li>
            <li><a href="/#framework">Nectar360</a></li>
            <li><a href="/#framework">Boots Media Group</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:info@connectedbycommerce.co.uk">Email</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="/thinking">Thinking</a></li>
            <li><a href="/#enquire">Enquire</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.mega}>Connected <em>×</em> Commerce</div>
      <div className={styles.bottom}>
        <div>© 2026 Connected × Commerce Ltd · Registered in England &amp; Wales</div>
        <div className={styles.legal}><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
      </div>
    </footer>
  );
}
