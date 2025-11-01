-- Add UPDATE policies for bookings table
-- Allow users to update their own pending bookings
CREATE POLICY "Users can update own pending bookings"
ON bookings FOR UPDATE
USING (
  user_id = auth.uid() 
  AND status = 'pending'
)
WITH CHECK (
  user_id = auth.uid()
  AND status IN ('pending', 'cancelled')
);

-- Allow users to cancel their own bookings (soft delete)
CREATE POLICY "Users can cancel own bookings"
ON bookings FOR UPDATE
USING (
  user_id = auth.uid()
  AND status != 'cancelled'
)
WITH CHECK (
  user_id = auth.uid()
  AND status = 'cancelled'
);

-- Allow admins to update any booking
CREATE POLICY "Admins can update any booking"
ON bookings FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Note: No DELETE policy = no deletes allowed (use status='cancelled' instead)

-- Create public availability function
CREATE OR REPLACE FUNCTION public.get_public_availability(check_date DATE)
RETURNS TABLE (time_slot TEXT, available_slots INTEGER)
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    b.time_slot,
    (b.total_slots - COALESCE(SUM(b.booked_slots), 0))::INTEGER as available_slots
  FROM bookings b
  WHERE b.booking_date = check_date 
    AND b.status != 'cancelled'
  GROUP BY b.time_slot, b.total_slots;
END;
$$;