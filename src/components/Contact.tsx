import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Received!",
      description: "We'll contact you within 24 hours to confirm your Hurda Party booking.",
    });
    setFormData({ name: '', phone: '', email: '', guests: '', date: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Book Your Hurda Party Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours to confirm your booking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-3 text-xl">📍</div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Picnic Point, Solapur, Maharashtra 413001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3 text-xl">📞</div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3 text-xl">✉️</div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">info@picnicpointsolapur.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3 text-xl">⏰</div>
                  <div>
                    <p className="font-semibold text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Your Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <Input 
                placeholder="Phone Number" 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <Input 
                placeholder="Email Address" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Number of Guests" 
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
                <Input 
                  placeholder="Preferred Date" 
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
              </div>
              <Textarea 
                placeholder="Additional Requirements or Questions"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px] bg-card"
              />
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-glow">
                Submit Booking Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
