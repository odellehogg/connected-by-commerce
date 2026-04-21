'use client';
import { useState } from 'react';
import styles from './EnquiryForm.module.css';

const PLATFORMS = ['Amazon', 'Tesco', "Sainsbury's", 'Boots', 'Ocado', 'D2C only', 'Other'];
const BUDGETS   = ['< £5k', '£5k–15k', '£15k–50k', '£50k+', 'Not sure yet'];

export default function EnquiryForm() {
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [budget, setBudget]       = useState('');
  const [status, setStatus]       = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [form, setForm]           = useState({ name:'', company:'', email:'', website:'', message:'' });

  const toggle = (p: string) =>
    setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New enquiry from ${form.name} at ${form.company}`,
          from_name: 'Connected × Commerce website',
          ...form,
          platforms: platforms.join(', '),
          budget,
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch { setStatus('error'); }
  };

  if (status === 'sent') return (
    <div className={styles.success}>
      <div className={styles.tick}>✓</div>
      <h3>Enquiry sent.</h3>
      <p>We&apos;ll be in touch within one working day.</p>
    </div>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label><span>Your name</span><input type="text" required placeholder="Full name" value={form.name} onChange={e => setForm(f=>({...f,name:e.target.value}))} /></label>
        <label><span>Brand / Company</span><input type="text" required placeholder="Company name" value={form.company} onChange={e => setForm(f=>({...f,company:e.target.value}))} /></label>
      </div>
      <div className={styles.row}>
        <label><span>Email</span><input type="email" required placeholder="you@brand.com" value={form.email} onChange={e => setForm(f=>({...f,email:e.target.value}))} /></label>
        <label><span>Website</span><input type="url" placeholder="https://" value={form.website} onChange={e => setForm(f=>({...f,website:e.target.value}))} /></label>
      </div>

      <div className={styles.chipGroup}>
        <span className={styles.chipLabel}>Where do you currently sell?</span>
        <div className={styles.chips}>
          {PLATFORMS.map(p => (
            <button key={p} type="button" className={`chip ${platforms.includes(p)?'active':''}`} onClick={()=>toggle(p)}>{p}</button>
          ))}
        </div>
      </div>

      <div className={styles.chipGroup}>
        <span className={styles.chipLabel}>Monthly media spend</span>
        <div className={styles.chips}>
          {BUDGETS.map(b => (
            <button key={b} type="button" className={`chip ${budget===b?'active':''}`} onClick={()=>setBudget(b)}>{b}</button>
          ))}
        </div>
      </div>

      <label className={styles.fullWidth}>
        <span>What are you trying to solve?</span>
        <textarea required rows={4} placeholder="Tell us what's going on — current challenges, goals, anything useful for a first call." value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
      </label>

      <div className={styles.submit}>
        <span className={styles.note}>→ info@connectedbycommerce.co.uk</span>
        <button type="submit" className="cta" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : 'Send enquiry →'}
        </button>
      </div>

      {status==='error' && (
        <p className={styles.error}>Something went wrong. Email <a href="mailto:info@connectedbycommerce.co.uk">info@connectedbycommerce.co.uk</a> directly.</p>
      )}
    </form>
  );
}
