const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Hurda Season at Picnic Point Solapur Is a Must-Visit Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Picnic Point in Solapur offers the most authentic Hurda Party experience in Maharashtra. 
            Nestled in the heart of nature, our venue combines traditional Maharashtrian hospitality 
            with modern amenities to create unforgettable memories.
          </p>
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
    </section>
  );
};

export default About;
