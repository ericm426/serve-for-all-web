import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Our Story</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To provide volunteer training services, we started as assistants for regional tennis clubs with youth programs. In January 2024, we decided to get together and create Serve For All in collaboration with these regional tennis clubs. We have since expanded this into year-round programs to serve the community.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Students Served</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">$10,000+</div>
                <div className="text-muted-foreground">Raised</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Volunteer Coaches</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
