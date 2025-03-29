
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { motion } from "framer-motion";
import { ClipboardPlus } from "lucide-react";

// Define a type for waitlist entries
interface WaitlistEntry {
  name: string;
  email: string;
  organization: string;
  timestamp: string;
}

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const { toast } = useToast();

  // Load existing waitlist entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = localStorage.getItem("waitlistEntries");
    if (storedEntries) {
      setWaitlistEntries(JSON.parse(storedEntries));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
          template_params: {
            to_email: "signspherekids@gmail.com",
            from_name: name,
            from_email: email,
            organization: organization || "Not specified",
            subject: "New member to waiting list",
            message: `${name} (${email}) from ${organization || "Not specified"} has joined the waitlist.`
          }
        })
      });
      
      // Create new waitlist entry
      const newEntry: WaitlistEntry = {
        name,
        email,
        organization,
        timestamp: new Date().toISOString()
      };
      
      // Update state with new entry
      const updatedEntries = [...waitlistEntries, newEntry];
      setWaitlistEntries(updatedEntries);
      
      // Save to localStorage
      localStorage.setItem("waitlistEntries", JSON.stringify(updatedEntries));
      
      toast({
        title: "Added to waitlist!",
        description: "Thank you for your interest. We'll notify you when we launch.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setOrganization("");
      
      console.log("Waitlist submission successful:", newEntry);
      console.log("All waitlist entries:", updatedEntries);
    } catch (error) {
      console.error("Error sending waitlist notification:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Notify Me When SignSphere Launches</h2>
          <p className="text-gray-600 text-center mb-12">
            Be the first to get access to our sign language solutions when we launch.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="organization">Organization (Optional)</Label>
              <Input
                id="organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Your company or organization"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              <ClipboardPlus className="w-5 h-5" />
              <span>{isSubmitting ? "Processing..." : "Notify Me"}</span>
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistForm;
