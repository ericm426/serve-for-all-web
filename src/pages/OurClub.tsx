import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import danielMa from "@/assets/daniel-ma.png";

const OurClub = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Meet the dedicated leaders and coaches behind Serve For All
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kenneth Hu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">Founder and Co-President</p>
                  <p className="text-muted-foreground">In Charge of Planning and Coaching</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <img src={danielMa} alt="Daniel Ma" className="w-full h-64 object-cover object-top rounded-md mb-4" />
                  <CardTitle>Daniel Ma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">Founder and Co-President</p>
                  <p className="text-muted-foreground">In Charge of Marketing and IT</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eric Mu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">Founder and Co-President</p>
                  <p className="text-muted-foreground">In Charge of Administration and Finance</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Coaches</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Maddie Murphy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coach</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Andy Yu</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coach</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ryan Xie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coach</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eben Heard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coach</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurClub;
