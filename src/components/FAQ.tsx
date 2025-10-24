import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Everything you need to know about booking your Hurda Party at Picnic Point Solapur
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg">
                What's included in the Hurda Party package?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each Hurda Party package includes freshly roasted hurda served with traditional masala and lemon, 
                complementary snacks, beverages, access to play areas and games, shaded seating arrangements, 
                and parking facilities. Corporate packages also include audio systems and dedicated event coordinators.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg">
                How do I reach Picnic Point, Solapur?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Picnic Point is easily accessible from Solapur city center. It's located approximately 15 km 
                from Solapur Railway Station. We provide detailed directions upon booking confirmation. 
                Ample parking space is available for both cars and buses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg">
                Is Hurda Party suitable for children?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Hurda Party is a family-friendly experience perfect for all ages. We have dedicated 
                play areas for children, kid-friendly snacks, and safe, supervised spaces. Many families visit 
                us specifically for creating memorable experiences with their children.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg">
                What is the best time to visit for Hurda Party?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The Hurda season typically runs from December to February when fresh green chickpeas are available. 
                Weekends and holidays are popular, so we recommend booking in advance. Morning slots (9 AM - 1 PM) 
                and evening slots (3 PM - 7 PM) are available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg">
                Can I customize the menu or add special requests?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We're happy to accommodate special dietary requirements and preferences. Corporate packages 
                include customizable catering options. Please mention your requirements when booking, and our 
                team will work with you to create the perfect menu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Cancellations made 48 hours before the booking date receive a full refund. Cancellations within 
                24-48 hours receive a 50% refund. Unfortunately, same-day cancellations cannot be refunded. 
                However, you can reschedule your booking free of charge up to 24 hours before the event.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's included in the Hurda Party package?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each Hurda Party package includes freshly roasted hurda served with traditional masala and lemon, complementary snacks, beverages, access to play areas and games, shaded seating arrangements, and parking facilities."
              }
            },
            {
              "@type": "Question",
              "name": "How do I reach Picnic Point, Solapur?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Picnic Point is easily accessible from Solapur city center, located approximately 15 km from Solapur Railway Station with ample parking space available."
              }
            },
            {
              "@type": "Question",
              "name": "Is Hurda Party suitable for children?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Hurda Party is family-friendly with dedicated play areas, kid-friendly snacks, and safe supervised spaces for children of all ages."
              }
            }
          ]
        })}
      </script>
    </section>
  );
};

export default FAQ;
