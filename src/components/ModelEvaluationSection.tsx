import { motion } from "framer-motion";
import { SwatchBook, TrendingUp, Zap, Server, BrainCircuit, Activity } from "lucide-react";

const metrics = [
  { label: "LLMs Evaluated", value: "40+", icon: BrainCircuit, color: "text-blue-500" },
  { label: "AI Agents Built", value: "20+", icon: Zap, color: "text-purple-500" },
  { label: "MCP Servers", value: "15+", icon: Server, color: "text-pink-500" },
  { label: "GenAI Pipelines", value: "30+", icon: SwatchBook, color: "text-[#9effa9]" },
];

const ModelEvaluationSection = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    <div className="container px-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left — Visual Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative rounded-[3rem] bg-slate-950 p-12 overflow-hidden shadow-2xl border border-slate-800 group">
             <div className="flex flex-col gap-8 opacity-90 transition-opacity group-hover:opacity-100">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <span className="text-white font-black text-xs uppercase tracking-[0.2em] font-mono">Model evaluation engine</span>
                  <Activity className="w-5 h-5 text-[#9effa9] animate-pulse" />
                </div>
                
                <div className="space-y-6">
                  {/* Model 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      <span>Claude-3.5-Sonnet</span>
                      <span className="text-[#9effa9]">94% Precision</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full border border-slate-800">
                      <motion.div 
                         initial={{ width: 0 }} 
                         whileInView={{ width: "94%" }}
                         transition={{ duration: 1.5, delay: 0.2 }}
                         className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                      />
                    </div>
                  </div>

                  {/* Model 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      <span>GPT-4o Reasoning</span>
                      <span className="text-[#9effa9]">89% Accuracy</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full border border-slate-800">
                      <motion.div 
                         initial={{ width: 0 }} 
                         whileInView={{ width: "89%" }}
                         transition={{ duration: 1.5, delay: 0.4 }}
                         className="h-full bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                      />
                    </div>
                  </div>

                   {/* Model 3 */}
                   <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      <span>Gemini-1.5-Pro</span>
                      <span className="text-[#9effa9]">92% Contextual</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-900 rounded-full border border-slate-800">
                      <motion.div 
                         initial={{ width: 0 }} 
                         whileInView={{ width: "92%" }}
                         transition={{ duration: 1.5, delay: 0.6 }}
                         className="h-full bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                   <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden" />
                     ))}
                   </div>
                   <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Optimizing token windows...</span>
                </div>
             </div>
          </div>
          
          {/* Overlay element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#9effa9]/5 blur-[100px] -z-10 rounded-full" />
        </motion.div>

        {/* Right — Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-10 text-left">
          <div className="space-y-4">
            <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">Deep Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter leading-tight uppercase">
              LLM <span className="text-blue-600 italic font-black">Performance</span> Benchmarking
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We've evaluated 40+ LLM models since GPT-3.5 release, developing deep expertise in cost-performance optimization, token window management, and task-specific model selection for production systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-4 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#eef8ff] flex items-center justify-center transition-transform group-hover:scale-110">
                  <m.icon className={`w-8 h-8 text-slate-900`} />
                </div>
                <div>
                   <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">{m.value}</h4>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ModelEvaluationSection;
