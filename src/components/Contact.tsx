import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Shield, Lock, RefreshCcw, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.guests || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from('bookings').insert({
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_email: formData.email,
        guests_count: parseInt(formData.guests),
        booking_date: formData.date,
        time_slot: 'morning', // Default time slot
        package_type: 'family', // Default package
        special_requests: formData.message,
        booked_slots: parseInt(formData.guests),
        status: 'pending',
      });

      if (error) throw error;

      toast({
        title: "Booking Request Received! ✓",
        description: "We'll contact you shortly to confirm your Hurda Party booking.",
      });
      
      setFormData({ name: '', phone: '', email: '', guests: '', date: '', message: '' });
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Error",
        description: "There was an issue submitting your booking. Please try again or call us directly.",
        variant: "destructive",
      });
    }
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
                    <p className="text-muted-foreground">Picnic Point Road, Solapur, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3 text-xl">📞</div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91-92258 19192</p>
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
                    <p className="text-muted-foreground">Monday - Sunday: 6:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground text-sm">Best time: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-lg border-2">
              <Input 
                placeholder="Your Name *" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background"
              />
              <Input 
                placeholder="Phone Number *" 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background"
              />
              <Input 
                placeholder="Email Address" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Number of Guests *" 
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  min="1"
                  className="bg-background"
                />
                <Input 
                  placeholder="Preferred Date *" 
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="bg-background"
                />
              </div>
              <Textarea 
                placeholder="Special Requests or Questions"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px] bg-background"
              />

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Secure Booking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">SSL Protected</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCcw className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Free Rescheduling</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">No Hidden Charges</span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Shield className="h-3 w-3 mr-1" />
                    100% Secure
                  </Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    Your information is encrypted and protected. We offer flexible cancellation and money-back guarantee.
                  </p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-glow">
                Book Your Hurda Party - Safe & Secure
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By booking, you agree to our flexible rescheduling policy and terms
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
