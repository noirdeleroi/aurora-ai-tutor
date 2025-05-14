
import React, { useState } from 'react';
import { Bell, Settings, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-aurora-blue">Aurora <span className="text-primary">AI</span></h1>
        </div>
        
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
        
        <nav className={`${isMobile ? (mobileMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-white flex-col border-b border-border z-20 px-4 py-2 shadow-md' : 'hidden') : 'hidden md:flex'} md:space-x-1`}>
          <a href="#" className="nav-link active py-2">Dashboard</a>
          <a href="#" className="nav-link py-2">Students</a>
          <a href="#" className="nav-link py-2">Classes</a>
          <a href="#" className="nav-link py-2">Resources</a>
          <a href="#" className="nav-link py-2">Reports</a>
          <a href="#" className="nav-link py-2">Settings</a>
        </nav>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          {!isMobile && (
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          )}
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
