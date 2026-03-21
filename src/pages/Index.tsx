import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ModelEvaluationSection from "@/components/ModelEvaluationSection";
import BannerSection from "@/components/BannerSection";
import ActivitySection from "@/components/ActivitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background relative selection:bg-[#9effa9]/30 text-white">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <BannerSection />
    <ModelEvaluationSection />
    <ActivitySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
