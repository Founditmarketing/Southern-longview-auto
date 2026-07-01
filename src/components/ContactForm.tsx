import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', vehicle: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    }
  }

  const inputClass =
    'w-full bg-[#111] border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-brand-yellow transition-colors duration-200';

  const labelClass = 'block text-white/50 text-xs font-mono uppercase tracking-[0.15em] mb-2';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-8">
        <CheckCircle size={48} className="text-brand-yellow mb-6" />
        <h3 className="text-2xl font-bold tracking-tight mb-3">Message Sent</h3>
        <p className="text-white/50 text-base leading-relaxed max-w-sm">
          Thanks for reaching out. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-brand-yellow transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="p-8 md:p-10 flex flex-col gap-6 h-full">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-brand-yellow font-mono text-xs tracking-widest uppercase">Send a Message</span>
        </div>
        <h2 className="text-2xl font-display font-bold tracking-tight text-white">
          How can we help?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name <span className="text-brand-red">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email <span className="text-brand-red">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(903) 555-0100"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vehicle" className={labelClass}>Vehicle</label>
          <input
            id="vehicle"
            name="vehicle"
            type="text"
            value={form.vehicle}
            onChange={handleChange}
            placeholder="2018 Ford F-250"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="message" className={labelClass}>Message <span className="text-brand-red">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what's going on with your vehicle or what service you need..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-3 bg-brand-yellow text-black font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
