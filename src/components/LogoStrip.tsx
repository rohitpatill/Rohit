import { Database, Link, Network, Binary, Terminal, Cloud, Cpu, History } from "lucide-react";

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

const LogoStrip = () => (
  <section className="bg-white py-14 overflow-hidden border-y border-slate-100">
    <div className="flex animate-scroll-logos whitespace-nowrap">
      {[...techStack, ...techStack, ...techStack].map((tech, i) => (
        <div key={i} className={`mx-16 flex items-center gap-4 transition-all opacity-40 hover:opacity-100 cursor-default group`}>
          <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
            {tech.icon}
          </div>
          <span className="text-sm font-bold tracking-widest text-slate-400 group-hover:text-slate-900 uppercase transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default LogoStrip;




