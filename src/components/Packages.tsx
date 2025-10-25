import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/family-hurda.jpg";
import corporateImage from "@/assets/corporate-hurda.jpg";

const Packages = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: "Family Package",
      description: "Perfect for families and small groups with entry, refreshments, play area access, and parking.",
      price: 299,
      features: ["Entry for the day", "Basic refreshments", "Access to play area", "Clean washroom facilities", "Parking included"]
    },
    {
      name: "Group Package",
      description: "Great for friends and larger groups with full day entry, meals, games, and event coordination.",
      price: 499,
      features: ["Full day entry", "Welcome drink + snacks", "Lunch (veg/non-veg)", "Games & activities", "Event coordination", "Photography area"]
    },
    {
      name: "Corporate Package",
      description: "Ideal for team outings and corporate events with full venue booking, meals, and team building activities.",
      price: 799,
      features: ["Full day venue booking", "Welcome + tea/coffee", "Full meals included", "Team building activities", "Sound system & mic", "Dedicated coordinator"]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hurda Party Packages for Every Occasion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your group. All packages include authentic hurda preparation, 
            traditional accompaniments, and access to our beautiful picnic facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
            <div className="h-64 overflow-hidden">
              <img 
                src={familyImage} 
                alt="Family hurda party picnic at Picnic Point Solapur" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Family Package</CardTitle>
              <CardDescription className="text-base">Perfect for families and small groups</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Entry for the day
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Basic refreshments
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Access to play area
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Clean washroom facilities
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Parking included
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-3xl font-bold text-primary">₹299 <span className="text-base text-muted-foreground font-normal">per person</span></p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-glow" size="lg" onClick={scrollToBooking}>
                Book Family Package
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50">
            <div className="h-64 overflow-hidden">
              <img 
                src={familyImage} 
                alt="Group hurda party picnic at Picnic Point Solapur" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Group Package</CardTitle>
              <CardDescription className="text-base">Great for friends and larger groups</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Full day entry
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Welcome drink + snacks
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Lunch (veg/non-veg)
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Games & activities
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Event coordination
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Photography area
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-3xl font-bold text-accent">₹499 <span className="text-base text-muted-foreground font-normal">per person</span></p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg" onClick={scrollToBooking}>
                Book Group Package
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50">
            <div className="h-64 overflow-hidden">
              <img 
                src={corporateImage} 
                alt="Corporate hurda party team building at Picnic Point Solapur" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Corporate Package</CardTitle>
              <CardDescription className="text-base">Ideal for team outings and corporate events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Full day venue booking
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Welcome + tea/coffee
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Full meals included
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Team building activities
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Sound system & mic
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Dedicated coordinator
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-3xl font-bold text-secondary">₹799 <span className="text-base text-muted-foreground font-normal">per person</span></p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg" onClick={scrollToBooking}>
                Book Corporate Package
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Offer Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": packages.map((pkg, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "name": pkg.name,
            "description": pkg.description,
            "price": pkg.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "LocalBusiness",
              "name": "Picnic Point - Hurda Party Solapur",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Picnic Point Road",
                "addressLocality": "Solapur",
                "addressRegion": "Maharashtra",
                "postalCode": "413001",
                "addressCountry": "IN"
              }
            },
            "itemOffered": {
              "@type": "Product",
              "name": pkg.name,
              "description": pkg.description
            }
          }))
        })}
      </script>
    </section>
  );
};

export default Packages;
