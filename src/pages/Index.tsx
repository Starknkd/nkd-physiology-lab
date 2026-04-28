import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import LabSteps from "@/components/LabSteps";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";
import BookSession from "@/components/BookSession";
import AICoach from "@/components/AICoach";
import FAQ from "@/components/FAQ";
import Workshop from "@/components/Workshop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-ink text-white">
      <StickyNav />
      <Hero />
      <LabSteps />
      <Science />
      <Testimonials />
      <BookSession />
      <AICoach />
      <FAQ />
      <Workshop />
      <Footer />
    </main>
  );
};

export default Index;
