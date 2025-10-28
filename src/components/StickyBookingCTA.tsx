import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyBookingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating CTA Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={scrollToBooking}
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
        >
          <Calendar className="h-5 w-5" />
          Book Now
        </Button>
      </div>

      {/* Sticky Header Bar - Desktop */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-md animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-foreground">Picnic Point Solapur</span>
            <span className="text-sm text-muted-foreground hidden md:inline">
              Experience Authentic Hurda Party
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919225819192" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors hidden lg:inline"
            >
              +91-92258 19192
            </a>
            <Button
              onClick={scrollToBooking}
              className="gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Your Slot
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyBookingCTA;
