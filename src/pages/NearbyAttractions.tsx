import { useEffect } from "react";
import { MapPin, Navigation, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const attractions = [
  {
    name: "Siddheshwar Temple",
    distance: "12 km",
    time: "20 minutes",
    description: "Ancient temple dedicated to Lord Shiva, a must-visit pilgrimage site in Solapur",
    rating: 4.6
  },
  {
    name: "Solapur Fort",
    distance: "15 km",
    time: "25 minutes",
    description: "Historic fort with rich architectural heritage and panoramic city views",
    rating: 4.3
  },
  {
    name: "Akkalkot Swami Samarth Temple",
    distance: "35 km",
    time: "45 minutes",
    description: "Famous spiritual destination and shrine of Swami Samarth Maharaj",
    rating: 4.8
  },
  {
    name: "Great Indian Bustard Sanctuary",
    distance: "40 km",
    time: "50 minutes",
    description: "Wildlife sanctuary home to the endangered Great Indian Bustard",
    rating: 4.4
  },
  {
    name: "Bhuikot Fort",
    distance: "18 km",
    time: "30 minutes",
    description: "Lesser-known fort offering scenic views and historical insights",
    rating: 4.2
  },
  {
    name: "Hutatma Garden",
    distance: "14 km",
    time: "22 minutes",
    description: "Beautiful public garden perfect for family picnics and relaxation",
    rating: 4.5
  }
];

const NearbyAttractions = () => {
  useEffect(() => {
    document.title = "Picnic Near Solapur – Things to Do Near Solapur";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover top attractions near Picnic Point, Solapur. From ancient temples to wildlife sanctuaries, plan your complete day trip with our guide to nearby places.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Things to Do Near Solapur
              </h1>
              <p className="text-lg text-muted-foreground">
                Enhance your hurda party experience by exploring these nearby attractions and making a full day of your visit to Picnic Point
              </p>
            </div>

            <div className="mb-12">
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Picnic Point Location</span>
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Solapur - Pune Highway, Near Barshi, Solapur, Maharashtra
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7856893424906!2d75.90654311483042!3d17.679593887809367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5c8e9b5a0a0a1%3A0x1!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Picnic Point Solapur Location Map"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Nearby Attractions & Picnic Spots
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{attraction.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Navigation className="h-3 w-3" />
                          <span>{attraction.distance}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{attraction.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{attraction.rating}</span>
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {attraction.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + " Solapur")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-accent">
              <CardHeader>
                <CardTitle>How to Reach Picnic Point</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">By Car</h3>
                  <p className="text-sm text-muted-foreground">
                    Located on Solapur-Pune Highway. Easily accessible from Solapur city center (18 km, 25 minutes).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">By Train</h3>
                  <p className="text-sm text-muted-foreground">
                    Solapur Railway Station is the nearest major station (20 km). Taxis and cabs available.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">
                    November to February (Hurda Season). Early morning or late afternoon for pleasant weather.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NearbyAttractions;
