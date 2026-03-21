import { motion } from "framer-motion";
import { 
  Bot, Search, Link2, Settings2, LineChart, Users2, 
  ArrowRight, Zap, FileText, Server, Brain, Activity, Target,
  Database, Link, Network, Binary, Terminal, Cloud, Cpu, History
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const techStack = [
  { icon: <Cpu className="w-8 h-8 text-emerald-500" />, name: "OpenAI" },
  { icon: <Terminal className="w-8 h-8 text-orange-500" />, name: "Anthropic" },
  { icon: <Cloud className="w-8 h-8 text-sky-500" />, name: "Google AI" },
  { icon: <Binary className="w-8 h-8 text-slate-700" />, name: "Neo4j" },
  { icon: <Link className="w-8 h-8 text-purple-500" />, name: "LangChain" },
  { icon: <Network className="w-8 h-8 text-blue-500" />, name: "MCP Protocol" },
  { icon: <Database className="w-8 h-8 text-red-500" />, name: "RAG Systems" },
  { icon: <History className="w-8 h-8 text-green-500" />, name: "GenAI Pipelines" },
];

export const services = [
  {
    id: "agents",
    title: "Autonomous AI Agents",
    shortDesc: "Self-reasoning multi-agent systems designed for 24/7 complex operations.",
    animation: "robot",
    color: "#a78bfa",
    fullDesc: "We build goal-oriented AI agent swarms that can plan, execute, and self-correct across your technical stack. These aren't just chatbots—they're digital employees with specific task-roles (Plan, Research, Execute, Audit).",
    features: [
      "Task-specific Multi-agent Hierarchies",
      "Goal Decomposition & Planning",
      "Human-in-the-Loop Integration",
      "Autonomous Tool Execution"
    ],
    flowchart: [
      { step: "Project Goal", detail: "High-level objective defined by business stakeholders." },
      { step: "Planner Agent", detail: "Decomposes the goal into atomic, executable tasks." },
      { step: "Worker Swarm", detail: "Specialized agents execute tasks (Research, Code, API calls)." },
      { step: "Audit & Delivery", detail: "Final verification and integration into production." },
    ]
  },
  {
    id: "docs",
    title: "Smart Document Intelligence",
    shortDesc: "Transform raw documents into searchable, intelligent knowledge graphs.",
    animation: "document",
    color: "#60a5fa",
    fullDesc: "Moving beyond simple keywords. We use Advanced RAG (Retrieval-Augmented Generation) with semantic search and knowledge graphs to ensure your LLMs have precise, context-aware information from your internal PDFs, Word, and DBs.",
    features: [
      "Context-aware Chunking & Embedding",
      "Knowledge Graph Construction (Neo4j)",
      "Hybrid Search (BM25 + Semantic)",
      "Source Citation & Fact Verification"
    ],
    flowchart: [
      { step: "Data Ingestion", detail: "High-volume capture of PDFs, Wikis, and Databases." },
      { step: "Semantic Chunking", detail: "Breaking text into logically coherent context blocks." },
      { step: "Vector Indexing", detail: "Storing embeddings in Qdrant/Pinecone for ultra-fast recall." },
      { step: "RAG Retrieval", detail: "Feeding pinpoint context to the model for hallucination-free output." },
    ]
  },
  {
    id: "tooling",
    title: "Tool & System Orchestration",
    shortDesc: "Seamlessly connect AI models to your APIs, databases, and enterprise systems.",
    animation: "network",
    color: "#34d399",
    fullDesc: "We implement Model Context Protocol (MCP) servers and hierarchical tool architectures that allow models to safely read/write to your systems, automating workflows that previously required manual oversight.",
    features: [
      "Custom MCP Server Development",
      "Dynamic API Tool Calling",
      "Secure System Interoperability",
      "Workflow Automation Engines"
    ],
    flowchart: [
      { step: "User Intent", detail: "Natural language query requiring system action." },
      { step: "Function Calling", detail: "LLM identifies and selects the correct tool/API." },
      { step: "MCP Execution", detail: "Secure execution through our custom server architecture." },
      { step: "System Update", detail: "Direct write-back or read from your enterprise systems." },
    ]
  },
  {
    id: "tuning",
    title: "AI Performance Tuning",
    shortDesc: "Optimize models for speed, cost, and extreme accuracy on your specific niche.",
    animation: "optimization",
    color: "#f472b6",
    fullDesc: "Don't overspend on generic models. We optimize your token usage through advanced context engineering and task-specific model selection to get 10x ROI on model costs while maintaining top-tier performance.",
    features: [
      "Context Engineering & Prompt Ops",
      "Token Window Optimization",
      "Model Quantization & Scaling",
      "Latency & Cost Benchmarking"
    ],
    flowchart: [
      { step: "Baseline Audit", detail: "Measuring current model accuracy and latency." },
      { step: "Context Pruning", detail: "Removing noise and optimizing the prompt-context ratio." },
      { step: "Hyperparameter Tuning", detail: "Adjusting temperature and top-p for predictability." },
      { step: "Deployment", detail: "Pushing optimized prompts and model configs to prod." },
    ]
  },
  {
    id: "monitoring",
    title: "Model Testing & Monitoring",
    shortDesc: "Production-grade MLOps to ensure your AI never drifts or hallucinate.",
    animation: "chart",
    color: "#fbbf24",
    fullDesc: "AI is nondeterministic. We build rigorous evaluation pipelines using frameworks like Ragas and Promptfoo to monitor hallucinations, accuracy, and safety in real-time, preventing high-cost production errors.",
    features: [
      "Real-time Drift Detection",
      "Hallucination Monitoring",
      "Automated Testing Suites",
      "Safety Guardrail Implementation"
    ],
    flowchart: [
      { step: "Output Capture", detail: "Real-time streaming of all production AI responses." },
      { step: "Auto-Evaluation", detail: "Using LLM-as-a-judge (Ragas) to score accuracy." },
      { step: "Drift Analysis", detail: "Identifying semantic shift in user queries or model outputs." },
      { step: "Corrective Action", detail: "Auto-retuning or alerting engineering teams of failures." },
    ]
  },
  {
    id: "strategy",
    title: "AI Strategy & Team Training",
    shortDesc: "Translate business problems into AI solutions and upskill your engineering team.",
    animation: "presentation",
    color: "#2dd4bf",
    fullDesc: "We don't just build; we consult. We audit your existing processes to find high-ROI AI use cases and train your technical team on LLM best practices, ensuring long-term sustainability and an AI-first culture.",
    features: [
      "AI ROI Business Auditing",
      "Technical Roadmapping",
      "Team Upskilling & Seminars",
      "Custom Implementation Guides"
    ],
    flowchart: [
      { step: "Discovery", detail: "Deep dive into business operations and friction points." },
      { step: "Feasibility", detail: "Technical assessment of AI application maturity." },
      { step: "Pilot Roadmap", detail: "Iterative plan for MVP and scaled AI rollout." },
      { step: "Upskilling", detail: "Hands-on workshops for internal engineering teams." },
    ]
  }
];

// Re-usable animations exported for the detail page too
export const SmallRobotAnimation = () => (
    <div className="relative w-14 h-14 flex items-center justify-center">
        <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-10 h-10 bg-[#9effa9]/10 rounded-full border-2 border-[#9effa9]/30 flex items-center justify-center"
        >
            <Bot className="w-5 h-5 text-[#9effa9]" />
        </motion.div>
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 border border-[#9effa9]/20 rounded-full"
            />
        ))}
    </div>
);

export const SearchAnimation = () => (
    <div className="relative w-14 h-14 flex flex-col items-center justify-center gap-1">
        <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-7 h-8 bg-slate-900/5 border border-slate-200 rounded-lg flex items-center justify-center"
        >
            <FileText className="w-4 h-4 text-slate-400 opacity-50" />
        </motion.div>
        <motion.div 
            animate={{ x: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute z-10 p-1 bg-blue-500 rounded-full shadow-lg"
        >
            <Search className="w-3 h-3 text-white" />
        </motion.div>
    </div>
);

export const NetworkAnimation = () => (
    <div className="relative w-14 h-14 flex items-center justify-center">
        <Server className="w-6 h-6 text-emerald-500 z-10" />
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 6 + i*2, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full border border-emerald-500/10 rounded-full"
            />
        ))}
    </div>
);

export const OptimizationAnimation = () => (
    <div className="relative w-14 h-14 flex items-center justify-center">
        <Brain className="w-6 h-6 text-pink-500" />
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border border-dashed border-pink-500/20 rounded-full"
        />
    </div>
);

export const ChartAnimation = () => (
    <div className="relative w-14 h-14 flex flex-col items-center justify-end p-1 border-b-2 border-amber-500/20 gap-1">
        <div className="flex gap-0.5 h-3/4 items-end">
            {[40, 70, 50, 90].map((h, i) => (
                <motion.div
                    key={i}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
                    className="w-1.5 md:w-2 bg-amber-500/40 rounded-t-sm"
                />
            ))}
        </div>
        <Activity className="absolute top-1 right-1 w-2.5 h-2.5 text-amber-500/50" />
    </div>
);

