import aboutImage from "@/assets/about-section.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Hurda Season at Picnic Point Solapur Is a Must-Visit Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Picnic Point in Solapur offers the most authentic Hurda Party experience in Maharashtra. 
              Nestled in the heart of nature, our venue combines traditional Maharashtrian hospitality 
              with modern amenities to create unforgettable memories.
            </p>
          </div>
          
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={aboutImage} 
              alt="Traditional Maharashtrian hurda party at Picnic Point Solapur with families roasting jowar on wood fire in scenic outdoor setting" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fresh & Authentic</h3>
              <p className="text-muted-foreground">
                Freshly roasted hurda prepared with traditional methods and served on banana leaves
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Scenic Location</h3>
              <p className="text-muted-foreground">
                Beautiful natural surroundings perfect for family picnics and corporate gatherings
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Complete Experience</h3>
              <p className="text-muted-foreground">
                Traditional games, music, and activities included with every Hurda Party package
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Hurda Party Season at Picnic Point Solapur",
          "description": "Experience Maharashtra's iconic Hurda Party at Picnic Point, Solapur. Traditional freshly roasted hurda with authentic Maharashtrian hospitality.",
          "startDate": "2025-11-01",
          "endDate": "2025-02-28",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Picnic Point Solapur",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Picnic Point Road",
              "addressLocality": "Solapur",
              "addressRegion": "Maharashtra",
              "postalCode": "413001",
              "addressCountry": "IN"
            }
          },
          "offers": [
            {
              "@type": "Offer",
              "name": "Family Package",
              "price": 299,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://picnic-point.com"
            },
            {
              "@type": "Offer",
              "name": "Group Package",
              "price": 499,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://picnic-point.com"
            },
            {
              "@type": "Offer",
              "name": "Corporate Package",
              "price": 799,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://picnic-point.com"
            }
          ],
          "organizer": {
            "@type": "LocalBusiness",
            "name": "Picnic Point Solapur",
            "telephone": "+91-92258 19192",
            "email": "info@picnic-point.com"
          }
        })}
      </script>
    </section>
  );
};

export default About;
