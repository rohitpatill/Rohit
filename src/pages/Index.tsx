import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStrip from "@/components/LogoStrip";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import ModelEvaluationSection from "@/components/ModelEvaluationSection";
import BannerSection from "@/components/BannerSection";
import ActivitySection from "@/components/ActivitySection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background relative selection:bg-[#9effa9]/30">
    <Navbar />
    <HeroSection />
    <LogoStrip />
    <FeaturesSection />
    <ProcessSection />
    <BannerSection />
    <ModelEvaluationSection />
    <ActivitySection />
    <Footer />
  </div>
);

export default Index;
