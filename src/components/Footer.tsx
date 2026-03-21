import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer id="contact" className="bg-[#eef8ff] pt-24 pb-12 overflow-hidden border-t border-white/50 text-left">
    <div className="container px-6 md:px-10">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] gap-16 mb-24">
        {/* Brand & Address */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-display font-black text-2xl text-slate-900 tracking-tighter uppercase">NeuralForge AI</span>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              Engineering intelligence. Deploying impact. We build AI systems that transform how businesses operate.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold mb-3 text-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" /> Location
              </span>
              <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-[200px] mb-1">
                Pune, Maharashtra, India
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold mb-3 text-lg flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#9effa9]" /> Email
              </span>
              <p className="text-slate-500 text-sm font-black">will be added soon</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-slate-900 font-black mb-10 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-5 text-sm font-bold text-slate-500">
            {[
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Process", href: "#process" },
              { name: "Work", href: "#work" },
              { name: "Contact", href: "#contact" },
            ].map((s) => (
              <li key={s.name}><a href={s.href} className="hover:text-slate-900 transition-colors uppercase tracking-tight">{s.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-slate-900 font-black mb-10 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-5 text-sm font-bold text-slate-500">
            {["AI Agents", "RAG Systems", "MCP Servers", "Context Engineering", "AI Strategy"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-slate-900 transition-colors uppercase tracking-tight">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Social Connect */}
        <div className="flex flex-col gap-8">
          <h4 className="text-slate-900 font-black uppercase tracking-wider text-sm">Stay Updated</h4>
          <p className="text-slate-500 text-sm font-medium max-w-xs">Enterprise AI Consultancy & Automation Solutions. Let's build the future.</p>
          <div className="flex gap-2 group">
            <input
              type="text"
              placeholder="Your inquiry here..."
              className="flex-1 bg-white border-2 border-slate-100 rounded-2xl px-6 py-5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] transition-all placeholder:text-slate-300"
            />
            <Button className="rounded-2xl bg-slate-900 px-6 h-[64px] hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
              <ArrowRight className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-slate-200/50">
        <div className="flex gap-6">
          {[
            { Icon: Github, href: "https://github.com/rohitpatill" },
            { Icon: Linkedin, href: "https://linkedin.com/in/rohitpatill" },

            { Icon: Mail, href: "mailto:rohitp2001k@gmail.com" }
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white border border-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 hover:shadow-2xl hover:border-slate-100 transition-all hover:-translate-y-1">
              <item.Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          © 2026 NeuralForge AI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
