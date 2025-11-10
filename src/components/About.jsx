import { motion } from 'framer-motion';

const team = [
  {
    name: 'Ava Collins',
    role: 'Lead Editor',
    bio: 'Precision cuts, narrative rhythm, and seamless story arcs.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Kai Rivera',
    role: 'Colorist',
    bio: 'Cinematic palettes. Grain, contrast, and light that breathes.',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nova Patel',
    role: 'VFX / Motion',
    bio: 'Kinetic graphics. Subtle realism meets surreal energy.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#0A0A0A] to-[#1F1F1F] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#F5F5F5]"
        >
          About RetroVision
        </motion.h2>
        <p className="mt-4 max-w-3xl text-[#D1D5DB]">
          We craft cinematic narratives for brands, artists, and filmmakers. Our workflow blends editorial precision with design-forward motion and tactile color science.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#111]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#DC2626]/20 via-transparent to-[#FACC15]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <img src={m.img} alt={m.name} className="h-64 w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <h3 className="text-[#F5F5F5] font-semibold">{m.name}</h3>
                <p className="text-[#FF4C00] text-sm">{m.role}</p>
                <p className="mt-2 text-sm text-[#D1D5DB]">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
