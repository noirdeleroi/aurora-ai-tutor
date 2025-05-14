
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Star } from 'lucide-react';

const RecommendedResources = () => {
  const resources = [
    {
      id: 1,
      title: "World Cup Vocabulary Builder",
      type: "Vocabulary",
      level: "Intermediate",
      description: "Learn football terminology while improving vocabulary",
      topic: "Football",
      rating: 4.8,
      aiGenerated: true
    },
    {
      id: 2,
      title: "Famous Football Matches Discussion",
      type: "Speaking",
      level: "Intermediate",
      description: "Practice speaking through discussions about historic football matches",
      topic: "Football",
      rating: 4.5,
      aiGenerated: false
    },
    {
      id: 3,
      title: "The Science of Football",
      type: "Reading",
      level: "Advanced",
      description: "Scientific reading about physics in football with TOEFL-style questions",
      topic: "Football, Science",
      rating: 4.6,
      aiGenerated: true
    }
  ];

  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Recommended Resources</h2>
          <p className="text-sm text-muted-foreground">Based on student interests</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          View All Resources
        </Button>
      </div>
      
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg border border-border overflow-hidden transition-all hover:shadow-md">
              <div className="h-32 bg-gradient-to-r from-aurora-blue/90 to-aurora-bright-blue/90 p-4 relative">
                {resource.aiGenerated && (
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 text-[10px] font-medium text-aurora-blue">
                    AI Generated
                  </div>
                )}
                <FileText className="h-8 w-8 text-white" />
                <h3 className="text-white font-medium mt-2">{resource.title}</h3>
                <div className="mt-1 flex items-center space-x-2">
                  <span className="bg-white/20 text-white text-[10px] rounded-full px-2 py-0.5">{resource.type}</span>
                  <span className="bg-white/20 text-white text-[10px] rounded-full px-2 py-0.5">{resource.level}</span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground">{resource.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs ml-1 font-medium">{resource.rating}</span>
                  </div>
                  <span className="text-[10px] bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                    {resource.topic}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Button size="sm" variant="default" className="text-xs w-full">
                    Assign
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedResources;
