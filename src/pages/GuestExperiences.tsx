import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Calendar, Users } from "lucide-react";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import familyHurdaImage from "@/assets/family-hurda.jpg";
import corporateHurdaImage from "@/assets/corporate-hurda.jpg";
import heroImage from "@/assets/hurda-party-hero.jpg";

const GuestExperiences = () => {
  // Set SEO meta tags
  useEffect(() => {
    document.title = "Best Hurda Party Reviews – Guest Stories | Picnic Point";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read authentic guest reviews and experience stories from hurda parties at Picnic Point Solapur. See why we\'re rated as the best picnic spot.');
    }
  }, []);

  const scrollToBooking = () => {
    window.location.href = '/#contact';
  };

  const guestStories = [
    {
      name: "Priya & Rahul Deshmukh",
      location: "Pune, Maharashtra",
      date: "January 2025",
      rating: 5,
      title: "Perfect Family Hurda Party Experience!",
      story: "We visited Picnic Point with our extended family of 15 people for a hurda party and it exceeded all expectations. The authentic preparation of hurda over wood fire, the scenic outdoor setting, and the warm hospitality made it unforgettable. Our kids loved the play area while we adults enjoyed the traditional Maharashtrian feast. The quality of hurda was exceptional - fresh, perfectly roasted with that amazing smoky flavor. We'll definitely return next season!",
      image: familyHurdaImage,
      guests: 15,
      highlights: ["Authentic hurda preparation", "Family-friendly amenities", "Traditional Maharashtrian feast"]
    },
    {
      name: "Amit Patil",
      location: "Solapur, Maharashtra",
      date: "December 2024",
      rating: 5,
      title: "Best Picnic Spot in Solapur for Corporate Events",
      story: "We organized our annual team outing at Picnic Point and chose their hurda party package. The team-building activities were well-coordinated, the venue was spacious enough for our group of 40, and the hurda experience was a hit with everyone. Many of our team members from outside Maharashtra got to try hurda for the first time and loved it. The event coordinator was professional and ensured everything ran smoothly. Highly recommended for corporate gatherings!",
      image: corporateHurdaImage,
      guests: 40,
      highlights: ["Professional event coordination", "Team-building activities", "Spacious venue"]
    },
    {
      name: "Snehal Kulkarni",
      location: "Mumbai, Maharashtra",
      date: "January 2025",
      rating: 5,
      title: "Authentic Maharashtrian Experience",
      story: "As someone who grew up in Mumbai, I'd heard about hurda parties but never experienced one. Picnic Point gave us the perfect authentic rural Maharashtra experience. The fresh hurda served with butter, jaggery, and green chili chutney was delicious. What impressed me most was how they've preserved the traditional method while providing clean, modern facilities. The staff explained the cultural significance of hurda season, making it educational too. A must-visit during winter!",
      image: heroImage,
      guests: 8,
      highlights: ["Authentic rural experience", "Cultural education", "Modern facilities"]
    }
  ];

  const quickReviews = [
    {
      name: "Sandeep Jadhav",
      location: "Kolhapur",
      rating: 5,
      text: "Best hurda I've ever tasted! The venue is beautiful and perfect for families."
    },
    {
      name: "Meera Shinde",
      location: "Nashik",
      rating: 5,
      text: "Wonderful experience! The traditional preparation and authentic flavors made our day special."
    },
    {
      name: "Rajesh Bhosale",
      location: "Pune",
      rating: 5,
      text: "Great place for corporate outings. Well-organized, professional, and the hurda was excellent!"
    },
    {
      name: "Anita Wagh",
      location: "Solapur",
      rating: 5,
      text: "We've been coming here every hurda season for 3 years. Never disappoints! Perfect picnic spot."
    },
    {
      name: "Vijay Mane",
      location: "Sangli",
      rating: 5,
      text: "Amazing ambiance, delicious food, and friendly staff. Best hurda party experience in Solapur!"
    },
    {
      name: "Kavita Pawar",
      location: "Mumbai",
      rating: 5,
      text: "Took my parents here and they loved it! Reminded them of their village childhood. Authentic experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Guest Experiences & Reviews
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Discover why Picnic Point is Solapur's highest-rated destination for authentic hurda parties and family picnics
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 fill-primary text-primary" />
              ))}
              <span className="text-2xl font-bold ml-2">5.0</span>
            </div>
            <p className="text-muted-foreground">Based on 150+ verified guest reviews</p>
          </div>
        </div>
      </header>

      {/* Featured Guest Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Guest Stories
          </h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {guestStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={story.image} 
                      alt={`${story.title} - Guest experience at Picnic Point Solapur hurda party`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{story.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {story.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {story.guests} guests
                      </span>
                      <span>{story.location}</span>
                    </div>
                    <div className="relative mb-4">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground leading-relaxed pl-6">{story.story}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">- {story.name}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reviews Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Guests Say
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Create Your Own Memorable Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied guests who've experienced the best hurda party in Solapur. Book your visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="text-lg px-8"
            >
              Book Your Hurda Party Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/#packages'}
              className="text-lg px-8"
            >
              View Packages & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup for Reviews */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Picnic Point - Hurda Party Solapur",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": guestStories.map(story => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": story.name
            },
            "datePublished": story.date,
            "reviewBody": story.story,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": story.rating,
              "bestRating": "5",
              "worstRating": "1"
            }
          }))
        })}
      </script>

      <Footer />
    </div>
  );
};

export default GuestExperiences;
