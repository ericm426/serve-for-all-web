import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Community</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Together, we're building something special
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Student Success Stories</CardTitle>
                <CardDescription>Celebrating our students' achievements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Maria's Journey</p>
                  <p className="text-sm text-muted-foreground">
                    "Started as a complete beginner and now competing at the regional level. 
                    Serve For All gave me confidence on and off the court."
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-semibold">James' Achievement</p>
                  <p className="text-sm text-muted-foreground">
                    "The mentorship program helped me get into my dream college. 
                    Tennis opened doors I never knew existed."
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Sarah's Impact</p>
                  <p className="text-sm text-muted-foreground">
                    "After learning here, I became a volunteer coach. Now I'm giving back to 
                    the community that gave so much to me."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Partners</CardTitle>
                <CardDescription>Organizations supporting our mission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're grateful for our partnerships with local organizations that help make our 
                  programs possible:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Local Parks & Recreation Department</li>
                  <li>• Youth Development Foundation</li>
                  <li>• Community Sports Alliance</li>
                  <li>• Educational Excellence Initiative</li>
                  <li>• Health & Wellness Coalition</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Get Involved</CardTitle>
              <CardDescription>There are many ways to support our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Volunteer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share your love of tennis by coaching or mentoring students
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Donate Equipment</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gently used racquets, balls, and shoes help equip our students
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">Donate Now</Button>
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sponsor a Student</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support a student's journey through tennis and beyond
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" size="sm">Get Started</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a player, parent, volunteer, or supporter, there's a place for you 
              in the Serve For All community. Together, we're changing lives through tennis.
            </p>
            <Link to="/contact">
              <Button size="lg">Connect With Us</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
