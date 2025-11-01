import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background min-h-[calc(100vh-4rem)] flex items-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <img src={logo} alt="Serve For All" className="h-32 mx-auto mb-6" />
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
