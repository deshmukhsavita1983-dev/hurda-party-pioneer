import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Shield, Lock, RefreshCcw, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  customer_name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  customer_phone: z.string().trim().regex(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number with country code (e.g., +919876543210)"),
  customer_email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters").optional().or(z.literal('')),
  guests_count: z.number().int().min(1, "At least 1 guest required").max(200, "Maximum 200 guests allowed"),
  booking_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  time_slot: z.enum(['morning', 'afternoon', 'evening'], { errorMap: () => ({ message: "Please select a valid time slot" }) }),
  package_type: z.string().trim().min(1, "Package type is required").max(50, "Package type must be less than 50 characters"),
  special_requests: z.string().trim().max(1000, "Special requests must be less than 1000 characters").optional().or(z.literal('')),
});

const Contact = () => {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '',
    date: '',
    message: ''
  });

  useEffect(() => {
    if (!authLoading && user && formData.name === '') {
      const fetchProfile = async () => {
        const { data } = await supabase
          .from('profiles')
          .select('full_name, email, phone')
          .eq('id', user.id)
          .maybeSingle();
        
        if (data) {
          setFormData(prev => ({
            ...prev,
            name: data.full_name || '',
            email: data.email || '',
            phone: data.phone || '',
          }));
        }
      };
      fetchProfile();
    }
  }, [authLoading, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to make a booking.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    try {
      const validatedData = bookingSchema.parse({
        customer_name: formData.name,
        customer_phone: formData.phone,
        customer_email: formData.email || '',
        booking_date: formData.date,
        guests_count: parseInt(formData.guests),
        time_slot: 'morning',
        package_type: 'family',
        special_requests: formData.message || '',
      });

      const { error } = await supabase.from("bookings").insert({
        user_id: user.id,
        customer_name: validatedData.customer_name,
        customer_phone: validatedData.customer_phone,
        customer_email: validatedData.customer_email || null,
        booking_date: validatedData.booking_date,
        guests_count: validatedData.guests_count,
        time_slot: validatedData.time_slot,
        package_type: validatedData.package_type,
        special_requests: validatedData.special_requests || null,
        booked_slots: validatedData.guests_count,
        status: 'confirmed'
      });

      if (error) throw error;

      toast({
        title: "Booking Confirmed!",
        description: "We'll contact you shortly to finalize the details.",
      });

      setFormData({ name: '', phone: '', email: '', guests: '', date: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Booking Error",
          description: "Unable to process booking. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {!user && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
              <p className="text-amber-800">
                Please <button onClick={() => navigate('/auth')} className="underline font-semibold">sign in or create an account</button> to make a booking.
              </p>
            </div>
          )}
          
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
                disabled={!user}
              />
              <Input 
                placeholder="Phone Number (with country code, e.g., +919876543210) *" 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background"
                disabled={!user}
              />
              <Input 
                placeholder="Email Address" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-background"
                disabled={!user}
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
                  max="200"
                  className="bg-background"
                  disabled={!user}
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
                  disabled={!user}
                />
              </div>
              <Textarea 
                placeholder="Special Requests or Questions (max 1000 characters)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[100px] bg-background"
                maxLength={1000}
                disabled={!user}
              />

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

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-glow" disabled={!user}>
                {user ? "Book Your Hurda Party - Safe & Secure" : "Sign In to Book"}
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
