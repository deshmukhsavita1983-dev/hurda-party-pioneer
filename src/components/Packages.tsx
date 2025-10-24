import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import familyImage from "@/assets/family-hurda.jpg";
import corporateImage from "@/assets/corporate-hurda.jpg";

const Packages = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
            <div className="h-64 overflow-hidden">
              <img 
                src={familyImage} 
                alt="Family hurda party picnic at Picnic Point Solapur" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Family Hurda Party Package</CardTitle>
              <CardDescription className="text-base">Perfect for families and small groups</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Fresh roasted hurda with traditional masala
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Complementary snacks and beverages
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Access to play area and games
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Shaded seating arrangements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Photography-friendly locations
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-3xl font-bold text-primary">₹499 <span className="text-base text-muted-foreground font-normal">per person</span></p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-glow" size="lg" onClick={scrollToBooking}>
                Book Family Package
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
              <CardTitle className="text-2xl text-foreground">Corporate Hurda Party Package</CardTitle>
              <CardDescription className="text-base">Ideal for team outings and corporate events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Premium hurda menu with variety
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Team building activities and games
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Audio system for presentations
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Dedicated event coordinator
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  Customizable catering options
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
    </section>
  );
};

export default Packages;
