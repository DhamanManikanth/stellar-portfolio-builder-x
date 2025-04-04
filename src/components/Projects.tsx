
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for tracking and analyzing social media metrics across multiple platforms.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/social-dashboard"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "An intuitive task management application with drag-and-drop interface and real-time updates.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/task-manager"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts and historical weather data for any location.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["React Native", "Weather API", "Geolocation", "Redux"],
      liveLink: "https://project-demo.com",
      githubLink: "https://github.com/yourusername/weather-app"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden project-card animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="group">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="group">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                        <ArrowUpRight size={14} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
