import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const phoneNumber = "+919225819192";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in booking a Hurda Party at Picnic Point Solapur. Can you provide more details?"
  );

  return (
    <>
      {/* Desktop - Bottom Right Corner */}
      <div className="hidden sm:block fixed bottom-8 right-8 z-50">
        <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <Button
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
            size="lg"
            className="rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 gap-2 bg-primary text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
          
          <Button
            onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`, '_blank')}
            size="lg"
            className="rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </div>

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="lg"
          className={`rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 mt-3 ${
            isExpanded ? 'bg-destructive hover:bg-destructive/90' : ''
          }`}
        >
          {isExpanded ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile - Bottom Sticky Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3">
          <Button
            onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
            className="flex-1 gap-2 bg-primary text-primary-foreground"
            size="lg"
          >
            <Phone className="h-5 w-5" />
            Call
          </Button>
          
          <Button
            onClick={() => window.open(`https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${whatsappMessage}`, '_blank')}
            className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;