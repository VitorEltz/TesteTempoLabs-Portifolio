import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProjectCard from "./ProjectCard";
import SkillsVisualizer from "./SkillsVisualizer";
import ContactForm from "./ContactForm";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export default function Home() {
  // Mock data for featured projects
  const featuredProjects = [
    {
      id: "1",
      title: "Product Analytics Dashboard",
      description:
        "Led the development of a comprehensive analytics dashboard that increased data-driven decision making by 40%.",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      metrics: ["40% increase in data usage", "25% reduction in decision time"],
      tags: ["Analytics", "UX Research", "Product Strategy"],
    },
    {
      id: "2",
      title: "Mobile App Redesign",
      description:
        "Spearheaded the redesign of a mobile application that improved user engagement and retention metrics.",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      metrics: [
        "32% increase in user engagement",
        "18% improvement in retention",
      ],
      tags: ["Mobile", "UI/UX", "User Research"],
    },
    {
      id: "3",
      title: "E-commerce Platform Launch",
      description:
        "Managed the launch of a new e-commerce platform that exceeded revenue targets within the first quarter.",
      thumbnail:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      metrics: ["120% of Q1 revenue target", "45% conversion rate"],
      tags: ["E-commerce", "Product Launch", "Growth"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
                alt="PM"
              />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
            <span className="text-lg font-semibold">PM Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary"
            >
              Skills
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            <Button size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Product Manager &{" "}
                <span className="text-primary">Strategic Thinker</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I transform complex problems into elegant product solutions that
                drive business growth and enhance user experiences.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -z-10 rounded-full bg-primary/20 w-72 h-72 blur-3xl"></div>
                <Avatar className="w-64 h-64 border-4 border-background shadow-xl">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio-large"
                    alt="Product Manager"
                  />
                  <AvatarFallback className="text-4xl">PM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Featured Projects Section */}
        <section id="projects" className="py-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                A selection of my most impactful product work
              </p>
            </div>
            <Button variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground mt-2">
              My professional toolkit as a Product Manager
            </p>
          </div>

          <Tabs defaultValue="technical">
            <TabsList className="mb-6">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools & Methods</TabsTrigger>
            </TabsList>
            <TabsContent value="technical">
              <SkillsVisualizer category="technical" />
            </TabsContent>
            <TabsContent value="soft">
              <SkillsVisualizer category="soft" />
            </TabsContent>
            <TabsContent value="tools">
              <SkillsVisualizer category="tools" />
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-8" />

        {/* About Section */}
        <section id="about" className="py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  I'm a strategic product manager with over 8 years of
                  experience building digital products that solve real user
                  problems while driving business growth.
                </p>
                <p>
                  My approach combines deep user empathy, data-driven decision
                  making, and cross-functional leadership to deliver exceptional
                  product experiences.
                </p>
                <p>
                  Previously, I've led product teams at [Company A], [Company
                  B], and [Company C], where I launched products used by
                  millions of users worldwide.
                </p>
              </div>
              <div className="mt-8">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Professional Background
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium">Senior Product Manager</h4>
                        <span className="text-muted-foreground">
                          2020 - Present
                        </span>
                      </div>
                      <p className="text-primary">Company A</p>
                      <p className="text-sm mt-1">
                        Led the development of flagship analytics platform,
                        resulting in 40% revenue growth.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium">Product Manager</h4>
                        <span className="text-muted-foreground">
                          2018 - 2020
                        </span>
                      </div>
                      <p className="text-primary">Company B</p>
                      <p className="text-sm mt-1">
                        Managed mobile app redesign that improved user retention
                        by 25%.
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium">
                          Associate Product Manager
                        </h4>
                        <span className="text-muted-foreground">
                          2016 - 2018
                        </span>
                      </div>
                      <p className="text-primary">Company C</p>
                      <p className="text-sm mt-1">
                        Supported e-commerce platform development and launch.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Get In Touch
              </h2>
              <p className="text-lg mb-6">
                Interested in working together or have a question? Feel free to
                reach out using the contact form or through my social profiles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@pmportfolio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="#" className="hover:text-primary">
                    linkedin.com/in/pmportfolio
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <a href="#" className="hover:text-primary">
                    @pmportfolio
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
                  alt="PM"
                />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <span className="font-semibold">PM Portfolio</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PM Portfolio. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
