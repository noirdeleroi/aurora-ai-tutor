
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Book, Calendar, CheckCircle, Clock, FileText, Home, MessageSquare, Settings, Star, User } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const StudentDashboard = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
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
              {mobileMenuOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              }
            </Button>
          )}
          
          <nav className={`${isMobile ? (mobileMenuOpen ? 'flex absolute top-16 left-0 right-0 bg-white flex-col border-b border-border z-20 px-4 py-2 shadow-md' : 'hidden') : 'hidden md:flex'} md:space-x-1`}>
            <a href="#" className="nav-link active py-2">Dashboard</a>
            <a href="#" className="nav-link py-2">My Lessons</a>
            <a href="#" className="nav-link py-2">Practice</a>
            <a href="#" className="nav-link py-2">Resources</a>
            <a href="#" className="nav-link py-2">Progress</a>
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
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" alt="Student Avatar" />
              <AvatarFallback>FW</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar - Only on desktop */}
        <aside className="hidden md:block">
          <div className="w-64 bg-white border-r border-border h-full p-4">
            <div className="flex flex-col items-center justify-center py-6 border-b border-border">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" alt="Student Avatar" />
                <AvatarFallback>FW</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-medium">Frank Wang</h3>
              <p className="text-sm text-muted-foreground">Intermediate Level</p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-muted-foreground mb-2 px-2">STUDY PROGRESS</h4>
              <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-sm font-medium">This Week</span>
                <span className="text-sm font-medium">8.5/10 hrs</span>
              </div>
              <Progress value={85} className="h-2 mb-4" />
            </div>
            
            <nav className="mt-6 space-y-1">
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <Book className="h-4 w-4" />
                <span>My Lessons</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <Star className="h-4 w-4" />
                <span>Practice</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>Messages</span>
                <span className="ml-auto bg-red-500 text-white text-xs font-medium py-0.5 px-1.5 rounded-full">2</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <Calendar className="h-4 w-4" />
                <span>Schedule</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <FileText className="h-4 w-4" />
                <span>Resources</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-sm px-3 py-2 rounded-md text-foreground/80 hover:bg-accent hover:text-foreground">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </a>
            </nav>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <div className="container mx-auto">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-aurora-blue to-aurora-bright-blue rounded-lg p-6 mb-6 text-white">
              <h1 className="text-2xl font-bold mb-2">Welcome back, Frank!</h1>
              <p className="mb-4">Your next lesson is in 2 hours. Continue with your study plan to keep improving.</p>
              <Button variant="outline" className="bg-white/20 hover:bg-white/30 border-white text-white">
                Resume Learning
              </Button>
            </div>
            
            {/* Progress & Next Class */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Next Class */}
              <Card>
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Next Class</h2>
                    <Button variant="outline" size="sm">Full Schedule</Button>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-aurora-blue mr-2" />
                        <span className="font-medium">Today, 15:00 - 16:00</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Upcoming</span>
                    </div>
                    <h3 className="font-medium">Advanced Conversation Practice</h3>
                    <p className="text-sm text-gray-600 mb-3">With Ms. Jennifer Davis</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="default" className="bg-aurora-blue hover:bg-blue-700">
                          Join Class
                        </Button>
                        <Button size="sm" variant="outline">
                          Materials
                        </Button>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://api.dicebear.com/7.x/lorelei/svg?seed=teacher" alt="Teacher Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="font-medium text-gray-600">Tomorrow, 14:00 - 15:00</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">Scheduled</span>
                    </div>
                    <h3 className="font-medium">TOEFL Reading Strategies</h3>
                    <p className="text-sm text-gray-600">With Mr. Robert Chen</p>
                  </div>
                </div>
              </Card>
              
              {/* Learning Progress */}
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">My Learning Progress</h2>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Speaking</span>
                        <span className="text-sm text-aurora-blue font-medium">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Listening</span>
                        <span className="text-sm text-aurora-blue font-medium">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Reading</span>
                        <span className="text-sm text-aurora-blue font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Writing</span>
                        <span className="text-sm text-aurora-blue font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Grammar</span>
                        <span className="text-sm text-aurora-blue font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Vocabulary</span>
                        <span className="text-sm text-aurora-blue font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Current TOEFL Score Prediction</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-2xl font-bold text-aurora-blue">89</span>
                          <span className="text-sm text-gray-500 ml-2">/ 120</span>
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">+4 since last month</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-sm text-gray-500">Target</span>
                        <div className="text-xl font-bold">100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Study Materials & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Recommended Study Materials */}
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Recommended for You</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex border border-border rounded-lg overflow-hidden">
                      <div className="bg-aurora-blue text-white p-4 flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">World Cup Vocabulary</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Football</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Learn football terminology while improving vocabulary</p>
                        <div className="flex items-center mt-2">
                          <Button size="sm" variant="default" className="text-xs mr-2">Start</Button>
                          <span className="text-xs text-gray-500">15 mins</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex border border-border rounded-lg overflow-hidden">
                      <div className="bg-green-500 text-white p-4 flex items-center justify-center">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Speaking Practice: Sports</h3>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">AI Tutor</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Practice speaking about sports with our AI tutor</p>
                        <div className="flex items-center mt-2">
                          <Button size="sm" variant="default" className="text-xs mr-2">Start</Button>
                          <span className="text-xs text-gray-500">20 mins</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Achievements */}
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Your Achievements</h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-border rounded-lg p-4 text-center">
                      <div className="bg-yellow-100 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="h-7 w-7 text-yellow-500" />
                      </div>
                      <h3 className="font-medium">5 Day Streak</h3>
                      <p className="text-xs text-gray-500 mt-1">Keep it up!</p>
                    </div>
                    
                    <div className="bg-white border border-border rounded-lg p-4 text-center">
                      <div className="bg-green-100 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-7 w-7 text-green-500" />
                      </div>
                      <h3 className="font-medium">Vocabulary Master</h3>
                      <p className="text-xs text-gray-500 mt-1">Completed</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <h3 className="font-medium">Weekly Challenge</h3>
                    <p className="text-sm text-gray-600 mt-1">Complete 3 speaking practice sessions</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="h-2 flex-1 bg-blue-100 rounded-full">
                        <div className="h-full bg-aurora-blue rounded-full" style={{ width: '66%' }}></div>
                      </div>
                      <span className="text-xs">2/3</span>
                    </div>
                    <p className="text-xs mt-2 text-blue-700">Reward: +50 XP and "Fluency" badge</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Recent Activity */}
            <Card className="mb-6">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Recent Activity</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Completed Reading Exercise</h3>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-gray-500">Score: 85% - Great job on inference questions!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Speaking Session with AI Tutor</h3>
                        <span className="text-xs text-gray-500">Yesterday</span>
                      </div>
                      <p className="text-sm text-gray-500">Practiced describing your favorite sports for 15 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Book className="h-4 w-4 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Grammar Lesson</h3>
                        <span className="text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-sm text-gray-500">Conditional Sentences: Types 1 & 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
