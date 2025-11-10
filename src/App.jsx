import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import ServicesContact from './components/ServicesContact';
import SEO from './components/SEO';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-[#F5F5F5]">
      <SEO />
      <Hero />
      <About />
      <Showcase />
      <ServicesContact />
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-8 text-center text-sm text-[#D1D5DB]">
        <p>© {new Date().getFullYear()} RetroVision Studio — All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
