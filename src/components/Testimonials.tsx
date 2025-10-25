import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Deshmukh",
      location: "Solapur",
      text: "Our family hurda getaway at Picnic Point was absolutely wonderful! The authentic taste and beautiful setting made it a memorable experience for all of us.",
      rating: 5
    },
    {
      name: "Rajesh Patil",
      location: "Pune",
      text: "We organized our company's team outing here and it was perfect. The corporate package had everything we needed, and the staff was very professional.",
      rating: 5
    },
    {
      name: "Anita Kulkarni",
      location: "Mumbai",
      text: "The best hurda party experience in Maharashtra! Fresh preparation, great ambiance, and excellent service. Highly recommended for families.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read authentic experiences from families and corporates who chose Picnic Point for their Hurda Party
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4 text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Review Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": testimonials.map((testimonial, index) => ({
            "@type": "Review",
            "position": index + 1,
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": 5
            },
            "reviewBody": testimonial.text,
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Picnic Point - Hurda Party Solapur"
            }
          }))
        })}
      </script>
    </section>
  );
};

export default Testimonials;
