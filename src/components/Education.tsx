
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BTech",
      specialization: "Computer Science Engineering",
      institution: "NxtWave Institute of Advanced Technologies (NIAT)",
      duration: "2024 - 2028",
      description: "Currently pursuing BTech in Computer Science. Studying full stack development in progress.",
      achievements: []
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      specialization: "",
      institution: "",
      duration: "2024 - 2027",
      description: "Achieved 7 CGPA/10 in 1st semester.",
      achievements: []
    },
    {
      id: 3,
      degree: "Intermediate Education",
      specialization: "Mathematics, Physics, and Chemistry",
      institution: "FIITJEE Junior College",
      duration: "2022 - 2024",
      description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry, achieving 84% in board examinations.",
      achievements: []
    },
    {
      id: 4,
      degree: "High School",
      specialization: "General Education",
      institution: "Nirmala CBSE High School",
      duration: "1st - 10th Class",
      description: "Completed primary and secondary education.",
      achievements: []
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">My Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Background</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with a foundation in computer science and technical skills.
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
                    
                    {item.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">{achievement}</Badge>
                        ))}
                      </div>
                    )}
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
