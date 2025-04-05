
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Linkedin, Github, Twitter, Youtube, Instagram,
  Users, Briefcase, GraduationCap, Award, ArrowUpRight 
} from 'lucide-react';

const SocialMedia = () => {
  const linkedInProfile = {
    name: "Dhaman Manikanth",
    title: "Student & Web Developer",
    connections: "500+",
    views: "300+",
    experience: [
      {
        role: "Web Development Frontend",
        company: "",
        duration: ""
      }
    ],
    education: {
      degree: "BTech",
      specialization: "Computer Science Engineering",
      institution: "NxtWave Institute of Advanced Technologies",
      duration: "2024 - 2028"
    }
  };

  const socialProfiles = [
    {
      platform: "LinkedIn",
      handle: "@dhamanmanikanth",
      link: "https://linkedin.openinapp.co/wf5sr",
      icon: Linkedin,
      color: "bg-blue-800/30 text-blue-400"
    },
    {
      platform: "GitHub",
      handle: "@DhamanManikanth",
      link: "https://github.com/DhamanManikanth",
      icon: Github,
      color: "bg-gray-800/30 text-gray-300"
    },
    {
      platform: "Twitter",
      handle: "@dhamanmanikanth",
      link: "https://twtr.openinapp.co/1hm2v",
      icon: Twitter,
      color: "bg-sky-800/30 text-sky-400"
    },
    {
      platform: "YouTube",
      handle: "Dhaman Explores",
      link: "https://yt.openinapp.co/28ho8",
      icon: Youtube,
      color: "bg-red-800/30 text-red-500"
    },
    {
      platform: "Instagram",
      handle: "@dhamanmanikanth",
      link: "https://insta.openinapp.co/f4kag",
      icon: Instagram,
      color: "bg-pink-800/30 text-pink-400"
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">Connect</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-card">Social Media Presence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with me on social platforms and explore my professional journey and content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LinkedIn Profile Card */}
          <Card className="animate-fade-in bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Linkedin size={24} className="text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-white">LinkedIn Highlights</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white">{linkedInProfile.name}</h4>
                <p className="text-gray-400">{linkedInProfile.title}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Users size={18} className="text-blue-500 mr-2" />
                  <div>
                    <p className="font-bold text-white">{linkedInProfile.connections}</p>
                    <p className="text-gray-400 text-sm">Connections</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award size={18} className="text-blue-500 mr-2" />
                  <div>
                    <p className="font-bold text-white">{linkedInProfile.views}</p>
                    <p className="text-gray-400 text-sm">Profile Views</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <Briefcase size={18} className="text-blue-500 mr-2" />
                  <h5 className="font-bold text-white">Experience</h5>
                </div>
                <div className="space-y-3 pl-7">
                  {linkedInProfile.experience.map((exp, index) => (
                    <div key={index}>
                      <p className="font-medium text-white">{exp.role}</p>
                      {exp.company && <p className="text-gray-400 text-sm">{exp.company} • {exp.duration}</p>}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <GraduationCap size={18} className="text-blue-500 mr-2" />
                  <h5 className="font-bold text-white">Education</h5>
                </div>
                <div className="pl-7">
                  <p className="font-medium text-white">{linkedInProfile.education.degree} in {linkedInProfile.education.specialization}</p>
                  <p className="text-gray-400 text-sm">
                    {linkedInProfile.education.institution} • {linkedInProfile.education.duration}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Profiles */}
          <div className="space-y-4 animate-fade-in stagger-1">
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
            
            {socialProfiles.map((profile, index) => (
              <a 
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-gradient-to-br from-gray-900 to-black border border-gray-800">
                  <CardContent className="p-4 flex items-center">
                    <div className={`w-12 h-12 rounded-full ${profile.color} flex items-center justify-center mr-4`}>
                      <profile.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{profile.platform}</h4>
                      <p className="text-gray-400 text-sm">{profile.handle}</p>
                    </div>
                    <div className="ml-auto">
                      <ArrowUpRight size={18} className="text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
            
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Let's connect and collaborate on exciting projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
