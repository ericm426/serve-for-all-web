import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClassIntroduction = () => {
  const classes = [
    {
      title: "Beginner Class",
      level: "Ages 6-10",
      description: "Perfect for first-time players. Learn basic strokes, footwork, and tennis fundamentals in a fun, supportive environment.",
      features: ["Basic stroke techniques", "Court awareness", "Hand-eye coordination", "Sportsmanship"]
    },
    {
      title: "Intermediate Class",
      level: "Ages 10-14",
      description: "For players with basic skills looking to improve. Focus on consistency, strategy, and competitive play.",
      features: ["Advanced stroke mechanics", "Match play strategy", "Physical conditioning", "Mental toughness"]
    },
    {
      title: "Advanced Class",
      level: "Ages 14-18",
      description: "Intensive training for competitive players. Prepare for tournaments and high-level play.",
      features: ["Tournament preparation", "Advanced tactics", "Strength and conditioning", "College recruitment guidance"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-4">Class Introduction</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover the right program for your skill level and goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {classes.map((cls, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{cls.title}</CardTitle>
                  <CardDescription className="text-lg">{cls.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cls.description}</p>
                  <h4 className="font-semibold mb-2">What You'll Learn:</h4>
                  <ul className="space-y-1">
                    {cls.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Schedule</h3>
                <p>Classes run year-round with seasonal sessions. Each session is 8-12 weeks long with classes held twice weekly.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Equipment</h3>
                <p>All equipment provided including racquets, balls, and court access. No prior equipment ownership required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cost</h3>
                <p>Sliding scale fees based on family income. No one turned away due to inability to pay.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p>Multiple community locations throughout the area. Classes held at public courts and partner facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClassIntroduction;
