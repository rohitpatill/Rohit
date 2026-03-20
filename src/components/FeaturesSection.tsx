import { motion } from "framer-motion";
import { Cpu, Database, BarChart3, Code2, BrainCircuit, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    num: "01",
    title: "Autonomous AI Agents",
    desc: "Custom multi-agent systems with autonomous reasoning. End-to-end GenAI pipelines and task-specific AI roles that work 24/7.",
  },
  {
    icon: Database,
    num: "02",
    title: "Enterprise RAG & Knowledge Graphs",
    desc: "Advanced retrieval with contextual chunking, BM25, and semantic search. GraphRAG with Neo4j for intelligent relationship mapping.",
  },
  {
    icon: Code2,
    num: "03",
    title: "MCP Server & Tool Orchestration",
    desc: "Custom Model Context Protocol development. Hierarchical architectures for complex tool execution and seamless API integration.",
  },
  {
    icon: BrainCircuit,
    num: "04",
    title: "Context Engineering",
    desc: "Advanced prompt and context engineering. Token window management and cost-performance tuning for maximum model output.",
  },
  {
    icon: BarChart3,
    num: "05",
    title: "LLM Evaluation & MLOps",
    desc: "Rigorous model evaluation across 40+ LLMs. Task-specific model selection, fine-tuning, and production monitoring.",
  },
  {
    icon: GraduationCap,
    num: "06",
    title: "AI Strategy & Training",
    desc: "Use-case discovery and ROI-driven AI auditing. Corporate seminars, team upskilling, and translating business problems into AI solutions.",
  },
];

const FeaturesSection = () => (
  <section id="services" className="py-24 bg-white relative overflow-hidden">
    <div className="container px-6 md:px-10">
      <div className="mb-16">
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">What We Do</span>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-slate-200 rounded-full" />
            <div className="w-4 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 max-w-2xl leading-tight">
          AI Solutions That Deliver
        </h2>
        <p className="text-slate-500 font-medium text-lg mt-4 max-w-2xl">From autonomous agents to enterprise knowledge systems, we engineer AI that solves real business problems.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-[2.5rem] p-8 flex flex-col gap-6 transition-all duration-500 hover:scale-[1.02] bg-white border border-slate-100 hover:bg-slate-900 hover:text-white hover:shadow-2xl hover:shadow-slate-900/20 active:scale-95 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all bg-blue-50 text-blue-600 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110">
              <f.icon className="w-8 h-8 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-xl leading-tight transition-colors">{f.title}</h3>
              <p className="text-base leading-relaxed font-medium text-slate-500 group-hover:text-slate-400 transition-colors">
                {f.desc}
              </p>
            </div>

            <span className="text-6xl font-display font-black tracking-tighter select-none text-slate-100 group-hover:text-white/5 transition-colors">
              {f.num}
            </span>
            
            {/* Hover decorative element */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-100 group-hover:bg-[#9effa9] transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
