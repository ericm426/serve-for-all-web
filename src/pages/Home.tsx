import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <img src="/favicon.png" alt="Serve For All" className="h-32 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">Serve For All</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering underserved communities through tennis education and mentorship
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/class-introduction">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Classes
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Building stronger communities through the power of tennis
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Coaching</h3>
                <p className="text-muted-foreground">
                  Professional instruction tailored to all skill levels
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Life Skills</h3>
                <p className="text-muted-foreground">
                  Teaching values that extend beyond the tennis court
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
            <p className="text-lg mb-8 opacity-90">
              Be part of a movement that changes lives through tennis
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
