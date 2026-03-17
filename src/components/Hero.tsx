import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContent = () => {
    const content = document.getElementById('concetti');
    content?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Abstract Background with Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579370318443-8da816457e43?auto=format&fit=crop&w=1920&q=80"
          alt="Sfondo campo di battaglia"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 blur-xl scale-105"
        />
        <div className="absolute inset-0 bg-stone-950/60" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_#0c0a09_100%)]" />
        {/* CSS-only grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-tight mb-12">
            L'Antropologia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-500">
              della Guerra
            </span>
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContent}
            className="px-8 py-3 bg-stone-100 text-stone-900 rounded-full font-medium hover:bg-white transition-colors"
          >
            Esplora i Concetti
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-500 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToContent}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
