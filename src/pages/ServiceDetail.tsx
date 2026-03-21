import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Zap, CheckCircle2, Workflow, Activity, 
  ArrowRight, Sparkles, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  services, 
  SmallRobotAnimation, 
  SearchAnimation, 
  NetworkAnimation, 
  OptimizationAnimation, 
  ChartAnimation, 
  TeamAnimation 
} from "@/components/ServicesSection";

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
    }

    return (
        <div className="min-h-screen bg-white selection:bg-[#9effa9]/30">
            <Navbar />
            
            <main className="pt-32 pb-24">
                <div className="container px-6 md:px-10">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate("/")}
                        className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-950 transition-colors mb-12 font-black text-xs uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </button>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
                        {/* Info Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9effa9]/10 border border-[#9effa9]/30">
                                    <Sparkles className="w-4 h-4 text-slate-900" />
                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">
                                        Advanced AI Solution
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] tracking-tighter">
                                    {service.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                    {service.fullDesc}
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <div className="w-6 h-6 rounded-lg bg-[#9effa9]/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-slate-900" />
                                        </div>
                                        <span className="text-slate-700 font-bold group-hover:text-slate-950 transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 flex flex-col sm:flex-row gap-6">
                                <Button className="px-10 py-7 rounded-2xl bg-slate-950 text-white font-black text-sm uppercase tracking-widest hover:bg-[#9effa9] hover:text-slate-950 transition-all shadow-xl shadow-slate-950/20">
                                    Deploy this System
                                </Button>
                                <Button variant="outline" className="px-10 py-7 rounded-2xl border-2 border-slate-100 text-slate-950 font-black text-sm uppercase tracking-widest hover:border-[#9effa9] transition-all">
                                    Talk to an Expert
                                </Button>
                            </div>
                        </motion.div>

                        {/* Interactive Visuals */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[4rem] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#9effa9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="scale-[2.5] md:scale-[3.5]">
                                    {service.animation === "robot" && <SmallRobotAnimation />}
                                    {service.animation === "document" && <SearchAnimation />}
                                    {service.animation === "network" && <NetworkAnimation />}
                                    {service.animation === "optimization" && <OptimizationAnimation />}
                                    {service.animation === "chart" && <ChartAnimation />}
                                    {service.animation === "presentation" && <TeamAnimation />}
                                </div>
                            </div>

                            {/* Decorative Floating Badges */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -right-6 p-6 bg-white rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#9effa9]/20 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-slate-900" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target ROI</span>
                                    <span className="text-lg font-black text-slate-900">10x Output</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Operational Flowchart Section */}
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-4 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5">
                                <Workflow className="w-4 h-4 text-slate-600" />
                                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Process Architecture</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                                How We Operationalize <br />{service.title}
                            </h2>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Our standardized engineering framework ensures that every deployment is robust, scalable, and provides verifiable impact within 6 weeks.
                            </p>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="grid md:grid-cols-2 gap-6 relative">
                                {service.flowchart.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-[#9effa9] hover:bg-white transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center font-black text-slate-300 border border-slate-100 group-hover:text-slate-950 group-hover:border-[#9effa9] transition-colors">
                                                0{i + 1}
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-slate-950 transition-colors" />
                                        </div>
                                        <h4 className="text-xl font-black text-slate-950 mb-3 tracking-tight group-hover:text-[#0ea5e9] transition-colors">{item.step}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">{item.detail}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServiceDetail;
