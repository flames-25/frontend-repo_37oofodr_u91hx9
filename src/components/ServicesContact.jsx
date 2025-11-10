import { motion } from 'framer-motion';
import { Palette, Waves, Music2, Sparkles, Send, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const services = [
  { icon: Sparkles, title: 'Video Editing', desc: 'Narrative, commercial, music, and social formats.' },
  { icon: Palette, title: 'Color Grading', desc: 'Filmic contrast, skin tone perfection, and grain.' },
  { icon: Waves, title: 'Motion Graphics', desc: 'Kinetic typography, logo stings, UI/UX animations.' },
  { icon: Music2, title: 'Sound Design', desc: 'Atmos, foley, and mix for impact across devices.' },
];

export default function ServicesContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Sent! We will get back within 24 hours.');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('Something went wrong. Try again.');
    }
  };

  return (
    <section id="showcase-services" className="relative w-full bg-gradient-to-b from-[#0A0A0A] to-[#1F1F1F] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">Services</h2>
        <p className="mt-3 text-[#D1D5DB] max-w-3xl">
          From edit to finish — built for speed, style, and story.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#111] p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FACC15]/10 via-transparent to-[#DC2626]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <Icon className="h-6 w-6 text-[#FACC15]" />
              <h3 className="mt-3 text-lg font-semibold text-[#F5F5F5]">{title}</h3>
              <p className="mt-1 text-sm text-[#D1D5DB]">{desc}</p>
              <button className="mt-4 inline-flex rounded-md bg-[#FF4C00] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_14px_rgba(255,76,0,0.35)] transition-transform hover:scale-[1.03]">
                Custom Project
              </button>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-[#F5F5F5]">Hire Us</h3>
            <p className="mt-2 text-[#D1D5DB]">
              Tell us about your project. Share links, references, and deadlines.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[#D1D5DB]">
              <a href="mailto:hello@retrovision.studio" className="group inline-flex items-center gap-2 hover:text-[#FACC15]">
                <Mail className="h-5 w-5" /> hello@retrovision.studio
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 hover:text-[#FACC15]">
                <Phone className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="relative overflow-hidden rounded-xl border border-white/5 bg-[#111] p-6">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#DC2626]/10 via-transparent to-[#FACC15]/10" />
            <label className="block text-sm text-[#D1D5DB]">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-[#F5F5F5] outline-none ring-[#FF4C00]/30 focus:ring"
              required
            />
            <label className="mt-4 block text-sm text-[#D1D5DB]">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-[#F5F5F5] outline-none ring-[#FF4C00]/30 focus:ring"
              required
            />
            <label className="mt-4 block text-sm text-[#D1D5DB]">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full resize-none rounded-md border border-white/10 bg-black/40 px-3 py-2 text-[#F5F5F5] outline-none ring-[#FF4C00]/30 focus:ring"
              required
            />
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#FF4C00] px-4 py-2 font-semibold text-black shadow-[0_0_14px_rgba(255,76,0,0.35)] hover:scale-[1.02]">
              <Send className="h-4 w-4" /> Send
            </button>
            {status && <p className="mt-3 text-sm text-[#D1D5DB]">{status}</p>}
          </form>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-white/5 bg-[#111]">
              <img src={`https://images.unsplash.com/photo-15${i}6575150278-77136aed6920?q=80&w=1600&auto=format&fit=crop`} alt="bts" className="h-48 w-full object-cover opacity-90" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
