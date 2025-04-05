
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  Code, Cpu, Layout, Lightbulb, MessageSquare, Mic, 
  PenTool, Globe, Zap, Briefcase
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { category: "Programming Languages", skills: [
      { name: "JavaScript", level: 40 },
      { name: "C++", level: 60 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 0 },
      { name: "Java", level: 0 }
    ]},
    { category: "Frontend", skills: [
      { name: "HTML/CSS", level: 100 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React", level: 0 },
      { name: "Next.js", level: 0 },
      { name: "Vue.js", level: 0 }
    ]},
    { category: "Backend", skills: [
      { name: "Node.js", level: 0 },
      { name: "Express", level: 0 },
      { name: "Django", level: 0 },
      { name: "MongoDB", level: 0 },
      { name: "PostgreSQL", level: 0 }
    ]},
    { category: "Tools & Others", skills: [
      { name: "Git/GitHub", level: 0 },
      { name: "Docker", level: 0 },
      { name: "AWS", level: 0 },
      { name: "CI/CD", level: 0 },
      { name: "GraphQL", level: 0 }
    ]}
  ];

  const personalSkills = [
    {
      title: "Leadership",
      description: "Developing leadership skills through academic projects and group activities.",
      icon: Briefcase
    },
    {
      title: "Communication",
      description: "Building effective verbal and written communication skills through content creation.",
      icon: MessageSquare
    },
    {
      title: "Problem Solving",
      description: "Enhancing analytical skills through programming challenges and projects.",
      icon: Lightbulb
    },
    {
      title: "Content Creation",
      description: "Creating engaging YouTube videos about college experiences and educational content.",
      icon: Mic
    },
    {
      title: "Creative Thinking",
      description: "Applying creative approach to web development and content creation.",
      icon: PenTool
    },
    {
      title: "Adaptability",
      description: "Quickly adapting to new technologies and learning environments.",
      icon: Zap
    }
  ];

  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => observer.observe(bar));

    return () => {
      skillProgressBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-customDark-card" ref={skillsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-customAccent text-customAccent">Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">My <span>Skills</span></h2>
          <p className="text-customText-body max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and personal attributes that define my professional profile.
          </p>
        </div>

        <Tabs defaultValue="technical" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-customDark-background">
            <TabsTrigger 
              value="technical" 
              className="text-base py-3 data-[state=active]:bg-customAccent data-[state=active]:text-customDark-background"
            >
              <Code size={18} className="mr-2" /> Technical Skills
            </TabsTrigger>
            <TabsTrigger 
              value="personal" 
              className="text-base py-3 data-[state=active]:bg-customAccent data-[state=active]:text-customDark-background"
            >
              <Lightbulb size={18} className="mr-2" /> Personal Skills
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      {categoryIndex === 0 && <Code size={20} className="mr-2 text-customAccent" />}
                      {categoryIndex === 1 && <Layout size={20} className="mr-2 text-customAccent" />}
                      {categoryIndex === 2 && <Globe size={20} className="mr-2 text-customAccent" />}
                      {categoryIndex === 3 && <Cpu size={20} className="mr-2 text-customAccent" />}
                      <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium text-white">{skill.name}</span>
                            <span className="text-customText-body">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ width: '0%', transitionDelay: `${0.1 * (index + 1)}s` }}
                              data-width={`${skill.level}%`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="personal" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalSkills.map((skill, index) => (
                <Card key={index} className="animate-fade-in project-card bg-customDark-background border-none shadow-glow-sm hover:shadow-glow-md" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-md bg-customAccent/10 flex items-center justify-center mb-4 border border-customAccent/20">
                      <skill.icon size={24} className="text-customAccent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
                    <p className="text-customText-body">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
