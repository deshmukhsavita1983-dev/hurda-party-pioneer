const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Picnic Point</h3>
            <p className="text-muted-foreground">
              Solapur's premier destination for authentic Hurda Party experiences and family picnics.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Book Now</a></li>
              <li><a href="/hurda-party-solapur" className="hover:text-primary transition-colors">Hurda Party Solapur</a></li>
              <li><a href="/family-package" className="hover:text-primary transition-colors">Family Package</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/reviews" className="hover:text-primary transition-colors">Guest Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Family Hurda Party</li>
              <li>Corporate Events</li>
              <li>Hurda Festival 2025</li>
              <li>Group Bookings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Picnic Point Road, Solapur, Maharashtra</li>
              <li>+91-92258 19192</li>
              <li>info@picnicpointsolapur.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Opening Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Sunday</li>
              <li>6:00 AM - 8:00 PM</li>
              <li className="text-sm">Best time: 7:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Picnic Point Solapur. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Keywords: hurda party Solapur, hurda party booking Solapur, best hurda party picnic spot, 
            family hurda party, corporate hurda party, hurda festival Solapur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
