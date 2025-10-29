import { CloudRain, Tractor, UtensilsCrossed, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: CloudRain,
    title: "Rainwater Shower Experience",
    description: "Cool off and refresh under our natural rainwater shower setup, a unique attraction that adds a fun twist to your hurda party picnic.",
    keywords: "rainwater shower hurda party, outdoor shower experience Solapur"
  },
  {
    icon: Tractor,
    title: "Agri-Tourism Experience",
    description: "Immerse yourself in authentic rural Maharashtra life. Explore our working farm, interact with farm animals, and learn about traditional farming practices.",
    keywords: "agri-tourism Solapur, farm experience Maharashtra, rural tourism hurda party"
  },
  {
    icon: UtensilsCrossed,
    title: "Authentic Hurda Recipes",
    description: "Savor the taste of traditionally roasted hurda prepared using age-old Maharashtrian recipes. Fresh from the farm, roasted to perfection over an open fire.",
    keywords: "authentic hurda recipes Maharashtra, traditional hurda preparation, hurda party food"
  },
  {
    icon: Gamepad2,
    title: "Traditional Rural Games",
    description: "Enjoy classic Maharashtrian village games like kabaddi, khokho, and lagori. Perfect for team building and bringing families together.",
    keywords: "traditional hurda party games, rural games Maharashtra, village games Solapur"
  }
];

const FeatureSections = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unique Hurda Party Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes Picnic Point the most authentic hurda party destination in Solapur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {feature.keywords}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSections;
