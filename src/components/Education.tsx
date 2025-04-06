
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Computer Science",
      specialization: "",
      institution: "NxtWave Institute of Advanced Technologies (NIAT)",
      duration: "2024 - 2028",
      description: "Currently studying Computer Science at NxtWave. Learning full stack development and other advanced technologies.",
      achievements: []
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      specialization: "",
      institution: "BITS Pilani Hyderabad",
      duration: "2024 - 2027",
      description: "Pursuing Bachelor of Science degree at BITS Pilani Hyderabad campus. Achieved 7 CGPA/10 in 1st semester.",
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
      description: "Completed primary and secondary education with 70% in 10th grade.",
      achievements: []
    }
  ];

  return (
    <section id="education" className="vibrant-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 border-vibrant-red text-vibrant-orange font-medium">My Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">Educational <span>Background</span></h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
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
              <Card className="overflow-hidden custom-card border-none">
                <CardContent className="p-0">
                  <div className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-vibrant-red/20 to-transparent rounded-bl-full"></div>
                    
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold gradient-text">{item.degree}</h3>
                        <p className="text-white font-medium">{item.specialization}</p>
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar size={16} className="mr-1 text-vibrant-orange" />
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <GraduationCap size={18} className="text-vibrant-red mr-2" />
                      <span className="text-white">{item.institution}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    {item.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary" className="bg-black/50 text-gray-200">{achievement}</Badge>
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
