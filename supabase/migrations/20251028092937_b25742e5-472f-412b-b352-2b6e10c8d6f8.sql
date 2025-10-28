-- Create bookings table to track slot availability
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_date DATE NOT NULL,
  time_slot TEXT NOT NULL CHECK (time_slot IN ('morning', 'afternoon', 'evening')),
  guests_count INTEGER NOT NULL CHECK (guests_count > 0),
  total_slots INTEGER NOT NULL DEFAULT 50,
  booked_slots INTEGER NOT NULL DEFAULT 0,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  package_type TEXT NOT NULL CHECK (package_type IN ('family', 'corporate', 'friends')),
  special_requests TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(booking_date, time_slot)
);

-- Create index for faster date queries
CREATE INDEX idx_bookings_date ON public.bookings(booking_date);
CREATE INDEX idx_bookings_status ON public.bookings(status);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Allow public read access to view availability
CREATE POLICY "Anyone can view bookings"
ON public.bookings
FOR SELECT
USING (true);

-- Allow public insert for new bookings
CREATE POLICY "Anyone can create bookings"
ON public.bookings
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_bookings_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_bookings_updated_at();

-- Create function to get available slots
CREATE OR REPLACE FUNCTION public.get_available_slots(check_date DATE, check_time_slot TEXT)
RETURNS INTEGER AS $$
DECLARE
  available_slots INTEGER;
BEGIN
  SELECT COALESCE(total_slots - booked_slots, 50) INTO available_slots
  FROM public.bookings
  WHERE booking_date = check_date AND time_slot = check_time_slot AND status != 'cancelled';
  
  IF available_slots IS NULL THEN
    available_slots := 50;
  END IF;
  
  RETURN available_slots;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;