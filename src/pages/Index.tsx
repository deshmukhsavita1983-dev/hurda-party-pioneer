import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Set home page meta tags
  useEffect(() => {
    document.title = "Book the Best Hurda Party in Solapur – Picnic Point";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience Maharashtra\'s iconic Hurda Party at Picnic Point, Solapur. Perfect for families, corporates, and friends. Book your spot today!');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
