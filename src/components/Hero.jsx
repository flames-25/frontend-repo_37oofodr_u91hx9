import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Film } from 'lucide-react';
import { useRef } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#showcase', label: 'Portfolio' },
  { href: '#showcase-services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.8, 0.5]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">        
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0A0A0A]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <nav className="flex items-center gap-6 text-[#D1D5DB]">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="group text-sm md:text-base tracking-wide uppercase">
              <span className="transition-colors group-hover:text-[#FF4C00]">{link.label}</span>
              <span className="block h-0.5 scale-x-0 bg-[#FF4C00] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a href="#home" className="flex items-center gap-2 text-[#F5F5F5]">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="rounded-full bg-[#FF4C00]/10 p-2 ring-1 ring-[#FF4C00]/30"
          >
            <Film className="h-5 w-5 text-[#FF4C00]" />
          </motion.div>
          <span className="font-semibold tracking-wide">RetroVision</span>
        </a>
      </header>

      <motion.div style={{ scale, y, opacity }} className="relative z-10 mx-auto mt-24 flex max-w-5xl flex-col items-center px-6 text-center md:mt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="bg-gradient-to-b from-[#F5F5F5] to-[#D1D5DB] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Editing the vision behind every frame.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-[#D1D5DB]"
        >
          Cinematic storytelling through precision editing. Bold. Adventurous. Energetic.
        </motion.p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#showcase"
            className="group relative inline-flex items-center gap-2 rounded-md bg-[#FF4C00] px-6 py-3 text-base font-semibold text-black shadow-[0_0_20px_rgba(255,76,0,0.35)] transition-transform hover:scale-[1.03] focus:outline-none"
          >
            <Rocket className="h-5 w-5" />
            View Our Work
            <span className="absolute inset-0 -z-10 rounded-md bg-[#DC2626]/0 blur-0 transition-all group-hover:bg-[#DC2626]/40 group-hover:blur-md" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-md border border-[#D1D5DB]/20 px-6 py-3 text-base font-medium text-[#F5F5F5] transition-colors hover:border-[#FACC15]/60 hover:text-[#FACC15]"
          >
            Get a Quote
            <span className="absolute inset-0 -z-10 rounded-md bg-[#FACC15]/0 blur-0 transition-all group-hover:bg-[#FACC15]/20 group-hover:blur-md" />
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center text-[#D1D5DB]">
          <span className="text-xs tracking-widest">SCROLL</span>
          <span className="mt-2 h-10 w-px animate-pulse bg-[#DC2626]" />
        </div>
      </motion.div>
    </section>
  );
}
