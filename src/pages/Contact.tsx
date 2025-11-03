import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12">
            We'd love to hear from you. Get in touch with our team.
          </p>

          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Interested in our programs, volunteering as a coach or mentor, or have questions? Email us and we'd love to have you join our team!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:serveforall.tennis@gmail.com" className="inline-block">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/serveforall.tennis" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
