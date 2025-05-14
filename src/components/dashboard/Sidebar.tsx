
import React from 'react';
import { Award, Calendar, Home, MessageSquare, Star, User, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-border h-full p-4">
      <div className="flex flex-col items-center justify-center py-6 border-b border-border">
        <Avatar className="h-20 w-20 mb-4">
          <AvatarImage src="https://api.dicebear.com/7.x/lorelei/svg?seed=teacher" alt="Teacher Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-medium">Jennifer Davis</h3>
        <p className="text-sm text-muted-foreground">Senior English Tutor</p>
      </div>
      
      <div className="mt-6">
        <h4 className="text-xs font-semibold text-muted-foreground mb-2 px-2">TEACHING HOURS</h4>
        <div className="flex items-center justify-between mb-2 px-2">
          <span className="text-sm font-medium">This Week</span>
          <span className="text-sm font-medium">12/20 hrs</span>
        </div>
        <Progress value={60} className="h-2 mb-4" />
      </div>
      
      <nav className="mt-6 space-y-1">
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
          <Home className="h-4 w-4" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <Users className="h-4 w-4" />
          <span>Students</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <User className="h-4 w-4" />
          <span>Classes</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <MessageSquare className="h-4 w-4" />
          <span>Messages</span>
          <span className="ml-auto bg-red-500 text-white text-xs font-medium py-0.5 px-1.5 rounded-full">3</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <Calendar className="h-4 w-4" />
          <span>Schedule</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <Star className="h-4 w-4" />
          <span>Resources</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
          <Award className="h-4 w-4" />
          <span>Achievements</span>
        </a>
      </nav>
      
      <div className="mt-auto pt-6">
        <div className="bg-aurora-light-blue/10 p-3 rounded-lg">
          <p className="text-sm font-medium text-aurora-blue">Pro Tip</p>
          <p className="text-xs text-muted-foreground mt-1">Use our new AI tools to create personalized lesson plans based on student interests.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
