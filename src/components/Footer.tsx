import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.png" alt="Serve For All" className="h-10 w-10" />
              <span className="text-xl font-bold text-primary">Serve For All</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing tennis education for underserved communities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/mission" className="text-sm text-muted-foreground hover:text-primary">Mission</Link>
              <Link to="/our-story" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link>
              <Link to="/class-introduction" className="text-sm text-muted-foreground hover:text-primary">Class Introduction</Link>
              <Link to="/our-club" className="text-sm text-muted-foreground hover:text-primary">Our Team</Link>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary">Community</Link>
            </nav>
          </div>

          <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:serveforall.tennis@gmail.com">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
              </a>
              <a href="https://www.instagram.com/serveforall.tennis" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow Us on Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Serve For All. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
