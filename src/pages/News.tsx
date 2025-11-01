import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const classSchedules = [
    { month: "August 2025", classes: ["Advanced Class", "Intermediate Class", "Beginner Class"] },
    { month: "July 2025", classes: ["Advanced Class", "Intermediate Class", "Beginner Class"] },
    { month: "June 2025", classes: ["Advanced Class", "Intermediate Class", "Beginner Class"] },
    { month: "May 2025", classes: ["Advanced Class", "Intermediate Class", "Beginner Class"] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Stay informed about class schedules, events, and program updates
          </p>

          <Tabs defaultValue="august-2025" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="august-2025">August 2025</TabsTrigger>
              <TabsTrigger value="july-2025">July 2025</TabsTrigger>
              <TabsTrigger value="june-2025">June 2025</TabsTrigger>
              <TabsTrigger value="may-2025">May 2025</TabsTrigger>
              <TabsTrigger value="2024">2024 Class</TabsTrigger>
            </TabsList>

            {classSchedules.map((schedule) => (
              <TabsContent 
                key={schedule.month} 
                value={schedule.month.toLowerCase().replace(' ', '-')}
              >
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{schedule.month} Class Schedule</CardTitle>
                      <CardDescription>Upcoming classes and registration information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {schedule.classes.map((cls) => (
                          <div key={cls} className="border-l-4 border-primary pl-4 py-2">
                            <h3 className="font-semibold text-lg">{schedule.month} {cls}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Session starts first week of {schedule.month.split(' ')[0]}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Duration: 8 weeks • Days: Tuesday & Thursday • Time: 4:00 PM - 5:30 PM
                            </p>
                            <p className="text-sm text-primary font-medium mt-2">
                              Registration now open
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Program Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Professional coaching from certified instructors</li>
                        <li>• Age-appropriate curriculum and skill development</li>
                        <li>• All equipment provided at no additional cost</li>
                        <li>• Small class sizes for personalized attention</li>
                        <li>• Progress reports and skill assessments included</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}

            <TabsContent value="2024">
              <Card>
                <CardHeader>
                  <CardTitle>2024 Class Archive</CardTitle>
                  <CardDescription>Looking back at our 2024 programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      The 2024 season was our most successful year yet! We served over 200 students 
                      across all skill levels and saw tremendous growth in both skills and character development.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-primary/5 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-primary">200+</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="bg-secondary/5 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-secondary">48</div>
                        <div className="text-sm text-muted-foreground">Weeks of Programming</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-primary">25</div>
                        <div className="text-sm text-muted-foreground">Volunteer Coaches</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
