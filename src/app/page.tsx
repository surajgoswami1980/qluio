import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyUs from "@/components/home/WhyUs";
import HowItWorks from "@/components/home/HowItWorks";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyUs />
      <HowItWorks />
      <ProductSpotlight />
      <CTASection />
    </>
  );
}
