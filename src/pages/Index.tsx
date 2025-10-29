import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BookingCalendar from "@/components/BookingCalendar";
import FloatingContact from "@/components/FloatingContact";
import GroupOffers from "@/components/GroupOffers";
import DownloadMenu from "@/components/DownloadMenu";
import VideoSection from "@/components/VideoSection";
import FeatureSections from "@/components/FeatureSections";
import ImageGallery from "@/components/ImageGallery";
import SocialFeed from "@/components/SocialFeed";
import PDFChecklistDownload from "@/components/PDFChecklistDownload";

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
    <>
      <Header />
      <PromoBanner />
      <StickyBookingCTA />
      <FloatingContact />
      <div className="fixed top-20 right-4 z-40">
        <LanguageSwitcher />
      </div>
      <main className="min-h-screen">
        <Hero />
        <VideoSection />
        <About />
        <FeatureSections />
        <GroupOffers />
        <Packages />
        <BookingCalendar />
        <ImageGallery />
        <SocialFeed />
        <DownloadMenu />
        <PDFChecklistDownload />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
