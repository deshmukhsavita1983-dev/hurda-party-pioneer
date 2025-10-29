import { Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const socialPosts = [
  {
    username: "@raj_family_trip",
    image: "/lovable-uploads/social-1.jpg",
    caption: "Best hurda party experience! #HurdaPartySolapur",
    likes: 234
  },
  {
    username: "@corporate_events",
    image: "/lovable-uploads/social-2.jpg",
    caption: "Team building done right at Picnic Point! #HurdaPartySolapur",
    likes: 189
  },
  {
    username: "@foodie_maharashtra",
    image: "/lovable-uploads/social-3.jpg",
    caption: "Authentic hurda taste 🌾 #HurdaPartySolapur",
    likes: 312
  },
  {
    username: "@weekend_travelers",
    image: "/lovable-uploads/social-4.jpg",
    caption: "Perfect family outing! #HurdaPartySolapur",
    likes: 267
  }
];

const SocialFeed = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Guest Moments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            See what our guests are sharing about their hurda party experience
          </p>
          <p className="text-sm text-muted-foreground">
            Tag us with <span className="font-semibold text-primary">#HurdaPartySolapur</span> to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {socialPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={post.image}
                    alt={`Guest post by ${post.username}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 rounded-full p-2">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm mb-1">{post.username}</p>
                  <p className="text-xs text-muted-foreground mb-2">{post.caption}</p>
                  <p className="text-xs text-muted-foreground">❤️ {post.likes} likes</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
