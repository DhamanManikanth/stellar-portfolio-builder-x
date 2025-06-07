
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Lightbulb, MessageSquare, Mic, 
  PenTool, Zap, Briefcase
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const technicalSkills = [
    { 
      name: "JavaScript", 
      level: 40, 
      status: "Still Learning",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      name: "C++", 
      level: 60, 
      status: "Intermediate",
      icon: "🔧",
      color: "from-blue-500 to-blue-600"
    },
    { 
      name: "Python", 
      level: 80, 
      status: "Almost Completed",
      icon: "🐍",
      color: "from-green-500 to-green-600"
    },
    { 
      name: "TypeScript", 
      level: 0, 
      status: "Not Started",
      icon: "🔷",
      color: "from-blue-400 to-blue-500"
    },
    { 
      name: "Java", 
      level: 0, 
      status: "Not Started",
      icon: "☕",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "HTML/CSS", 
      level: 100, 
      status: "Completed",
      icon: "🎨",
      color: "from-orange-500 to-pink-500"
    },
    { 
      name: "Tailwind CSS", 
      level: 90, 
      status: "Almost Completed",
      icon: "💨",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "React", 
      level: 0, 
      status: "Not Started",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      name: "Next.js", 
      level: 0, 
      status: "Not Started",
      icon: "▲",
      color: "from-gray-600 to-gray-800"
    },
    { 
      name: "Node.js", 
      level: 0, 
      status: "Not Started",
      icon: "🟢",
      color: "from-green-600 to-green-700"
    },
    { 
      name: "Git/GitHub", 
      level: 0, 
      status: "Not Started",
      icon: "🐙",
      color: "from-gray-700 to-gray-900"
    },
    { 
      name: "Docker", 
      level: 0, 
      status: "Not Started",
      icon: "🐳",
      color: "from-blue-600 to-blue-700"
    }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Almost Completed":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Still Learning":
        return "text-orange-400 bg-orange-400/10 border-orange-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  return (
    <section id="skills" className="py-20 bg-customDark-card relative" ref={skillsRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-customAccent text-customAccent">Expertise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">My <span>Skills</span></h2>
          <p className="text-customText-body max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and personal attributes that define my professional profile.
          </p>
        </div>

        <Tabs defaultValue="technical" className="max-w-7xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="animate-fade-in tech-skill-card bg-customDark-background border-gray-800 hover:border-customAccent/50 transition-all duration-300" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{skill.icon}</div>
                      <div className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(skill.status)}`}>
                        {skill.status}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">{skill.name}</h3>
                    
                    <div className="mb-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-customText-body">Progress</span>
                        <span className="text-sm font-medium text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full skill-progress`}
                          style={{ 
                            width: '0%',
                            transitionDelay: `${0.1 * (index + 1)}s`
                          }}
                          data-width={`${skill.level}%`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
