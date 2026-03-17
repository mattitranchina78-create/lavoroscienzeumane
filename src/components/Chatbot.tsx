import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SITE_CONTEXT = `
Sei un assistente virtuale esperto per un sito web scolastico intitolato "L'Antropologia della Guerra".
Il tuo compito è rispondere alle domande dei visitatori basandoti sui contenuti del sito.

Contenuti del sito:
1. Definizione di Guerra: Forma violenta di risoluzione di conflitti tra unità politiche (tribù, stati). Diversa da faida o razzia.
2. Origini: Fenomeno universale dal Paleolitico. Evoluzione dagli eserciti permanenti (Sumeri) alle armi da fuoco (spersonalizzazione).
3. Natura Umana: Dibattito se l'uomo è "guerriero per natura". Jared Diamond: predisposizioni genetiche sia all'aggressività che alla collaborazione.
4. Politica: Von Clausewitz ("guerra come continuazione della politica"). Kant (democrazie come garanzia di pace).
5. Italia: Art. 11 Costituzione (ripudio della guerra). Partecipazione a missioni di peacekeeping (ONU, NATO).
6. Cause nelle Società Tradizionali (Approfondimento su Jared Diamond e i Dani della Nuova Guinea):
   - Cause Prossime (Soggettive): Vendetta, rapimento donne, furto di maiali (prestigio), stregoneria.
   - Cause Remote (Oggettive): Conquista risorse (terra, acqua), reputazione bellicosa (deterrenza), sopravvivenza del gruppo.

Rispondi in modo educato, sintetico e adatto a un contesto scolastico. Usa un tono formale ma accessibile. Se la domanda non riguarda questi argomenti, cerca di ricondurla al tema o dì gentilmente che puoi rispondere solo sul tema della guerra e antropologia.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Ciao! Sono l\'assistente virtuale dell\'esposizione. Hai domande sul tema della guerra e dell\'antropologia?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for the model (limit context window if needed, but for simple chat full history is usually fine for short sessions)
      // We'll just send the last few messages plus the system context as instruction
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
            { role: 'user', parts: [{ text: `Context: ${SITE_CONTEXT}\n\nUser Question: ${userMessage}` }] }
        ],
      });

      const responseText = response.text || "Mi dispiace, non sono riuscito a elaborare una risposta al momento.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Si è verificato un errore. Per favore riprova più tardi." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-stone-800 p-4 flex justify-between items-center border-b border-stone-700">
              <div className="flex items-center gap-2">
                <Bot className="text-white" size={20} />
                <h3 className="text-white font-medium font-display">Assistente IA</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-950">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-white text-stone-900 rounded-tr-none'
                        : 'bg-stone-800 text-stone-200 rounded-tl-none border border-stone-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-stone-800 p-3 rounded-2xl rounded-tl-none border border-stone-700">
                    <Loader2 className="animate-spin text-stone-400" size={16} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-stone-800 border-t border-stone-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Fai una domanda..."
                className="flex-1 bg-stone-900 text-white placeholder-stone-500 border border-stone-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-stone-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-white text-stone-900 rounded-full hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-white text-stone-900 rounded-full shadow-lg hover:shadow-xl z-50 transition-shadow"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}
