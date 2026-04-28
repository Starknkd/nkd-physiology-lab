import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import LabSteps from "@/components/LabSteps";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-ink text-white">
      <StickyNav />
      <Hero />
      <LabSteps />
      <Science />
      <Testimonials />
    </main>
  );
};

export default Index;
