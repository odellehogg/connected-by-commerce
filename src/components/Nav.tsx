'use client';
import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>Connected × Commerce</div>
      <div className={styles.links}>
        <a href="/#mission">Mission</a>
        <a href="/#services">Services</a>
        <a href="/#framework">Framework</a>
        <a href="/thinking">Thinking</a>
        <a href="/#enquire" className={styles.enquireBtn}>Enquire →</a>
      </div>
    </nav>
  );
}
