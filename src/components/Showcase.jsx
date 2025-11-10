import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  { id: 1, title: 'Neon Drift', cat: 'Music Videos', thumb: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop', role: 'Edit + Grade', tools: 'Premiere, DaVinci' },
  { id: 2, title: 'Pulse/Ad', cat: 'Ads', thumb: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop', role: 'Edit', tools: 'Premiere' },
  { id: 3, title: 'Super 8 Wedding', cat: 'Weddings', thumb: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1600&auto=format&fit=crop', role: 'Edit + Color', tools: 'Premiere, DaVinci' },
  { id: 4, title: 'Short Film // Ember', cat: 'Films', thumb: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop', role: 'Edit + VFX', tools: 'Premiere, AE' },
];

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section id="showcase" ref={ref} className="relative w-full bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 style={{ rotate }} className="text-3xl md:text-4xl font-bold text-[#F5F5F5]">
          Portfolio / Showreel
        </motion.h2>
        <p className="mt-3 text-[#D1D5DB] max-w-3xl">
          A selection of recent projects. Hover to reveal details. Click to play.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <motion.a
              key={p.id}
              href="#"
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#111]"
            >
              <img src={p.thumb} alt={p.title} className="h-64 w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#FF4C00] p-2 shadow-[0_0_20px_rgba(255,76,0,0.45)]">
                    <Play className="h-4 w-4 text-black" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F5F5]">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-[#D1D5DB]">{p.cat} · {p.role} · {p.tools}</p>
              </div>
              <span className="absolute inset-0 -z-10 bg-[#DC2626]/0 blur-0 transition-all duration-500 group-hover:bg-[#DC2626]/30 group-hover:blur-xl" />
            </motion.a>
          ))}
        </div>
      </div>

      <section id="showcase-services" className="mt-24">
        <h3 className="sr-only">Services anchor</h3>
      </section>
    </section>
  );
}
