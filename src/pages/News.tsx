import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const allClasses = [
    { id: "august-2025-advanced", title: "August 2025 Advanced Class", month: "August 2025", level: "Advanced" },
    { id: "august-2025-intermediate", title: "August 2025 Intermediate Class", month: "August 2025", level: "Intermediate" },
    { id: "august-2025-beginner", title: "August 2025 Beginner Class", month: "August 2025", level: "Beginner" },
    { id: "july-2025-advanced", title: "July 2025 Advanced Class", month: "July 2025", level: "Advanced" },
    { id: "july-2025-intermediate", title: "July 2025 Intermediate Class", month: "July 2025", level: "Intermediate" },
    { id: "july-2025-beginner", title: "July 2025 Beginner Class", month: "July 2025", level: "Beginner" },
    { id: "june-2025-advanced", title: "June 2025 Advanced Class", month: "June 2025", level: "Advanced" },
    { id: "june-2025-intermediate", title: "June 2025 Intermediate Class", month: "June 2025", level: "Intermediate" },
    { id: "june-2025-beginner", title: "June 2025 Beginner Class", month: "June 2025", level: "Beginner" },
    { id: "may-2025-advanced", title: "May 2025 Advanced Class", month: "May 2025", level: "Advanced" },
    { id: "may-2025-intermediate", title: "May 2025 Intermediate Class", month: "May 2025", level: "Intermediate" },
    { id: "may-2025-beginner", title: "May 2025 Beginner Class", month: "May 2025", level: "Beginner" },
    { id: "august-2024-intermediate", title: "Intermediate Class August 2024", month: "August 2024", level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">News and Archives</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Stay informed about class schedules, events, and program updates
          </p>

          <Tabs defaultValue="august-2025-advanced" className="w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <TabsList className="flex flex-col h-fit md:w-64 shrink-0">
                {allClasses.map((classInfo) => (
                  <TabsTrigger key={classInfo.id} value={classInfo.id} className="w-full justify-start">
                    {classInfo.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-1">

            {allClasses.map((classInfo) => (
              <TabsContent key={classInfo.id} value={classInfo.id}>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{classInfo.title}</CardTitle>
                      <CardDescription>Class schedule and registration information</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4 py-2">
                          <h3 className="font-semibold text-lg">{classInfo.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Session starts first week of {classInfo.month.split(' ')[0]}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Duration: 8 weeks • Days: Tuesday & Thursday • Time: 4:00 PM - 5:30 PM
                          </p>
                          <p className="text-sm text-primary font-medium mt-2">
                            {classInfo.id === "august-2024-intermediate" ? "Class completed" : "Registration now open"}
                          </p>
                        </div>
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
              </div>
            </div>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
