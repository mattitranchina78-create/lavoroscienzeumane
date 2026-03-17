import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-stone-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-white font-display font-bold text-xl tracking-tight">
            Antropologia<span className="text-stone-400">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-300">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => scrollTo('concetti')} className="hover:text-white transition-colors">Concetti</button>
            <button onClick={() => scrollTo('approfondimento')} className="hover:text-white transition-colors">Approfondimento</button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 bg-stone-950 border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 text-stone-300">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="text-left py-2 hover:text-white">Home</button>
              <button onClick={() => scrollTo('concetti')} className="text-left py-2 hover:text-white">Concetti Chiave</button>
              <button onClick={() => scrollTo('approfondimento')} className="text-left py-2 hover:text-white">Approfondimento</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
