import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star, Phone, Calendar } from "lucide-react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hurda-party-hero.jpg";

const HurdaPartySolapur = () => {
  useEffect(() => {
    document.title = "Hurda Party Solapur | Best Venue at Picnic Point";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Book the best Hurda Party in Solapur at Picnic Point. Fresh roasted hurda, scenic location, perfect for families and groups. Reserve your spot today!');
    }
  }, []);

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nearbyAttractions = [
    "Solapur Railway Station - 15 km",
    "Siddheshwar Temple - 12 km",
    "Hutatma Garden - 10 km",
    "Bhuikot Fort - 18 km",
    "Great Indian Bustard Sanctuary - 25 km"
  ];

  return (
    <>
      <Header />
      <PromoBanner />
      <StickyBookingCTA />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
                Hurda Party <span className="text-primary">Solapur</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Experience Maharashtra's most authentic Hurda Party at Picnic Point Solapur. 
                Freshly roasted hurda, scenic views, and unforgettable memories await.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={scrollToBooking}
                  className="text-lg px-8 py-6"
                >
                  Book Your Hurda Party Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+919225819192'}
                  className="text-lg px-8 py-6 gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Picnic Point Solapur */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Why Picnic Point is Solapur's Best Hurda Party Venue
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Located in the heart of Solapur, Picnic Point offers the perfect blend of authentic 
              hurda experience and modern amenities.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Authentic Hurda</h3>
                  <p className="text-muted-foreground">
                    Fresh green chickpeas roasted to perfection with traditional masala and lemon
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Prime Location</h3>
                  <p className="text-muted-foreground">
                    Easily accessible from Solapur city center with ample parking
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Perfect for All</h3>
                  <p className="text-muted-foreground">
                    Family gatherings, corporate events, and group celebrations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
                How to Reach Picnic Point Solapur
              </h2>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-foreground">Address</h3>
                      <p className="text-muted-foreground mb-4">
                        Picnic Point Road, Solapur, Maharashtra 413001
                      </p>
                      {/* Mobile-Optimized Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          asChild 
                          size="lg"
                          className="flex-1"
                        >
                          <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=17.6599,75.9064" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <MapPin className="h-5 w-5" />
                            Get Directions
                          </a>
                        </Button>
                        <Button 
                          asChild 
                          variant="outline"
                          size="lg"
                          className="flex-1 sm:hidden"
                        >
                          <a href="tel:+919225819192" className="flex items-center justify-center gap-2">
                            <Phone className="h-5 w-5" />
                            Call Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7856893424906!2d75.90654311483042!3d17.679593887809367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5c8e9b5a0a0a1%3A0x1!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Picnic Point Solapur Location Map"
                    ></iframe>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Directions</h3>
                      <p className="text-muted-foreground">
                        From Solapur Railway Station: Take the main road towards Akkalkot. 
                        After 12 km, turn right at Picnic Point signboard. Follow the scenic route for 3 km.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Best Time to Visit</h3>
                      <p className="text-muted-foreground">
                        December to February during hurda season. Morning (9 AM - 1 PM) and 
                        evening slots (3 PM - 7 PM) available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Nearby Attractions in Solapur</h3>
                <ul className="space-y-2">
                  {nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Book Your Hurda Party in Solapur?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Limited slots available this season. Reserve your spot today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.location.href = "/#contact"}
                className="text-lg px-8 py-6"
              >
                Book Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = "tel:+919225819192"}
                className="text-lg px-8 py-6 gap-2"
              >
                <Phone className="h-5 w-5" />
                +91-92258 19192
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Enhanced LocalBusiness Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Picnic Point Solapur - Hurda Party",
          "description": "Best Hurda Party venue in Solapur with authentic roasted hurda, scenic location, and modern amenities. Perfect for families, corporates, and group celebrations.",
          "image": "https://picnic-point.com/images/hurda-party-solapur.jpg",
          "url": "https://picnic-point.com/hurda-party-solapur",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Picnic Point Road",
            "addressLocality": "Solapur",
            "addressRegion": "Maharashtra",
            "postalCode": "413001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.6599",
            "longitude": "75.9064"
          },
          "telephone": "+91-92258-19192",
          "email": "info@picnicpointsolapur.com",
          "priceRange": "₹₹",
          "servesCuisine": ["Indian", "Maharashtrian"],
          "openingHours": "Mo-Su 06:00-20:00",
          "acceptsReservations": "True",
          "hasMap": "https://www.google.com/maps?q=17.6599,75.9064",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "paymentAccepted": ["Cash", "Credit Card", "UPI"],
          "currenciesAccepted": "INR"
        })}
      </script>
    </>
  );
};

export default HurdaPartySolapur;
