import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Share2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const DownloadMenu = () => {
  const handleDownload = () => {
    // In a real implementation, this would link to an actual PDF file
    toast({
      title: "Menu Download",
      description: "The menu brochure will be downloaded shortly. Contact us for the latest menu!",
    });
    
    // Simulate download - in production, replace with actual PDF URL
    // window.open('/path-to-menu.pdf', '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Picnic Point Solapur - Hurda Party Menu',
        text: 'Check out the amazing Hurda Party menu at Picnic Point Solapur!',
        url: window.location.href,
      }).catch(() => {
        toast({
          title: "Sharing",
          description: "Share this page with your friends!",
        });
      });
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Page link copied to clipboard!",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <Card className="overflow-hidden border-2 shadow-lg">
          <div className="bg-gradient-to-r from-primary to-primary-glow p-8 text-primary-foreground">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-full bg-background/20 flex items-center justify-center">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Complete Menu & Activities Guide</h2>
                <p className="text-primary-foreground/90">
                  Download our detailed brochure featuring all food options, activities, and pricing
                </p>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Traditional Hurda Menu</h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh hurda preparation, accompaniments, and authentic Maharashtra flavors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fun Activities</h3>
                  <p className="text-sm text-muted-foreground">
                    Games, entertainment options, and recreational facilities available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Package Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive pricing for family, corporate, and group packages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location & Directions</h3>
                  <p className="text-sm text-muted-foreground">
                    Easy-to-follow directions and nearby landmarks for hassle-free visit
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownload} size="lg" className="flex-1 gap-2">
                <Download className="h-5 w-5" />
                Download Menu PDF
              </Button>
              <Button onClick={handleShare} size="lg" variant="outline" className="gap-2">
                <Share2 className="h-5 w-5" />
                Share with Friends
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6">
              📱 Mobile-optimized PDF • Instant download • Free of charge
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DownloadMenu;