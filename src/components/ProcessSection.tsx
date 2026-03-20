import { motion } from "framer-motion";
import { Search, PenTool, Layers, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    desc: "Deep-dive into your business processes, data landscape, and pain points. We identify high-impact automation opportunities with clear ROI projections.",
    color: "bg-blue-500"
  },
  {
    icon: Layers,
    title: "Architecture & Design",
    desc: "Blueprint the optimal AI architecture — selecting models, designing pipelines, and mapping integrations. No over-engineering, just what delivers value.",
    color: "bg-purple-500"
  },
  {
    icon: PenTool,
    title: "Development & Testing",
    desc: "Rapid prototyping with iterative feedback loops. Rigorous evaluation across models and edge cases to ensure production-grade reliability.",
    color: "bg-[#9effa9]"
  },
  {
    icon: Rocket,
    title: "Deployment & Optimization",
    desc: "Seamless deployment with monitoring, fallback handling, and continuous optimization. We stay on to ensure your AI systems keep improving.",
    color: "bg-slate-900"
  }
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-[#eef8ff]/30 relative overflow-hidden">
    <div className="container px-6 md:px-10 relative z-10">
      <div className="text-center mb-20">
        <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">How We Work</span>
        <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          From Concept to <span className="text-blue-600">Production</span>
        </h2>
        <p className="text-slate-500 font-medium text-lg mt-4 max-w-2xl mx-auto">A proven methodology that turns AI ambitions into deployed, optimized systems.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative group"
          >
            {/* Connection Line */}
            {i < steps.length - 1 && (
              <>
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-200 -z-10" />
                <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[2px] h-full bg-slate-100 -z-10" />
              </>
            )}

            <div className="flex flex-col items-center text-center gap-6 bg-[#f8fbff] lg:bg-transparent pb-12 lg:pb-0">
              <div className={`w-24 h-24 rounded-[2rem] ${i === 2 ? 'bg-slate-900 text-white' : 'bg-white shadow-xl shadow-slate-200/50'} flex items-center justify-center transition-transform group-hover:scale-110 border border-white z-10`}>
                <step.icon className={`w-10 h-10 ${i === 2 ? 'text-[#9effa9]' : 'text-slate-900'}`} />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">{step.title}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${i === 2 ? 'text-green-500' : 'text-slate-300'}`} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Step 0{i+1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Decorative background element */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(158,255,169,0.03)_0%,transparent_70%)] pointer-events-none" />
  </section>
);

export default ProcessSection;
