import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Gift, Percent, Sparkles } from "lucide-react";

const GroupOffers = () => {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const offers = [
    {
      icon: Users,
      title: "Book for 10, Get 2 Free",
      description: "Perfect for small family gatherings or friend groups",
      discount: "17% OFF",
      minGuests: 10,
      color: "primary",
    },
    {
      icon: Gift,
      title: "Group of 20+ - Special Package",
      description: "Get complimentary activities and extended timings",
      discount: "20% OFF",
      minGuests: 20,
      color: "secondary",
    },
    {
      icon: Sparkles,
      title: "Corporate Groups (30+)",
      description: "Team building activities, dedicated space, and more",
      discount: "25% OFF",
      minGuests: 30,
      color: "accent",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="secondary">
            <Percent className="h-4 w-4 mr-1" />
            Limited Time Offers
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Group Discount Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bring more friends and save more! Our exclusive group packages offer amazing value for larger parties
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg font-bold">
                  {offer.discount}
                </div>
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Minimum Guests:</span>
                    <Badge variant="outline" className="font-bold">{offer.minGuests}+</Badge>
                  </div>
                  <Button onClick={scrollToBooking} className="w-full" variant="default">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-2 border-primary/20">
          <CardContent className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Early Bird Special!</h3>
                <p className="text-muted-foreground">
                  Book 7 days in advance and get an additional <span className="font-bold text-primary">10% OFF</span> on any group package
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={scrollToBooking} size="lg" className="gap-2">
                  <Gift className="h-5 w-5" />
                  Claim Offer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * All offers are subject to availability. Terms and conditions apply. Cannot be combined with other promotions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupOffers;