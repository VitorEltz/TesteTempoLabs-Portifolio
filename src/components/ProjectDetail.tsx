import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

interface ProjectDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    problemStatement: string;
    approach: string;
    deliverables: string[];
    results: {
      metric: string;
      value: string;
    }[];
    timeline: string;
    team: string;
    images: string[];
    tags: string[];
    links?: {
      title: string;
      url: string;
    }[];
  };
}

const ProjectDetail = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Enterprise Customer Portal Redesign",
    description:
      "Led the redesign of the customer portal for enterprise clients, improving user satisfaction and reducing support tickets.",
    problemStatement:
      "The existing customer portal had poor usability metrics with a high bounce rate (65%) and generated numerous support tickets for basic tasks. Enterprise clients were frustrated with the complex navigation and inability to quickly access key account information.",
    approach:
      "I led a cross-functional team through a comprehensive redesign process. We began with extensive user research, including interviews with 20 enterprise clients and analysis of support ticket patterns. Using these insights, we created user personas and journey maps to identify pain points. We then developed wireframes and prototypes, conducting 3 rounds of usability testing with actual customers to refine the design iteratively.",
    deliverables: [
      "Comprehensive user research report with actionable insights",
      "User personas and journey maps",
      "Information architecture redesign",
      "High-fidelity prototypes",
      "Implementation roadmap with phased rollout plan",
    ],
    results: [
      { metric: "User Satisfaction", value: "+42%" },
      { metric: "Support Tickets", value: "-35%" },
      { metric: "Task Completion Rate", value: "+58%" },
      { metric: "Average Session Duration", value: "+27%" },
    ],
    timeline: "Q3 2022 - Q1 2023",
    team: "Product Manager, 2 UX Designers, 4 Engineers, 1 Data Analyst",
    images: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    ],
    tags: ["UX Redesign", "Enterprise", "Customer Portal", "User Research"],
    links: [
      { title: "Case Study", url: "#" },
      { title: "Project Documentation", url: "#" },
    ],
  },
}: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-0 h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <div className="flex gap-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <img
                          src={image}
                          alt={`Project image ${index + 1}`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.timeline}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{project.team}</span>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="problem">Problem</TabsTrigger>
              <TabsTrigger value="approach">Approach</TabsTrigger>
              <TabsTrigger value="deliverables">Deliverables</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="problem" className="space-y-4">
              <h3 className="text-lg font-medium">Problem Statement</h3>
              <p className="text-muted-foreground">
                {project.problemStatement}
              </p>
            </TabsContent>

            <TabsContent value="approach" className="space-y-4">
              <h3 className="text-lg font-medium">Approach</h3>
              <p className="text-muted-foreground">{project.approach}</p>
            </TabsContent>

            <TabsContent value="deliverables" className="space-y-4">
              <h3 className="text-lg font-medium">Deliverables</h3>
              <ul className="space-y-2">
                {project.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="results" className="space-y-4">
              <h3 className="text-lg font-medium">Results & Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.results.map((result, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        {result.metric}
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {result.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-8 pt-4 border-t flex gap-4">
            {project.links.map((link, index) => (
              <Button key={index} variant="outline" size="sm" asChild>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {link.title}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
