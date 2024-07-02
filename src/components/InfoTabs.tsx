import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../components/ui/tabs";
import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function TabsDemo() {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid grid-cols-3 gap-3">
        <TabsTrigger value="about" className="text-center w-full">About</TabsTrigger>
        <TabsTrigger value="experience" className="text-center w-full">Experience</TabsTrigger>
        <TabsTrigger value="skills" className="text-center w-full">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <CardDescription>
              Some informations about the developer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <About />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card>
          <CardHeader>
            <CardDescription>
              A little resume about the experiences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Experience />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardDescription>
              Some skills acquired over the course of the development period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skills />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
