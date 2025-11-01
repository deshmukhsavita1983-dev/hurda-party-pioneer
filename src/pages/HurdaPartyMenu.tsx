import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, Sun, Moon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import hurdaImage from "@/assets/hurda-traditional.jpg";

const HurdaPartyMenu = () => {
  useEffect(() => {
    document.title = "Hurda Party Menu Solapur – Traditional Food & Packages | Picnic Point";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our authentic hurda party menu at Picnic Point Solapur. Traditional Maharashtrian cuisine including fresh roasted hurda, snacks, full meals. View complete menu & packages.');
    }
  }, []);

  const scrollToBooking = () => {
    window.location.href = "/#contact";
  };

  const menuSections = [
    {
      icon: Sun,
      title: "Morning Session Menu",
      time: "7:00 AM - 12:00 PM",
      items: [
        { name: "Fresh Roasted Hurda", description: "Unlimited servings with traditional wood fire roasting" },
        { name: "Accompaniments", description: "Fresh butter, jaggery powder, green chili chutney, lemon" },
        { name: "Traditional Breakfast", description: "Zunka-bhakri, poha, sabudana khichdi" },
        { name: "Beverages", description: "Hot chai, coffee, buttermilk" },
        { name: "Fresh Fruits", description: "Seasonal fruit platter" }
      ]
    },
    {
      icon: Utensils,
      title: "Lunch Menu",
      time: "12:00 PM - 3:00 PM",
      items: [
        { name: "Maharashtrian Thali", description: "Full traditional meal service" },
        { name: "Main Course", description: "Bharli vangi, pitla-bhakri, varan-bhaat" },
        { name: "Vegetables", description: "Seasonal bhaji, usal, shenga chutney" },
        { name: "Accompaniments", description: "Papad, pickle, salad, curd" },
        { name: "Dessert", description: "Jaggery-based traditional sweet" }
      ]
    },
    {
      icon: Moon,
      title: "Evening Session",
      time: "4:00 PM - 7:00 PM",
      items: [
        { name: "Fresh Hurda", description: "Freshly roasted with evening setup" },
        { name: "Snacks", description: "Batata vada, bhajji, chakli" },
        { name: "Beverages", description: "Tea, coffee, cold drinks" },
        { name: "Light Dinner Option", description: "Available on request" }
      ]
    },
    {
      icon: Coffee,
      title: "Special Items",
      time: "Available on Request",
      items: [
        { name: "Non-Veg Options", description: "Chicken, mutton curry (Group & Corporate packages)" },
        { name: "BBQ Setup", description: "Live grilling station for groups" },
        { name: "Custom Menu", description: "Personalized menu for corporate events" },
        { name: "Birthday/Celebration", description: "Special arrangements available" }
      ]
    }
  ];

  const dietaryInfo = [
    "Pure vegetarian kitchen with separate non-veg section",
    "Fresh, locally sourced ingredients",
    "Traditional wood fire preparation",
    "Hygienically prepared in clean facilities",
    "Special dietary requirements accommodated",
    "Jain food options available on request"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PromoBanner />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Authentic Hurda Party Menu at Picnic Point Solapur
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Experience traditional Maharashtrian cuisine with our carefully curated menu featuring 
                fresh roasted hurda, authentic regional dishes, and warm hospitality
              </p>
            </div>

            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={hurdaImage} 
                alt="Fresh roasted hurda served traditionally on banana leaf with butter, jaggery and green chili chutney at Picnic Point Solapur" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Menu Sections */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {menuSections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                        <CardDescription className="text-sm">{section.time}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="border-l-2 border-primary/30 pl-4">
                          <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Dietary Information */}
            <Card className="max-w-4xl mx-auto mb-16">
              <CardHeader>
                <CardTitle className="text-2xl">Dietary Information & Quality Standards</CardTitle>
                <CardDescription>
                  We maintain the highest standards of food quality and hygiene
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-4">
                  {dietaryInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{info}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Package Info */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Choose Your Perfect Package
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                All our packages include fresh hurda preparation, full menu access, and comfortable dining facilities. 
                Select the package that best suits your group size and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToBooking} className="text-lg px-8">
                  Book Your Hurda Party
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = "/#packages"}
                  className="text-lg px-8"
                >
                  View All Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                Frequently Asked Questions About Our Menu
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I customize the menu for my group?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes! For Group and Corporate packages, we offer menu customization. Contact us at +91-92258 19192 
                      to discuss your specific requirements and dietary preferences.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Are non-vegetarian options available?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Non-vegetarian options including chicken and mutton curry are available with our Group and Corporate 
                      packages. These must be pre-ordered at the time of booking.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How fresh is the hurda?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We source fresh green sorghum (jowar) directly from local farmers daily during the season. 
                      The hurda is roasted fresh throughout your visit, ensuring the best taste and quality.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          "name": "Hurda Party Menu - Picnic Point Solapur",
          "description": "Authentic Maharashtrian hurda party menu with traditional cuisine",
          "hasMenuSection": menuSections.map(section => ({
            "@type": "MenuSection",
            "name": section.title,
            "description": section.time,
            "hasMenuItem": section.items.map(item => ({
              "@type": "MenuItem",
              "name": item.name,
              "description": item.description
            }))
          }))
        })}
      </script>

      <Footer />
    </div>
  );
};

export default HurdaPartyMenu;
