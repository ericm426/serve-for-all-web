import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClassIntroduction = () => {
  const classes = [
    {
      title: "Beginner Class",
      level: "Ages 8+",
      description: "This class is for players with little or no tennis experience. Players will be introduced to basic tennis skills through drills and rally games. Green balls are used. Activities and games are focused on developing their interest, agility, balance, and coordination.",
      features: []
    },
    {
      title: "Intermediate Class",
      level: "Ages 12+",
      description: "AT LEAST ONE YEAR OF TENNIS EXPERIENCE REQUIRED. Students will be evaluated on-court and grouped according to ability level. This class introduces basic match play and continues to work on improving stroke fundamentals. Proper technique is emphasized along with racket control, coordination, and movement. Classes are one and a half hours long.",
      features: []
    },
    {
      title: "Advanced Class",
      level: "UTR 3.5+",
      description: "This class is designed for players who compete in USTA or UTR tournaments and are preparing to play on their varsity high school team. Players will develop on-court technique, footwork, and strategy.",
      features: []
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
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
                  <p className="text-muted-foreground">{cls.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClassIntroduction;
