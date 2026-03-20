import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", path: "#services" },
  { name: "About", path: "#about" },
  { name: "Process", path: "#process" },
  { name: "Work", path: "#work" },
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

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
      <nav className={`mx-auto max-w-7xl bg-white/80 backdrop-blur-md rounded-full border-2 border-[#9effa9]/50 shadow-[0_8px_30px_rgb(158,255,169,0.15)] transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container flex items-center justify-between px-6 md:px-10">
          <a href="#" className="font-display text-lg font-bold text-foreground flex items-center gap-2 group">
            <div className="relative flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-110">
                N
              </div>
              <span className="text-foreground tracking-tight font-extrabold text-xl whitespace-nowrap">NeuralForge</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <a key={l.name} href={l.path} className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors relative group">
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9effa9] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact">
               <Button size="sm" className="rounded-full bg-slate-950 text-white hover:bg-slate-800 h-10 px-6 font-semibold shadow-lg shadow-slate-950/20 group uppercase text-[10px] tracking-widest">
                 Start a Project
                 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Button>
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors" 
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-[500px] opacity-100 mt-4 pb-6 px-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.path}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-slate-600 hover:text-slate-950 px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                {l.name}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-2xl bg-slate-950 text-white font-bold h-14 text-sm uppercase tracking-widest shadow-xl shadow-slate-950/20">
                  Start a Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
