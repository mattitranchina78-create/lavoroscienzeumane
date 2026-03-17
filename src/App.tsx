import Hero from './components/Hero';
import ConceptGrid from './components/ConceptGrid';
import DeepDiveSection from './components/DeepDiveSection';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <main className="min-h-screen bg-stone-950 font-sans selection:bg-white/20 selection:text-white">
      <Navbar />
      <Hero />
      <ConceptGrid />
      <DeepDiveSection />
      <Chatbot />
      
      <footer className="py-12 bg-stone-950 border-t border-white/10 text-center text-stone-500 text-sm">
        <div className="container mx-auto px-6">
          <p className="mb-2 font-display uppercase tracking-widest text-xs">Esposizione - Scienze Umane</p>
          <p className="font-serif italic text-stone-400">Mattia Tranchina</p>
        </div>
      </footer>
    </main>
  );
}
