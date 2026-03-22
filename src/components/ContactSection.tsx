import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, Tag } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "New Inquiry from Portfolio",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setLoading(true);
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${baseUrl}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Transmission Received! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "New Inquiry from Portfolio",
          message: ""
        });
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Connection failed. Is the server running?");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-[#eef8ff] overflow-hidden scroll-mt-20 border-t border-white/50">
      <div className="container px-6 md:px-10">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-6 leading-none">
              Start Your AI <br />
              <span className="text-[#9effa9] font-display">Transformation</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              Ready to automate your operations with high-intelligence agents? Our team is waiting to pilot your next project.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 h-full"
          >
            {/* Map Card */}
            <div className="flex-1 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl relative min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360435456!2d73.78056586616!3d18.52460355153245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67414521%3A0x190b91351e969968!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711012345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 p-5 bg-white/90 backdrop-blur-lg border border-white rounded-[2rem] shadow-xl">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-[#9effa9] animate-pulse">
                      <MapPin className="w-4 h-4"/>
                    </div>
                    <span className="text-xs font-black uppercase text-slate-900 tracking-widest">Pune, India</span>
                 </div>
              </div>
            </div>

            {/* Support Info Cards */}
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#9effa9]/20 transition-colors">
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xs font-black text-slate-900">coming soon</p>
               </div>
               <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-[#9effa9]/20 transition-colors">
                    <Smartphone className="w-5 h-5 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  </div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-xs font-black text-slate-900">will be added soon</p>
               </div>
            </div>
          </motion.div>

          {/* Right Side: High-End Light Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-white flex flex-col justify-between"
          >
            <div>
               <div className="mb-12">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Message Center</h3>
                  <p className="text-slate-400 text-sm font-medium">Direct line to our core engineering team.</p>
               </div>

               <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Identifier</label>
                      <div className="relative">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-50 rounded-[2rem] px-8 py-5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] focus:bg-white focus:shadow-sm transition-all placeholder:text-slate-300"
                          style={{ paddingLeft: '4rem' }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Channel</label>
                      <div className="relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="w-full bg-slate-50 border border-slate-50 rounded-[2rem] px-8 py-5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] focus:bg-white focus:shadow-sm transition-all placeholder:text-slate-300"
                          style={{ paddingLeft: '4rem' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Callback No.</label>
                      <div className="relative">
                        <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 00000 00000"
                          className="w-full bg-slate-50 border border-slate-50 rounded-[2rem] px-8 py-5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] focus:bg-white focus:shadow-sm transition-all placeholder:text-slate-300"
                          style={{ paddingLeft: '4rem' }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Topic</label>
                      <div className="relative">
                        <Tag className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          placeholder="Subject"
                          className="w-full bg-slate-50 border border-slate-50 rounded-[2rem] px-8 py-5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] focus:bg-white focus:shadow-sm transition-all placeholder:text-slate-300"
                          style={{ paddingLeft: '4rem' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Transmission</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-6 top-6 w-4 h-4 text-slate-300" />
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project..."
                        className="w-full h-32 bg-slate-50 border border-slate-50 rounded-[2.5rem] px-8 py-6 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#9effa9] focus:bg-white focus:shadow-sm transition-all placeholder:text-slate-300 resize-none"
                        style={{ paddingLeft: '4rem' }}
                      />
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    className={`group w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''} bg-slate-950 text-white py-6 rounded-[2rem] text-xs font-black uppercase tracking-[0.25em] shadow-2xl shadow-slate-950/20 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4`}
                  >
                    {loading ? "Transmitting..." : "Dispatch Transmission"}
                    {!loading && <Send className="w-4 h-4 text-[#9effa9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
