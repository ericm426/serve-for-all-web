import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import tennisGroup from "@/assets/tennis-group.jpg";

const Mission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
          
          <div className="mb-6">
            <img 
              src={tennisGroup} 
              alt="Serve For All Tennis Club students and coaches on the court" 
              className="w-2/5 rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tennis is an expensive sport. Juniors often spend thousands to simply start playing. We at Serve For All Tennis Club want to allow everyone to enjoy the art of tennis. Our mission is to introduce, improve, and refine players' skill sets and mentality. We welcome all junior players who wish to take another step forward in their tennis career.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mission;
