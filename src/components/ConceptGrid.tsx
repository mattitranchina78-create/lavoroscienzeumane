import { motion } from 'motion/react';
import { Sword, Scroll, Skull, Scale, Globe, Zap } from 'lucide-react';

const concepts = [
  {
    id: 'definizione',
    title: 'Definizione di Guerra',
    icon: Sword,
    content: "L'antropologia definisce la guerra come una forma violenta di risoluzione di un conflitto tra unità politiche contrapposte (tribù, regni, Stati). Si distingue da episodi di aggressività più limitati come la faida o la razzia.",
    color: "from-stone-800/40 to-stone-950"
  },
  {
    id: 'origini',
    title: 'Origini e Sviluppo',
    icon: Scroll,
    content: "Fenomeno universale documentato fin dal Paleolitico. Evoluta dai primi eserciti permanenti (Sumeri, Egizi) fino alla 'meccanizzazione e spersonalizzazione' dei conflitti con le armi da fuoco (XIV secolo).",
    color: "from-stone-800/40 to-stone-950"
  },
  {
    id: 'natura',
    title: 'Natura Umana',
    icon: Skull,
    content: "Dibattito antropologico: siamo 'guerrieri per natura'? Jared Diamond suggerisce predisposizioni genetiche sia all'aggressività che alla collaborazione, con ambiente e storia come fattori chiave.",
    color: "from-stone-800/40 to-stone-950"
  },
  {
    id: 'politica',
    title: 'Guerra e Politica',
    icon: Scale,
    content: "Von Clausewitz: 'la guerra è la continuazione della politica'. Kant: le democrazie sono garanzia di pace. L'integrazione europea post-bellica conferma l'intuizione kantiana.",
    color: "from-stone-800/40 to-stone-950"
  },
  {
    id: 'italia',
    title: "L'Italia e la Costituzione",
    icon: Globe,
    content: "Art. 11: L'Italia 'ripudia la guerra' come offesa. Partecipa però a missioni difensive e di peacekeeping (ONU, NATO) per la tutela dei diritti umani (es. Kosovo, Iraq).",
    color: "from-stone-800/40 to-stone-950"
  },
  {
    id: 'futuro',
    title: "Tecnologia e Futuro",
    icon: Zap,
    content: "La guerra contemporanea si sposta verso il dominio digitale e l'automazione. Droni e cyber-warfare pongono nuove sfide etiche e antropologiche sulla responsabilità e la distanza dal conflitto.",
    color: "from-stone-800/40 to-stone-950"
  }
];

export default function ConceptGrid() {
  return (
    <section id="concetti" className="py-24 bg-stone-950 text-stone-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Concetti Chiave</h2>
          <div className="h-1 w-24 bg-stone-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${item.color} hover:border-white/10 transition-colors duration-300 group`}
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-stone-200 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-stone-100">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed font-sans">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
