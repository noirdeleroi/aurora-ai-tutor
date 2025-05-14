
import React from 'react';
import { Clock, FileText, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

const TodaySchedule = () => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Today's Schedule</h2>
          <p className="text-sm text-muted-foreground">Wednesday, May 14, 2025</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          View Full Schedule
        </Button>
      </div>
      
      <CardContent className="p-0">
        <div className="bg-aurora-light-gray rounded-lg p-4 border border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-aurora-blue" />
              <span className="font-medium">Upcoming Class</span>
              <span className="text-sm font-semibold text-aurora-blue">15:00 - 16:00</span>
            </div>
            <Button variant="default" size="sm" className="bg-aurora-blue hover:bg-aurora-bright-blue">
              Join Now
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" alt="Student Avatar" />
              <AvatarFallback>FW</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-semibold">Frank Wang</h3>
                <span className="badge bg-blue-100 text-blue-700">Intermediate</span>
                <span className="badge bg-yellow-100 text-yellow-700">TOEFL Prep</span>
              </div>
              
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-white rounded p-2 border border-border">
                  <p className="text-xs font-medium text-muted-foreground">Focus Areas</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="badge bg-skill-listening/20 text-skill-listening">Listening</span>
                    <span className="badge bg-skill-speaking/20 text-skill-speaking">Speaking</span>
                  </div>
                </div>
                <div className="bg-white rounded p-2 border border-border">
                  <p className="text-xs font-medium text-muted-foreground">Progress</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full">
                      <div className="h-full bg-aurora-blue rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <span className="text-xs font-medium">67%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center justify-between mt-3 gap-2">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Lesson Materials</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs h-8">Student Notes</Button>
                  <Button variant="ghost" size="sm" className="text-xs h-8">Lesson Plan</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8">Resources</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaySchedule;
