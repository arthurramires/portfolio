import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../components/ui/tabs"
import { About } from "./About"
import { Experience } from "./Experience"
import { Skills } from "./Skills"

export function TabsDemo() {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold border-b-2 border-primary pb-2">About</CardTitle>
            <CardDescription>
              Some informations about the developer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 p-8 rounded-lg">
            <About />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold border-b-2 border-primary pb-2">Experience</CardTitle>
            <CardDescription>
              A little resume about the experiences.
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Experience />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold border-b-2 border-primary pb-2">Skills</CardTitle>
            <CardDescription>
              Some skills acquired over the course of the development period
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <Skills />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