export const TeamAnimation = () => (
    <div className="relative w-14 h-14 flex items-center justify-center">
        <Users2 className="w-6 h-6 text-teal-600" />
        <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-full h-full border-t-2 border-teal-500/10 rounded-full"
        />
    </div>
);

const ServicesSection = () => {
    const navigate = useNavigate();

    return (
        <section id="services" className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#9effa9]/[0.02] pointer-events-none" />
            <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#9effa9]/5 blur-[120px] rounded-full pointer-events-none" />            <div className="container relative z-10 px-4 md:px-8 max-w-[1400px]">
                <div className="max-w-3xl mb-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-950/10 mb-4"
                    >
                        <Zap className="w-3 h-3 text-slate-950" />
                        <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">What We Do</span>
                    </motion.div>
                    
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-[1.1] tracking-tighter">
                        Engineering <span className="text-[#0ea5e9]">Intelligence.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }}
                            whileHover={{ 
                                y: -20, 
                                scale: 1.1, 
                                zIndex: 100, 
                                transition: { type: "spring", stiffness: 400, damping: 25 } 
                            }}
                            onClick={() => navigate(`/service/${s.id}`)}
                            className="group relative bg-white border border-slate-100 p-5 md:p-6 rounded-[1.5rem] cursor-pointer hover:border-[#9effa9] hover:shadow-[0_40px_80px_-15px_rgba(158,255,169,0.4)] transition-all duration-500 flex flex-col items-start"
                        >
                            <div className="mb-3 w-full flex justify-between items-start">
                                <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-[#9effa9]/10 transition-colors">
                                    {s.animation === "robot" && <SmallRobotAnimation />}
                                    {s.animation === "document" && <SearchAnimation />}
                                    {s.animation === "network" && <NetworkAnimation />}
                                    {s.animation === "optimization" && <OptimizationAnimation />}
                                    {s.animation === "chart" && <ChartAnimation />}
                                    {s.animation === "presentation" && <TeamAnimation />}
                                </div>
                                <div className="w-6 h-6 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#9effa9] group-hover:border-transparent transition-all">
                                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight group-hover:text-[#0ea5e9] transition-colors">{s.title}</h3>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
                                    {s.shortDesc}
                                </p>
                            </div>

                            <div className="mt-4 pt-2 border-t border-slate-50 w-full flex items-center justify-between">
                                <span className="text-slate-400 font-black text-[7px] uppercase tracking-widest group-hover:text-slate-900 transition-colors">Technical Implementation</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#9effa9]" />
                                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#9effa9] delay-75" />
                                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#9effa9] delay-150" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Horizontal Scroll - Integrated */}
                <div className="mt-12 pt-8 border-t border-slate-100/50">
                    <div className="flex animate-scroll-logos whitespace-nowrap overflow-hidden">
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div key={i} className={`mx-12 flex items-center gap-4 transition-all opacity-40 hover:opacity-100 cursor-default group`}>
                                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                    {tech.icon}
                                </div>
                                <span className="text-xs font-black tracking-widest text-slate-400 group-hover:text-slate-900 uppercase transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
