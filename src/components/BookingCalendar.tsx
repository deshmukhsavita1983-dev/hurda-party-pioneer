import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { format } from "date-fns";

interface SlotAvailability {
  morning: number;
  afternoon: number;
  evening: number;
}

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [availability, setAvailability] = useState<SlotAvailability>({
    morning: 50,
    afternoon: 50,
    evening: 50,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailability = async (date: Date) => {
    setLoading(true);
    const formattedDate = format(date, 'yyyy-MM-dd');
    
    try {
      const { data: slots, error } = await supabase
        .rpc('get_public_availability', { check_date: formattedDate });

      if (error) throw error;

      const newAvailability: SlotAvailability = {
        morning: 50,
        afternoon: 50,
        evening: 50,
      };

      slots?.forEach((slot) => {
        const timeSlot = slot.time_slot as keyof SlotAvailability;
        newAvailability[timeSlot] = slot.available_slots;
      });

      setAvailability(newAvailability);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error fetching availability:', error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getSlotStatus = (available: number) => {
    if (available === 0) return { text: "Sold Out", color: "destructive", icon: AlertCircle };
    if (available <= 10) return { text: `Only ${available} left!`, color: "default", icon: AlertCircle };
    return { text: `${available} slots available`, color: "secondary", icon: CheckCircle2 };
  };

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Check Availability & Book</h2>
          <p className="text-muted-foreground text-lg">
            Select a date to see available time slots for your Hurda Party
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
              <CardDescription>Choose your preferred date for the party</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Time Slots</CardTitle>
              <CardDescription>
                {selectedDate ? format(selectedDate, 'MMMM dd, yyyy') : 'Select a date'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <div className="text-center py-8 text-muted-foreground">Loading availability...</div>
              ) : (
                <>
                  {(['morning', 'afternoon', 'evening'] as const).map((slot) => {
                    const status = getSlotStatus(availability[slot]);
                    const Icon = status.icon;
                    return (
                      <div
                        key={slot}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-semibold capitalize">{slot}</p>
                            <p className="text-sm text-muted-foreground">
                              {slot === 'morning' && '9:00 AM - 12:00 PM'}
                              {slot === 'afternoon' && '12:00 PM - 4:00 PM'}
                              {slot === 'evening' && '4:00 PM - 8:00 PM'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <Badge variant={status.color as any}>{status.text}</Badge>
                        </div>
                      </div>
                    );
                  })}
                  
                  {availability.morning <= 3 || availability.afternoon <= 3 || availability.evening <= 3 ? (
                    <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <p className="text-sm font-semibold text-destructive flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Hurry! Limited slots remaining this weekend!
                      </p>
                    </div>
                  ) : null}

                  <Button onClick={scrollToBooking} className="w-full mt-6" size="lg">
                    Book Now
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;