import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Utensils, Gamepad2, Camera, Shield } from "lucide-react";
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import StickyBookingCTA from "@/components/StickyBookingCTA";
import Footer from "@/components/Footer";
import familyImage from "@/assets/family-hurda.jpg";

const FamilyPackage = () => {
  useEffect(() => {
    document.title = "Family Hurda Picnic Package Solapur | Picnic Point";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Perfect family hurda picnic package in Solapur. Includes fresh hurda, snacks, play areas, and memories. Book your family outing at Picnic Point today!');
    }
  }, []);

  const scrollToBooking = () => {
    window.location.href = "/#contact";
  };

  const packageInclusions = [
    { icon: Utensils, title: "Fresh Roasted Hurda", desc: "Unlimited servings with traditional masala" },
    { icon: Users, title: "4-6 People", desc: "Perfect for small to medium families" },
    { icon: Gamepad2, title: "Play Areas", desc: "Kids play zones and family games" },
    { icon: Camera, title: "Photo Spots", desc: "Beautiful scenic photography locations" },
    { icon: Shield, title: "Safe Environment", desc: "Supervised and secure premises" },
    { icon: Utensils, title: "Complimentary Snacks", desc: "Traditional snacks and beverages" }
  ];

  const whyChooseFamily = [
    "Kid-friendly menu with healthy options",
    "Dedicated children's play areas with supervision",
    "Shaded seating areas for comfortable dining",
    "Clean and hygienic facilities including restrooms",
    "Flexible timing - morning or evening slots",
    "Free parking for family vehicles",
    "Photography-friendly scenic locations",
    "Cultural hurda-making demonstrations"
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
            style={{ backgroundImage: `url(${familyImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
                Family Hurda <span className="text-primary">Picnic Package</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Create unforgettable family memories with our specially designed Hurda Party package. 
                Perfect for 4-6 people, includes everything your family needs for a perfect day out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg">
                  <div className="text-3xl font-bold">₹1,499</div>
                  <div className="text-sm opacity-90">per family (4-6 people)</div>
                </div>
                <Button 
                  size="lg" 
                  onClick={scrollToBooking}
                  className="text-lg px-8 py-6"
                >
                  Book Family Package
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Package Inclusions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              What's Included in Your Family Package
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Everything your family needs for a perfect Hurda Party experience
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packageInclusions.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Family Package */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
                Why Families Love Our Hurda Party Package
              </h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Perfect for Family Bonding</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {whyChooseFamily.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Special Family Offer
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Book during weekdays and get 10% off on your family package. 
                  Limited time offer!
                </p>
                <Button size="lg" onClick={scrollToBooking}>
                  Book Now & Save
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              What Families Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Priya Deshmukh",
                  text: "Perfect family outing! Kids loved the play areas and the hurda was delicious.",
                  rating: 5
                },
                {
                  name: "Rajesh Patil",
                  text: "Great value for money. Clean, safe, and very family-friendly environment.",
                  rating: 5
                },
                {
                  name: "Sneha Jadhav",
                  text: "Our entire family had a wonderful time. Will definitely come back next season!",
                  rating: 5
                }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{review.text}"</p>
                    <p className="font-semibold text-foreground">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Book Your Family Hurda Party Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Limited family slots available. Reserve now for the best dates and times!
            </p>
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8 py-6"
            >
              Reserve Family Package
            </Button>
          </div>
        </section>

        <Footer />
      </main>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Family Hurda Picnic Package",
          "description": "Complete family hurda party package for 4-6 people at Picnic Point Solapur",
          "offers": {
            "@type": "Offer",
            "price": "1499",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://picnicpointsolapur.com/family-package"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "87"
          }
        })}
      </script>
    </>
  );
};

export default FamilyPackage;
