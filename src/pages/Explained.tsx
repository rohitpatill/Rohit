import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExplainedFlowchart from "@/components/ExplainedFlowchart";
import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu, MessageSquare, Zap, Globe, ShieldCheck } from "lucide-react";

const simpleServices = [
  {
    icon: MessageSquare,
    title: "AI Chat with Your Data",
    desc: "A smart assistant that's read all your documents, reports, and emails, answering instantly with facts.",
    badge: "Most Popular"
  },
  {
    icon: Zap,
    title: "Custom AI Shortcuts",
    desc: "Automate repetitive business tasks like summarizing emails or creating weekly reports with one click.",
    badge: "Time Saver"
  },
  {
    icon: Globe,
    title: "Your Tools, Only Smarter",
    desc: "We connect the AI to your existing tools (Gmail, Slack, etc.) so it can work for you.",
    badge: "Connected"
  },
  {
    icon: ShieldCheck,
    title: "100% Private & Secure",
    desc: "Your data stays yours. The AI only reads what you allow, and nothing is shared with public models.",
    badge: "Secure"
  }
];

const Explained = () => (
  <div className="min-h-screen bg-white relative selection:bg-blue-100/50">
    <Navbar />
    
    <main className="pt-20 pb-24">


      <ExplainedFlowchart />

      {/* Grid of Services (Simple Version) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-slate-900 tracking-tighter uppercase">Our Services, <span className="text-blue-600">Explained</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {simpleServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-200/20 transition-all group flex flex-col items-start text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#eef8ff] flex items-center justify-center text-slate-900 mb-8 transition-transform group-hover:scale-110">
                  <s.icon className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#9effa9]/10 border border-[#9effa9]/5 text-[10px] font-black text-green-700 uppercase tracking-widest mb-4">
                  {s.badge}
                </div>
                <h3 className="font-display font-black text-xl text-slate-900 tracking-tighter uppercase mb-3 leading-tight">{s.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="container px-6 md:px-10 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3)_0%,transparent_70%)] opacity-30 group-hover:opacity-50 transition-opacity" />
           <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-8">Ready to start?</h2>
              <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                Contact Rohit Patil today for a human-first AI strategy tailored for your business needs. 100% secure, 100% actionable.
              </p>
              <a 
                href="mailto:rohitp2001k@gmail.com" 
                className="inline-flex items-center px-12 py-6 rounded-2xl bg-[#9effa9] text-slate-900 font-bold text-lg uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#9effa9]/20"
              >
                Let's Talk Business
              </a>
           </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Explained;
