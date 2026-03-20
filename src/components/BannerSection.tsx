import { motion } from "framer-motion";
import { Terminal, Send, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BannerSection = () => (
  <section className="py-24 bg-[#eef8ff]/50 overflow-hidden">
    <div className="container px-6 md:px-10">
      <div className="relative rounded-[3rem] overflow-hidden bg-white/40 backdrop-blur-sm border-2 border-white shadow-2xl shadow-blue-200/20 px-8 py-16 md:px-20 md:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1.5fr] items-center gap-12 relative z-10">
          
          {/* Left — Professional Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                alt="Cyber Visual" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 p-6 bg-white rounded-3xl shadow-xl flex items-center justify-center">
              <Code2 className="w-10 h-10 text-slate-900" />
            </div>
          </motion.div>

          {/* Middle — Text Content */}
          <div className="flex flex-col items-start gap-8 text-left">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
              Specialized<br />
              <span className="text-slate-950">MCP Architectures</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Building hierarchical Model Context Protocol (MCP) ecosystems that abstract complex business logic into intuitive, LLM-ready service interfaces.
            </p>
            <Button size="lg" className="rounded-2xl bg-[#9effa9] text-slate-900 hover:bg-[#8eef98] px-10 py-8 font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#9effa9]/20 transition-all hover:scale-105 active:scale-95">
              Explore MCP Solutions
            </Button>
          </div>

          {/* Right — Technical Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] bg-slate-900 p-10 shadow-3xl overflow-hidden group border border-slate-800">
               <div className="flex flex-col gap-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="space-y-4 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                       <Terminal className="w-4 h-4 text-blue-400" />
                       <span className="text-blue-400">Connecting to hierarchical MCP...</span>
                    </div>
                    <p className="text-green-400/80">✓ 120+ internal tools abstracted</p>
                    <p className="text-[#9effa9]">✓ Neo4j Graph RAG context active</p>
                    <div className="h-px bg-slate-800 my-4" />
                    <code className="block text-slate-100 group-hover:text-[#9effa9] transition-colors">const server = new MCPServer('Core');</code>
                    <code className="block text-slate-100 group-hover:text-blue-300 transition-colors">await server.exposeTo(llmAgent);</code>
                    <div className="flex items-end gap-1 h-12 mt-4 opacity-30">
                      {[40, 70, 45, 90, 65, 80, 50, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-white rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Absolute element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </div>
  </section>
);

export default BannerSection;
