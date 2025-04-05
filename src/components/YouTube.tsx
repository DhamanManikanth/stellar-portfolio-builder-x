
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Youtube, PlayCircle, ThumbsUp, Eye } from 'lucide-react';

const YouTube = () => {
  // Featured YouTube video with updated stats
  const featuredVideo = {
    id: "CLk6hcX_z30", // College experience video
    title: "My Experience in College",
    views: "10K+",
    likes: "100+",
    date: "2023"
  };
  
  const otherVideos = [
    {
      id: "217FJOJt8So",
      title: "College Hackathon Experience",
      views: "500+",
      date: "2023"
    },
    {
      id: "h-wM8PX4agA",
      title: "Village Exhibition Coverage",
      views: "750+",
      date: "2023"
    },
    {
      id: "O9IhcgqMhB8",
      title: "Campus Tour",
      views: "200+",
      date: "2022"
    }
  ];

  // Channel stats
  const channelStats = {
    subscribers: "500+",
    videos: "40+",
    views: "75K+"
  };

  return (
    <section id="youtube" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2">My Channel</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-card">YouTube Content</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I share my college experiences, campus life, and educational vlogs on my YouTube channel "Dhaman Explores".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Featured Video */}
          <div className="md:col-span-2 animate-fade-in">
            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
              <PlayCircle size={20} className="text-red-600 mr-2" />
              Featured Video
            </h3>
            <Card className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800">
              <CardContent className="p-0 overflow-hidden">
                <div className="relative aspect-video">
                  <img 
                    src={`https://img.youtube.com/vi/${featuredVideo.id}/maxresdefault.jpg`} 
                    alt={featuredVideo.title} 
                    className="w-full h-full object-cover"
                  />
                  <a 
                    href={`https://www.youtube.com/watch?v=${featuredVideo.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle size={36} className="text-white" />
                    </div>
                  </a>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-3 text-white">{featuredVideo.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Eye size={16} className="mr-1" />
                      {featuredVideo.views} views
                    </div>
                    <div className="flex items-center text-gray-400">
                      <ThumbsUp size={16} className="mr-1" />
                      {featuredVideo.likes} likes
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    asChild
                    className="group border-red-600 text-white hover:bg-red-600/20"
                  >
                    <a href={`https://www.youtube.com/watch?v=${featuredVideo.id}`} target="_blank" rel="noopener noreferrer">
                      Watch Video 
                      <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Channel Info & More Videos */}
          <div className="flex flex-col gap-8">
            {/* Channel Info */}
            <Card className="animate-fade-in stagger-1 bg-gradient-to-br from-gray-900 to-black border border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-5">
                  <Youtube size={24} className="text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-white">Dhaman Explores</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{channelStats.subscribers}</p>
                    <p className="text-gray-400 text-sm">Subscribers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{channelStats.videos}</p>
                    <p className="text-gray-400 text-sm">Videos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">{channelStats.views}</p>
                    <p className="text-gray-400 text-sm">Views</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <a href="https://yt.openinapp.co/28ho8" target="_blank" rel="noopener noreferrer">
                    <Youtube size={20} className="mr-2" /> Subscribe
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* More Videos */}
            <div className="animate-fade-in stagger-2">
              <h3 className="text-xl font-bold mb-4 text-white">More Videos</h3>
              <div className="space-y-4">
                {otherVideos.map((video, index) => (
                  <a 
                    key={index}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-3 group"
                  >
                    <div className="flex-shrink-0 w-24 h-16 relative">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                        alt={video.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all">
                        <PlayCircle size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm group-hover:text-red-400 transition-colors line-clamp-2 text-white">
                        {video.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">
                        {video.views} views • {video.date}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
