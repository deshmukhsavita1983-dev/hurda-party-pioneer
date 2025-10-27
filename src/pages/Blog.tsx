import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Seasonal Hurda Experience at Picnic Point Solapur",
      excerpt: "Discover everything you need to know about Maharashtra's beloved winter delicacy and why Picnic Point is the best destination for authentic hurda parties in Solapur.",
      date: "January 15, 2025",
      author: "Picnic Point Team",
      category: "Seasonal Experience",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Why Hurda Party Season in Solapur is a Must-Experience Winter Tradition",
      excerpt: "Explore the rich cultural heritage of hurda parties in Maharashtra and learn why Solapur's Picnic Point has become the go-to destination for authentic seasonal celebrations.",
      date: "January 10, 2025",
      author: "Food Culture Expert",
      category: "Food & Culture",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "10 Reasons to Book Your Hurda Party at Picnic Point Solapur This Winter",
      excerpt: "From authentic Maharashtrian preparation to scenic outdoor settings, discover what makes Picnic Point the premier hurda party destination in Maharashtra.",
      date: "January 5, 2025",
      author: "Travel Guide",
      category: "Travel & Tourism",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hurda Party Blog - Picnic Point Solapur
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore the rich traditions, seasonal flavors, and unforgettable experiences of Hurda parties in Solapur
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="text-primary">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-3xl mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Article - Full Content */}
          <article className="max-w-4xl mx-auto mt-16 prose prose-lg">
            <Card className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                The Ultimate Guide to Seasonal Hurda Experience at Picnic Point Solapur
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  January 15, 2025
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Picnic Point Team
                </span>
                <span className="text-primary">Seasonal Experience</span>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    What is Hurda? Understanding Maharashtra's Beloved Winter Delicacy
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Hurda, also known as "hurda party," is one of Maharashtra's most cherished winter traditions. Made from tender green sorghum (jowar) roasted to perfection, hurda represents the essence of the harvest season in rural Maharashtra. At Picnic Point Solapur, we celebrate this authentic Maharashtrian experience by offering the most traditional and flavorful hurda party in the region.
                  </p>
                  <p className="leading-relaxed mb-4">
                    The hurda season typically begins in late December and extends through February, coinciding with the jowar harvest season. During this limited window, fresh green sorghum is available, making it the perfect time to experience this seasonal delicacy. The tender grains are roasted over wood fire, creating a smoky, earthy flavor that's both nutritious and delicious.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Why Picnic Point Solapur is the Best Destination for Hurda Parties
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Located on the scenic Picnic Point Road in Solapur, Maharashtra, our venue offers the perfect blend of authentic rural ambiance and modern amenities. Solapur, being in the heart of Maharashtra's agricultural belt, has access to the freshest jowar crops, ensuring the highest quality hurda for your party.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Our sprawling outdoor venue provides the ideal setting for enjoying hurda in its most traditional form - amidst nature, with family and friends, away from the hustle of city life. The fresh air, open spaces, and rustic charm of Picnic Point create an unforgettable atmosphere that enhances the entire hurda party experience.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    The Complete Hurda Party Experience at Picnic Point
                  </h3>
                  <p className="leading-relaxed mb-4">
                    At Picnic Point, a hurda party is more than just a meal - it's a complete cultural experience. The day begins early, typically around 7:00 AM when the weather is crisp and perfect for outdoor activities. Families arrive to find traditional seating arrangements around open fire pits where the hurda roasting takes place.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Our expert chefs demonstrate the traditional method of roasting hurda, using wood fire to achieve that perfect smoky flavor. The tender grains are served piping hot with a variety of accompaniments including fresh butter, jaggery powder, green chili chutney, and traditional Maharashtrian spice blends. The combination of the slightly sweet, nutty flavor of hurda with these accompaniments creates a taste sensation that's uniquely Maharashtrian.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Beyond Hurda: Complete Maharashtrian Food Experience
                  </h3>
                  <p className="leading-relaxed mb-4">
                    While hurda is the star of the show, our packages include a full spread of authentic Maharashtrian cuisine. Start your day with traditional breakfast items like zunka-bhakri, poha, and hot chai. For lunch, enjoy a thali featuring bharli vangi, pitla-bhakri, varan-bhaat, and an array of seasonal vegetables prepared in authentic rural style.
                  </p>
                  <p className="leading-relaxed mb-4">
                    We source ingredients locally, supporting farmers from surrounding villages and ensuring the freshest, most authentic flavors. Every dish is prepared using traditional recipes passed down through generations, giving you a true taste of Maharashtra's rich culinary heritage.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Family-Friendly Activities and Amenities
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Picnic Point offers extensive grounds perfect for family activities. Children can enjoy traditional games like lagori, kho-kho, and kabaddi in our dedicated play areas. Adults can relax in shaded seating areas, play carrom, or simply enjoy conversations while watching the hurda preparation.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Our facilities include clean, modern washrooms, ample parking space, and shaded pavilions for group gatherings. For corporate groups, we offer team-building activities and dedicated event coordinators to ensure your hurda party is a memorable success.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Planning Your Hurda Party: What You Need to Know
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The hurda season in Solapur runs from December through February, with peak season in January. We recommend booking your hurda party at least a week in advance, especially for weekends and holidays. Our three package options - Family, Group, and Corporate - cater to different group sizes and requirements.
                  </p>
                  <p className="leading-relaxed mb-4">
                    The best time to arrive is early morning, between 7:00 AM and 9:00 AM, when the weather is pleasant and you can enjoy the full day's activities. Wear comfortable, casual clothing suitable for outdoor activities. Don't forget to bring sunscreen and hats for sun protection.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Health Benefits of Hurda: Traditional Nutrition Meets Modern Wellness
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Hurda isn't just delicious - it's incredibly nutritious. Green sorghum is rich in dietary fiber, protein, and essential minerals like iron, calcium, and phosphorus. It's naturally gluten-free, making it an excellent option for those with gluten sensitivities. The high fiber content aids digestion, while the complex carbohydrates provide sustained energy throughout the day.
                  </p>
                  <p className="leading-relaxed mb-4">
                    The traditional preparation method of roasting over wood fire enhances the nutritional profile while adding that distinctive smoky flavor. Combined with accompaniments like jaggery (rich in iron) and fresh butter (healthy fats), a hurda meal is a well-balanced, wholesome feast.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Cultural Significance: Preserving Maharashtra's Rural Heritage
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Hurda parties represent an important aspect of Maharashtra's agricultural traditions. Historically, farmers would celebrate the jowar harvest by roasting the fresh grains and sharing them with family and neighbors. This tradition fostered community bonds and celebrated the fruits of hard labor.
                  </p>
                  <p className="leading-relaxed mb-4">
                    At Picnic Point, we're committed to preserving this cultural heritage. We work directly with local farmers, support traditional farming practices, and educate visitors about the significance of seasonal eating and agricultural traditions. Every hurda party at our venue is a celebration of Maharashtra's rich rural culture.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Booking Your Hurda Party Experience
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Ready to experience the magic of an authentic hurda party? Booking with Picnic Point is simple. Choose from our three package options based on your group size and requirements. Our Family Package (₹299 per person) is perfect for small families, while our Group Package (₹499 per person) offers additional amenities for medium-sized gatherings. Corporate groups can opt for our comprehensive Corporate Package (₹799 per person) with dedicated coordination and team-building activities.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Contact us at +91-92258 19192 or email info@picnicpointsolapur.com to check availability and make your reservation. Our friendly team is ready to help you plan the perfect hurda party experience that you and your guests will remember for years to come.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Conclusion: Don't Miss Solapur's Best Hurda Party Experience
                  </h3>
                  <p className="leading-relaxed mb-4">
                    The hurda season is fleeting, making it all the more special. At Picnic Point Solapur, we've perfected the art of hosting authentic hurda parties that combine traditional flavors, cultural experiences, and modern amenities. Whether you're a local looking to reconnect with your roots or a visitor eager to experience Maharashtrian culture, our hurda parties offer an unforgettable journey into the heart of Maharashtra's culinary traditions.
                  </p>
                  <p className="leading-relaxed">
                    Book your hurda party today and join the thousands of satisfied guests who've made Picnic Point their preferred destination for seasonal celebrations in Solapur. Experience the warmth of Maharashtrian hospitality, the authenticity of traditional cuisine, and the joy of celebrating nature's bounty with loved ones.
                  </p>
                </section>
              </div>

              {/* Schema Markup for Article */}
              <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  "headline": "The Ultimate Guide to Seasonal Hurda Experience at Picnic Point Solapur",
                  "description": "Complete guide to experiencing authentic hurda parties in Solapur, Maharashtra. Learn about traditional preparation, cultural significance, and why Picnic Point is the best destination for seasonal hurda celebrations.",
                  "image": "https://picnic-point.com/hurda-party-hero.jpg",
                  "author": {
                    "@type": "Organization",
                    "name": "Picnic Point Solapur"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Picnic Point",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://picnic-point.com/logo.png"
                    }
                  },
                  "datePublished": "2025-01-15",
                  "dateModified": "2025-01-15",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://picnic-point.com/blog/hurda-party-guide"
                  },
                  "keywords": "hurda party Solapur, seasonal hurda experience, Maharashtrian food, winter delicacy, traditional hurda, Picnic Point Solapur, jowar roasting, harvest season celebration, authentic Maharashtrian cuisine"
                })}
              </script>
            </Card>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
