const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Picnic Point</h3>
            <p className="text-muted-foreground">
              Solapur's premier destination for authentic Hurda Party experiences and family picnics.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#packages" className="hover:text-primary transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Book Now</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
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
              <li>Solapur, Maharashtra</li>
              <li>+91-XXXXXXXXXX</li>
              <li>info@picnicpointsolapur.com</li>
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
