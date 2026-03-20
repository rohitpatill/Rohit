import { motion } from "framer-motion";
import { MessageSquare, Database, Brain, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "user",
    icon: MessageSquare,
    title: "You Ask a Question",
    desc: "A natural question about your business or data.",
    color: "bg-blue-500"
  },
  {
    id: "rag",
    icon: Database,
    title: "RAG: Search Your Knowledge",
    desc: "The AI searches your private library (PDFs, Docs, Databases) to find facts.",
    color: "bg-[#9effa9]"
  },
  {
    id: "brain",
    icon: Brain,
    title: "Reasoning: Thinking",
    desc: "The AI combines your facts with its knowledge to plan the best response.",
    color: "bg-purple-500"
  },
  {
    id: "mcp",
    icon: Wrench,
    title: "MCP: Taking Action",
    desc: "The AI uses your actual tools (Gmail, Calendars, internal software) to get things done.",
    color: "bg-orange-500"
  },
  {
    id: "result",
    icon: CheckCircle,
    title: "Smart Result",
    desc: "You get an accurate answer and completed tasks.",
    color: "bg-slate-900"
  }
];

const ExplainedFlowchart = () => (
  <section className="pt-12 pb-24 bg-white relative overflow-hidden">
    <div className="container px-6 md:px-10 relative z-10 text-left">
      <div className="max-w-3xl mb-20">
        <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">AI For Human Beings</span>
        <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Wait, what is <span className="text-blue-600 italic">RAG</span> and <span className="text-purple-600 italic">MCP</span> anyway?
        </h2>
        <p className="text-slate-500 text-lg font-medium mt-6 leading-relaxed">
          Most people find AI confusing. We've broken it down into a simple, automated flow. No tech degree required.
        </p>
      </div>

      <div className="relative">
        {/* Animated Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-100 overflow-hidden -z-10">
           <motion.div 
             initial={{ x: "-100%" }}
             animate={{ x: "100%" }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#9effa9] to-transparent"
           />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center gap-6"
            >
              <div className={`w-32 h-32 rounded-[2.5rem] ${i === steps.length-1 ? 'bg-slate-900 text-white' : 'bg-white shadow-2xl shadow-slate-200/50'} flex items-center justify-center border-2 border-white relative group`}>
                <div className={`absolute inset-0 rounded-[2.5rem] ${step.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                <step.icon className={`w-12 h-12 ${i === steps.length-1 ? 'text-[#9effa9]' : 'text-slate-900'}`} />
                
                {/* Mobile Arrow */}
                {i < steps.length - 1 && (
                  <ArrowRight className="lg:hidden absolute -bottom-8 w-6 h-6 text-slate-300" />
                )}
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-slate-900 tracking-tighter uppercase">{step.title}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 p-12 rounded-[3.5rem] bg-[#eef8ff]/50 border-2 border-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="flex-1">
            <h4 className="font-display font-black text-3xl text-slate-900 mb-4 tracking-tighter uppercase">RAG in 10 Seconds</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Standard AI is like a smart person with no memory. **RAG** is giving that person an open book of **your company documents**. It ensures the AI doesn't hallucinate and only talks about facts it finds in your files.
            </p>
         </div>
         <div className="flex-1">
            <h4 className="font-display font-black text-3xl text-slate-900 mb-4 tracking-tighter uppercase">MCP in 10 Seconds</h4>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              **MCP** is the glue. It allows the AI to "log in" to your tools like Google Drive, Slack, or your CRM. Instead of just talking, the AI can actually **send emails, update spreadsheets, or find files** for you.
            </p>
         </div>
      </div>
    </div>
  </section>
);

export default ExplainedFlowchart;
