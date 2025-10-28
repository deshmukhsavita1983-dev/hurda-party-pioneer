import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Set end date to end of February (hurda season)
    const endDate = new Date("2026-02-28T23:59:59");
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground py-3 px-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Clock className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-lg">Limited Hurda Season – Book Today!</span>
            <span className="text-sm opacity-90">
              Season ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={scrollToBooking}
            variant="secondary"
            size="sm"
            className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-lg"
          >
            Reserve Your Spot
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
