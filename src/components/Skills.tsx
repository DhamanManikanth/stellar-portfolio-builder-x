
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
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 }
    ]},
    { category: "Frontend", skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Vue.js", level: 75 }
    ]},
    { category: "Backend", skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Django", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ]},
    { category: "Tools & Others", skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "GraphQL", level: 75 }
    ]}
  ];

  const personalSkills = [
    {
      title: "Leadership",
      description: "Experience leading development teams and coordinating project deliverables.",
      icon: Briefcase
    },
    {
      title: "Communication",
      description: "Excellent verbal and written communication skills, with experience in technical documentation.",
      icon: MessageSquare
    },
    {
      title: "Problem Solving",
      description: "Strong analytical skills with a methodical approach to solving complex technical challenges.",
      icon: Lightbulb
    },
    {
      title: "Public Speaking",
      description: "Confident public speaker with experience in technical presentations and workshops.",
      icon: Mic
    },
    {
      title: "Creative Thinking",
      description: "Ability to think outside the box and develop innovative solutions.",
      icon: PenTool
    },
    {
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing project requirements.",
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
    <section id="skills" className="py-20" ref={skillsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and personal attributes that define my professional profile.
          </p>
        </div>

        <Tabs defaultValue="technical" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="technical" className="text-base py-3">
              <Code size={18} className="mr-2" /> Technical Skills
            </TabsTrigger>
            <TabsTrigger value="personal" className="text-base py-3">
              <Lightbulb size={18} className="mr-2" /> Personal Skills
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${0.1 * categoryIndex}s` }}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      {categoryIndex === 0 && <Code size={20} className="mr-2 text-primary" />}
                      {categoryIndex === 1 && <Layout size={20} className="mr-2 text-primary" />}
                      {categoryIndex === 2 && <Globe size={20} className="mr-2 text-primary" />}
                      {categoryIndex === 3 && <Cpu size={20} className="mr-2 text-primary" />}
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
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
                <Card key={index} className="animate-fade-in project-card" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <skill.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
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
