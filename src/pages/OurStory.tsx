import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">Our Story</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Serve For All began with a simple belief: that tennis has the power to transform lives, 
              and that every child deserves the opportunity to experience that transformation.
            </p>

            <div className="bg-card p-8 rounded-lg border my-8">
              <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
              <p className="text-muted-foreground">
                Founded by a group of passionate tennis enthusiasts and community advocates, 
                Serve For All started with just a handful of students and one public court. 
                Our founders recognized that while tennis clubs and programs existed in affluent areas, 
                many communities lacked access to quality instruction and facilities.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Growing Together</h2>
            <p className="text-muted-foreground mb-6">
              Over the years, we've grown from serving a small group to impacting hundreds of young lives. 
              Our program has expanded to multiple locations, and we've built partnerships with schools, 
              community centers, and local tennis clubs who share our vision.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Served</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-lg">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Volunteer Coaches</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-muted-foreground">Community Partners</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground">
              As we continue to grow, our commitment remains the same: to provide exceptional tennis 
              education and mentorship to those who need it most. We're constantly expanding our programs, 
              seeking new partnerships, and finding innovative ways to reach more communities.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
