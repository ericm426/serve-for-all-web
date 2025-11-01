import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Mission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              At Serve For All, our mission is to provide access to quality tennis education and mentorship 
              for underserved communities, fostering personal growth, physical fitness, and life skills through 
              the sport we love.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  We envision a world where every child, regardless of their background, has the opportunity 
                  to experience the transformative power of tennis and develop skills that will serve them 
                  throughout their lives.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Inclusivity and accessibility for all</li>
                  <li>• Excellence in coaching and mentorship</li>
                  <li>• Community engagement and support</li>
                  <li>• Personal development and character building</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-muted-foreground mb-4">
              Through our comprehensive programs, we provide:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Free or subsidized tennis lessons for youth in underserved areas</li>
              <li>• Equipment and court access to remove financial barriers</li>
              <li>• Mentorship programs connecting students with positive role models</li>
              <li>• Academic support and life skills workshops</li>
              <li>• Competitive opportunities and pathway to advancement</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mission;
