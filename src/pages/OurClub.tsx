import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Trophy, Heart } from "lucide-react";

const OurClub = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join a community that's changing lives through tennis
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Membership Benefits</CardTitle>
                </div>
                <CardDescription>What you get as a member</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access to all club facilities and courts</li>
                  <li>• Discounted rates on group and private lessons</li>
                  <li>• Priority registration for camps and clinics</li>
                  <li>• Invitations to members-only events</li>
                  <li>• Equipment loan program</li>
                  <li>• Progress tracking and skill assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-secondary" />
                  <CardTitle>Club Activities</CardTitle>
                </div>
                <CardDescription>Year-round programming</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly group training sessions</li>
                  <li>• Monthly club tournaments</li>
                  <li>• Seasonal tennis camps</li>
                  <li>• Parent-child doubles events</li>
                  <li>• Community service projects</li>
                  <li>• Guest speaker workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-primary" />
                  <CardTitle>Competitive Opportunities</CardTitle>
                </div>
                <CardDescription>For players seeking competition</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• USTA junior team tennis</li>
                  <li>• Local and regional tournaments</li>
                  <li>• Inter-club competitions</li>
                  <li>• Ranking and ladder systems</li>
                  <li>• Tournament travel opportunities</li>
                  <li>• College prep and recruitment support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-secondary" />
                  <CardTitle>Community Impact</CardTitle>
                </div>
                <CardDescription>Making a difference together</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Volunteer coaching opportunities</li>
                  <li>• Equipment donation program</li>
                  <li>• Scholarship fundraising events</li>
                  <li>• Community outreach initiatives</li>
                  <li>• Mentorship program participation</li>
                  <li>• Family engagement activities</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-lg mb-6">
              Become part of a community dedicated to excellence, growth, and giving back. 
              Membership is open to all skill levels and backgrounds.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Membership is FREE for all participants!</p>
              <p>We believe in removing all barriers to participation.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurClub;
