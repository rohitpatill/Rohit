import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Cpu, Code2, Network, Brain, Zap, FlaskConical, Globe, Stethoscope } from "lucide-react";

const projectCategories = [
  { name: "All Projects", icon: <Network className="w-4 h-4 text-purple-500" /> },
  { name: "RAG Systems", icon: <Brain className="w-4 h-4 text-pink-500" /> },
  { name: "MCP Architecture", icon: <Code2 className="w-4 h-4 text-blue-500" /> },
  { name: "AI Agents", icon: <Cpu className="w-4 h-4 text-teal-500" /> },
];

const projectLogs = [
  {
    name: "Enterprise Document Intelligence",
    desc: "RAG-powered system processing 10,000+ documents daily with 95%+ accuracy using contextual chunking and semantic search.",
    tag: "RAG",
    date: "Delivered",
    icon: <Brain className="w-6 h-6 text-pink-500" />
  },
  {
    name: "Hierarchical MCP Architecture",
    desc: "95.4% complexity reduction by abstracting 120+ tools behind 6 high-level service interfaces with distributed intelligence.",
    tag: "MCP",
    date: "Delivered",
    icon: <Network className="w-6 h-6 text-purple-500" />
  },
  {
    name: "Multi-Agent Workflow Platform",
    desc: "Drag-and-drop AI agent builder enabling complex workflows with 20+ specialized agents and 30+ GenAI pipelines.",
    tag: "Agents",
    date: "Delivered",
    icon: <Cpu className="w-6 h-6 text-blue-500" />
  },
];

const ActivitySection = () => {
  const [selected, setSelected] = useState("All Projects");

  return (
    <section id="work" className="py-24 bg-white relative">
      <div className="container px-6 md:px-10">
        <div className="flex flex-col gap-1 mb-4 text-left">
          <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">Our Work</span>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-[#9effa9] rounded-full" />
            <div className="w-4 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 text-left">
          Solutions We've Engineered
        </h2>
        <p className="text-slate-500 font-medium text-lg mb-16 text-left">Real-world AI systems delivering measurable impact for enterprise clients.</p>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="bg-[#eef8ff] rounded-[3rem] p-10 border border-white shadow-xl shadow-blue-200/20"
          >
            <div className="flex items-center justify-between mb-8 group cursor-pointer">
              <span className="text-lg font-black text-slate-900 uppercase tracking-tighter">Categories</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>

            <div className="space-y-4">
              {projectCategories.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelected(c.name)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 ${
                    selected === c.name 
                      ? "bg-white shadow-2xl shadow-blue-200/30 scale-[1.05] border border-blue-50" 
                      : "hover:bg-white/50"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl bg-white shadow-sm`}>
                    {c.icon}
                  </div>
                  <span className={`text-sm font-bold tracking-tight ${selected === c.name ? "text-slate-900" : "text-slate-500"}`}>
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project List */}
          <div className="space-y-5">
             <div className="hidden md:grid md:grid-cols-[auto_1fr_auto_auto] gap-10 px-10 py-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-left">
               <span className="w-14">Core</span>
               <span className="ml-10">Project Details</span>
               <span className="w-32">Metric</span>
               <span className="w-24">Year</span>
             </div>

             {projectLogs.map((log, i) => (
               <motion.div
                 key={log.name}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto_auto] gap-6 md:gap-10 px-8 md:px-10 py-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all items-start md:items-center group cursor-pointer text-left"
               >
                 <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform group-hover:bg-white">
                   {log.icon}
                 </div>
                 
                 <div className="flex flex-col gap-1.5 overflow-hidden">
                   <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">{log.name}</h4>
                   <p className="text-sm font-medium text-slate-400 line-clamp-3 leading-relaxed">{log.desc}</p>
                 </div>

                 <div className="flex items-center justify-between w-full md:w-auto md:block">
                   <div className="md:hidden text-[10px] font-black text-slate-400 uppercase tracking-widest">Metric</div>
                   <div className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest leading-none">
                     {log.tag}
                   </div>
                 </div>

                 <div className="flex items-center justify-between w-full md:w-auto md:block">
                   <div className="md:hidden text-[10px] font-black text-slate-400 uppercase tracking-widest">Year</div>
                   <div className="text-xs font-black text-slate-500 w-auto md:w-24 tabular-nums">
                     {log.date}
                   </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
