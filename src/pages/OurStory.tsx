import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import tennisTeam from "@/assets/tennis-team.png";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="container py-6 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Our Story</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Students Served</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-1">$12,000+</div>
              <div className="text-sm text-muted-foreground">Raised</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Volunteer Coaches</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-1">300+</div>
              <div className="text-sm text-muted-foreground">Volunteer Hours Served</div>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            To provide volunteer training services, we started as assistants for regional tennis clubs with youth
            programs. In January 2024, we decided to get together and create Serve For All in collaboration with these
            regional tennis clubs. We have since expanded this into year-round programs to serve the community.
          </p>

          <img 
            src={tennisTeam} 
            alt="Serve For All volunteer coaches and team on the tennis courts" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
