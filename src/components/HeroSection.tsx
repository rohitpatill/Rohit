import { motion } from "framer-motion";
import { Play, MessageSquare, BarChart3, Users, Zap, Layout, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const badges = [
  { icon: <Zap className="w-4 h-4 text-purple-500" />, label: "Smart AI", top: "10%", left: "-5%", delay: 0.1 },
  { icon: <MessageSquare className="w-4 h-4 text-blue-500" />, label: "Chat & Call", top: "25%", left: "-15%", delay: 0.2 },
  { icon: <Layout className="w-4 h-4 text-pink-500" />, label: "Reports", top: "15%", right: "15%", delay: 0.3 },
  { icon: <BarChart3 className="w-4 h-4 text-orange-500" />, label: "Statistics", top: "5%", right: "-5%", delay: 0.4 },
  { icon: <Users className="w-4 h-4 text-cyan-500" />, label: "Leads", top: "35%", right: "-10%", delay: 0.5 },
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-white">
      {/* Aesthetic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(158,255,169,0.05)_0%,transparent_70%)]" />

        <svg className="absolute w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-large" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <pattern id="grid-small" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <rect width="100%" height="100%" fill="url(#grid-small)" />
          <rect width="100%" height="100%" fill="url(#grid-large)" opacity="0.5" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-950/10 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#9effa9]" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest leading-none">AI Consultancy & Automation</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] text-slate-900 mb-6 md:mb-8 tracking-tighter text-left">
              Engineering <span className="relative inline-block">Intelligence.<span className="absolute -bottom-2 left-0 w-full h-2 bg-[#9effa9]/40 rounded-full md:block hidden" /></span> Deploying Impact.
            </h1>
            <p className="text-slate-500 text-lg md:text-2xl mb-10 md:mb-12 font-medium leading-relaxed max-w-xl text-left">
              We build autonomous AI agents, enterprise RAG systems, and intelligent automation that transform how businesses operate.
            </p>



            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-12">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-950 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-slate-950/20 hover:bg-slate-800 transition-all text-center">
                Start a Project
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 text-slate-900 font-bold text-sm uppercase tracking-wider hover:border-[#9effa9] transition-all text-center">
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:flex md:items-center md:gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-none">40+</span>
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1">LLMs Evaluated</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-none">15+</span>
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1">MCP Servers</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 leading-none">20+</span>
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 mt-1">AI Agents Built</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9effa9]/30 to-blue-200/20 rounded-full blur-[120px] scale-150 -z-10" />

              {/* Floating Technical Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none -z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-slate-100/50 rounded-full flex items-center justify-center"
                >
                  <div className="w-[80%] h-[80%] border border-slate-100/30 rounded-full flex items-center justify-center">
                    <div className="w-[60%] h-[60%] border border-slate-100/20 rounded-full" />
                  </div>
                </motion.div>

                {/* Data Points */}
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute w-2 h-2 bg-[#9effa9] rounded-full blur-[1px]"
                    style={{
                      top: `${50 + 45 * Math.sin(angle * Math.PI / 180)}%`,
                      left: `${50 + 45 * Math.cos(angle * Math.PI / 180)}%`
                    }}
                  />
                ))}
              </div>

              <img
                src={heroImg}
                alt="AI Illustration"
                className="relative z-10 w-full animate-float drop-shadow-2xl"
              />

              {/* Floating Badges - Hidden on small mobile */}
              {[
                { icon: <Zap className="w-4 h-4 text-purple-500" />, label: "Autonomous Agents", top: "-10%", left: "-15%", delay: 0.1 },
                { icon: <MessageSquare className="w-4 h-4 text-blue-500" />, label: "LLM Orchestration", top: "45%", left: "-25%", delay: 0.2 },
                { icon: <Layout className="w-4 h-4 text-pink-500" />, label: "Graph RAG", top: "0%", right: "-20%", delay: 0.3 },
                { icon: <BarChart3 className="w-4 h-4 text-orange-500" />, label: "MCP Servicing", top: "50%", right: "-15%", delay: 0.4 },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + b.delay, duration: 0.5 }}
                  className="absolute z-20 bg-white/95 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 rounded-3xl px-6 py-5 hidden md:flex items-center gap-4 whitespace-nowrap group hover:scale-110 transition-all duration-300 pointer-events-auto"
                  style={{ top: b.top, left: b.left, right: b.right }}
                >
                  <div className="p-2 bg-white rounded-xl shadow-sm group-hover:bg-[#9effa9]/20 transition-colors">
                    {b.icon}
                  </div>
                  <span className="font-bold text-slate-800 text-sm tracking-tight">{b.label}</span>
                </motion.div>
              ))}

              {/* Memory MCP Mockup - Better sizing for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute md:-bottom-10 -bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-slate-50 w-[90%] md:w-full max-w-[320px] backdrop-blur-sm text-left"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">Context Engineering</span>
                  <div className="w-2 h-2 rounded-full bg-[#9effa9]" />
                </div>
                <div className="space-y-3 mb-4 md:mb-6">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-slate-900 rounded-full" />
                  </div>
                  <div className="h-2 w-[70%] bg-slate-100 rounded-full" />
                  <div className="h-2 w-[90%] bg-slate-100 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white shadow-sm">
                    MCP
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs font-bold text-slate-900 tracking-tight">E5-small-v2</span>
                    <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase">Semantic Search</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
