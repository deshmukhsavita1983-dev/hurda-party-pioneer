import { useState } from "react";
import { Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const PDFChecklistDownload = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, you would:
    // 1. Save the lead to your database
    // 2. Send a confirmation email
    // 3. Trigger the PDF download
    
    toast({
      title: "Success!",
      description: "Your checklist is being downloaded. Check your email for a copy!",
    });

    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '/perfect-hurda-party-checklist.pdf';
    link.download = 'Perfect-Hurda-Party-Checklist.pdf';
    link.click();

    setIsOpen(false);
    setEmail("");
    setName("");
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-primary-foreground/10 mb-6">
            <Download className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan the Perfect Hurda Party
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Download our free comprehensive checklist with everything you need to organize an unforgettable hurda party experience
          </p>

          <div className="bg-primary-foreground/10 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Complete planning timeline</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Guest management tips</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Food & beverage checklist</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm">Activity planning guide</span>
              </div>
            </div>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Free Checklist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get Your Free Checklist</DialogTitle>
                <DialogDescription>
                  Enter your details to download the Perfect Hurda Party Planning Checklist
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Download Checklist
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default PDFChecklistDownload;
