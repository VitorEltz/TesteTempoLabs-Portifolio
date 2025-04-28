import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  metrics: string[];
  onViewDetails: () => void;
}

const ProjectCard = ({
  title = "Product Redesign",
  description = "Led a complete redesign of our core product, focusing on improving user experience and increasing engagement metrics.",
  thumbnailUrl = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
  metrics = ["40% increase in user engagement", "25% reduction in churn"],
  onViewDetails = () => console.log("View details clicked"),
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-[350px] h-[400px] flex flex-col overflow-hidden bg-white">
      <div className="relative h-40 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Key Outcomes:</p>
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {metric}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={onViewDetails}
          className="w-full justify-between"
          variant="outline"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
