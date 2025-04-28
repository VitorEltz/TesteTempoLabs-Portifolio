import React from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  level: number;
  description: string;
  category: string;
}

interface SkillsVisualizerProps {
  technicalSkills?: Skill[];
  softSkills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsVisualizer = ({
  technicalSkills = [
    {
      name: "Product Strategy",
      level: 90,
      description: "Developing product vision and roadmaps",
      category: "Strategy",
    },
    {
      name: "User Research",
      level: 85,
      description: "Conducting user interviews and usability testing",
      category: "Research",
    },
    {
      name: "Data Analysis",
      level: 80,
      description: "Analyzing user behavior and product metrics",
      category: "Analytics",
    },
    {
      name: "Agile/Scrum",
      level: 95,
      description: "Leading agile teams and sprint planning",
      category: "Methodology",
    },
    {
      name: "Wireframing",
      level: 75,
      description: "Creating low-fidelity mockups and prototypes",
      category: "Design",
    },
    {
      name: "A/B Testing",
      level: 70,
      description: "Designing and analyzing experiments",
      category: "Analytics",
    },
  ],
  softSkills = [
    {
      name: "Leadership",
      level: 90,
      description: "Leading cross-functional teams",
      category: "Management",
    },
    {
      name: "Communication",
      level: 95,
      description: "Clear and effective stakeholder communication",
      category: "Interpersonal",
    },
    {
      name: "Problem Solving",
      level: 85,
      description: "Creative approach to complex challenges",
      category: "Cognitive",
    },
    {
      name: "Stakeholder Management",
      level: 80,
      description: "Building relationships with key stakeholders",
      category: "Interpersonal",
    },
    {
      name: "Adaptability",
      level: 85,
      description: "Quickly adjusting to changing priorities",
      category: "Personal",
    },
    {
      name: "Strategic Thinking",
      level: 90,
      description: "Long-term vision and planning",
      category: "Cognitive",
    },
  ],
  title = "Skills & Expertise",
  description = "A visualization of my technical and soft skills as a Product Manager",
}: SkillsVisualizerProps) => {
  // Group skills by category
  const groupSkillsByCategory = (skills: Skill[]) => {
    return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
  };

  const technicalSkillsByCategory = groupSkillsByCategory(technicalSkills);
  const softSkillsByCategory = groupSkillsByCategory(softSkills);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-8">
          {Object.entries(technicalSkillsByCategory).map(
            ([category, skills]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                  <CardDescription>
                    Technical skills related to {category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill) => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <TooltipTrigger asChild>
                              <span className="text-sm font-medium">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <Badge variant="outline">{skill.level}%</Badge>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                        <TooltipContent>
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </CardContent>
              </Card>
            ),
          )}
        </TabsContent>

        <TabsContent value="soft" className="space-y-8">
          {Object.entries(softSkillsByCategory).map(([category, skills]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-xl">{category}</CardTitle>
                <CardDescription>
                  Soft skills related to {category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <TooltipTrigger asChild>
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </TooltipTrigger>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsVisualizer;
