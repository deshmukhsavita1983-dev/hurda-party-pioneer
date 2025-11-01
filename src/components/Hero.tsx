import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hurda-party-hero.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="font-bold mb-6 text-foreground leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Book the Best <span className="text-primary">Hurda Party</span> in Solapur
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground leading-relaxed">
            Experience Maharashtra's iconic Hurda Party at Picnic Point. Perfect for families, corporates, and friends. Authentic flavors, unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToBooking}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-glow transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Hurda Party Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 hover:bg-muted transition-all duration-300"
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
