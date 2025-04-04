
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institution: "XYZ University of Technology",
      duration: "2020 - 2024 (Expected)",
      description: "Focusing on advanced algorithms, machine learning, and web development. Maintaining a GPA of 3.8/4.0.",
      achievements: ["Dean's List 2021-2022", "Best Project Award", "Tech Fest Winner"]
    },
    {
      id: 2,
      degree: "Intermediate Education",
      specialization: "Science and Mathematics",
      institution: "ABC Junior College",
      duration: "2018 - 2020",
      description: "Completed intermediate education with a focus on science and mathematics, achieving 92% in board examinations.",
      achievements: ["School Topper", "Science Olympiad Finalist"]
    },
    {
      id: 3,
      degree: "High School",
      specialization: "General Education",
      institution: "PQR School",
      duration: "2008 - 2018",
      description: "Completed primary and secondary education with distinction in science and mathematics.",
      achievements: ["Perfect Attendance Award", "Science Fair Winner"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">My Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Background</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with a strong foundation in computer science and technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div 
              key={item.id} 
              className="timeline-item opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{item.specialization}</p>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <GraduationCap size={18} className="text-primary mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{item.institution}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary">{achievement}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
