
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-aurora-blue">Aurora <span className="text-primary">AI</span></h1>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          <a href="#" className="nav-link active">Dashboard</a>
          <a href="#" className="nav-link">Students</a>
          <a href="#" className="nav-link">Classes</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Reports</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/lorelei/svg?seed=teacher" alt="Teacher Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
