import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import SocialFeed from "@/components/SocialFeed";

const Gallery = () => {
  useEffect(() => {
    document.title = "Hurda Party Gallery – Picnic Point Solapur Photos";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our photo gallery featuring past hurda party events, family gatherings, and corporate celebrations at Picnic Point, Solapur.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hurda Party Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore memories from unforgettable hurda party celebrations at Picnic Point, Solapur
            </p>
          </div>
        </section>
        <ImageGallery />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
