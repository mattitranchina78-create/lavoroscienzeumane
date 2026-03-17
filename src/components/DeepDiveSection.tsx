import { motion } from 'motion/react';
import { Target, ShieldAlert, Users, Flame } from 'lucide-react';

export default function DeepDiveSection() {
  return (
    <section id="approfondimento" className="py-24 bg-stone-100 text-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-stone-500 font-mono text-sm uppercase tracking-widest font-bold">Approfondimento</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-6 text-stone-900">
              Le Cause della Guerra <br/>
              <span className="font-serif italic font-normal text-stone-600">Nelle Società Tradizionali</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Analisi antropologica basata sugli studi di Jared Diamond e sul caso dei Dani della Nuova Guinea.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Cause Prossime */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-stone-100 text-stone-600 rounded-xl">
                  <Flame size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display">Cause Prossime <span className="block text-sm font-normal text-stone-500 font-sans">(Soggettive)</span></h3>
              </div>
              <p className="text-stone-600 mb-6 italic border-l-2 border-stone-300 pl-4">
                "La scintilla immediata. Le motivazioni dichiarate dai nativi quando vengono interrogati sul perché combattono."
              </p>
              <div className="text-stone-700 leading-relaxed space-y-4">
                <p>
                  Quando gli antropologi interrogano i membri delle tribù sulle ragioni del conflitto, le risposte riguardano quasi sempre eventi specifici e personali che hanno un forte impatto emotivo. La motivazione più frequente è la <strong>vendetta</strong> per l'uccisione di un membro del proprio gruppo, che innesca un ciclo continuo di ritorsioni difficilmente arrestabile senza un'autorità esterna.
                </p>
                <p>
                  Altre cause scatenanti includono il rapimento o l'oltraggio alle donne, oppure il <strong>furto di beni preziosi</strong> come i maiali. In queste società, tali beni non sono semplici riserve alimentari, ma indicatori fondamentali di prestigio sociale e potere politico. Spesso, anche accuse di stregoneria o la radicata credenza nell'intrinseca malvagità dei vicini ("loro sono cattivi, noi siamo umani") sono sufficienti a giustificare l'apertura delle ostilità.
                </p>
              </div>
            </motion.div>

            {/* Cause Remote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-900 text-stone-100 p-8 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-stone-800 text-stone-300 rounded-xl">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display">Cause Remote <span className="block text-sm font-normal text-stone-400 font-sans">(Oggettive)</span></h3>
              </div>
              <p className="text-stone-400 mb-6 italic border-l-2 border-stone-600 pl-4">
                "Le vere motivazioni di fondo, spesso di natura economica, demografica o sociale, individuate dagli studiosi."
              </p>
              <div className="text-stone-300 leading-relaxed space-y-4">
                <p>
                  Dietro le giustificazioni emotive fornite dai protagonisti, gli antropologi individuano motivazioni strutturali ben più profonde, legate alla <strong>sopravvivenza del gruppo</strong>. La guerra serve spesso a conquistare o difendere territori ricchi di risorse essenziali come acqua, terra coltivabile o zone di caccia, necessarie per sostenere la popolazione in crescita.
                </p>
                <p>
                  Inoltre, in un contesto privo di uno Stato centrale che garantisca la sicurezza, mantenere una <strong>reputazione bellicosa</strong> è una strategia politica cruciale. Incutere timore nelle popolazioni confinanti funge da deterrente contro future aggressioni: mostrarsi deboli potrebbe invitare all'attacco e portare all'annientamento. La guerra diventa quindi uno strumento paradossale per garantire la sicurezza a lungo termine della comunità.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-stone-200 rounded-2xl border-l-4 border-stone-400"
          >
            <div className="flex gap-4">
              <ShieldAlert className="shrink-0 text-stone-600" />
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Conclusione Antropologica</h4>
                <p className="text-stone-700 leading-relaxed">
                  Questa distinzione ci aiuta a comprendere che, anche nelle società più antiche, la guerra non è quasi mai un atto di pura follia irrazionale, ma risponde a complesse dinamiche sociali, economiche e di sopravvivenza.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
