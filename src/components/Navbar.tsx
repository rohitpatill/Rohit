import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "How it Works", path: "#process" },
  { name: "Solutions", path: "#services" },
  { name: "Portfolio", path: "#work" },
  { name: "Contact", path: "#contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
      <nav className={`mx-auto max-w-7xl bg-white/90 backdrop-blur-lg rounded-full border-2 border-[#9effa9]/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container flex items-center justify-between px-4 md:px-10">
          <a href="#" className="font-display text-lg font-bold text-foreground flex items-center gap-2 group">
            <div className="relative flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110">
                R
              </div>
              <span className="text-slate-900 tracking-tight font-extrabold text-xl whitespace-nowrap">Rohit Patil</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.path} className="text-sm font-bold text-slate-500 hover:text-slate-950 transition-colors relative group">
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9effa9] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact">
               <Button size="sm" className="rounded-full bg-slate-950 text-white hover:bg-slate-800 h-11 px-8 font-bold shadow-lg shadow-slate-950/10 group text-xs uppercase tracking-widest">
                 Get Started
                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-slate-50 transition-colors" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* Mobile menu dropdown card */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 md:hidden overflow-hidden bg-white rounded-[2.5rem] border-2 border-[#9effa9]/30 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((l, index) => (
                  <motion.a
                    key={l.name}
                    href={l.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="text-lg font-bold text-slate-600 hover:text-slate-950 px-6 py-4 rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-between group"
                  >
                    {l.name}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#9effa9]" />
                  </motion.a>
                ))}
                
                <div className="mt-4 pt-6 border-t border-slate-100">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href="#contact" onClick={() => setOpen(false)}>
                      <Button className="w-full rounded-2xl bg-[#2563eb] text-white font-bold h-16 text-base shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95">
                        Get Started
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;

