
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Clock, Star, Trophy } from 'lucide-react';

const GamificationPanel = () => {
  const leaderboardData = [
    { 
      id: 1, 
      name: "Frank Wang", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank", 
      hours: 12.5, 
      improvement: 18,
      streak: 5
    },
    { 
      id: 2, 
      name: "Lin Mei", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lin", 
      hours: 14.2, 
      improvement: 23,
      streak: 7
    },
    { 
      id: 3, 
      name: "Zhang Wei", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang", 
      hours: 10.8, 
      improvement: 15,
      streak: 4
    },
    { 
      id: 4, 
      name: "Liu Yang", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Liu", 
      hours: 9.5, 
      improvement: 12,
      streak: 3
    },
    { 
      id: 5, 
      name: "Chen Jie", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen", 
      hours: 8.7, 
      improvement: 10,
      streak: 2
    }
  ];
  
  const badges = [
    { id: 1, name: "Perfect Attendance", icon: <Clock className="h-4 w-4" />, color: "bg-blue-500" },
    { id: 2, name: "Vocabulary Master", icon: <Star className="h-4 w-4" />, color: "bg-purple-500" },
    { id: 3, name: "Grammar Expert", icon: <Trophy className="h-4 w-4" />, color: "bg-yellow-500" },
    { id: 4, name: "Speaking Champion", icon: <Award className="h-4 w-4" />, color: "bg-green-500" }
  ];

  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Student Engagement</h2>
          <p className="text-sm text-muted-foreground">Gamification and motivation</p>
        </div>
      </div>
      
      <CardContent className="p-0">
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="challenges">Weekly Challenges</TabsTrigger>
          </TabsList>
          
          <TabsContent value="leaderboard">
            <div className="space-y-3">
              {leaderboardData.map((student, index) => (
                <div 
                  key={student.id} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    index === 0 ? 'bg-yellow-50 border border-yellow-200' : 'bg-white border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                      index === 0 ? 'bg-yellow-500' : 'bg-gray-200'
                    } text-white text-xs font-medium`}>
                      {index + 1}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{student.name}</span>
                    <div className="flex items-center ml-2">
                      <div className="text-xs font-medium px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                        {student.streak} day streak
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Practice</p>
                      <p className="text-sm font-medium">{student.hours} hrs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Improvement</p>
                      <p className="text-sm font-medium text-green-500">+{student.improvement}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="grid grid-cols-2 gap-4">
              {badges.map(badge => (
                <div key={badge.id} className="flex items-center space-x-3 p-3 bg-white border border-border rounded-lg">
                  <div className={`${badge.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
                    {badge.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{badge.name}</p>
                    <div className="mt-1 h-1.5 w-24 bg-gray-200 rounded-full">
                      <div className={`h-full rounded-full ${badge.color}`} style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">7/10 completed</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="challenges">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-aurora-blue to-aurora-bright-blue rounded-lg p-4 text-white">
                <h3 className="font-medium">This Week's Challenge</h3>
                <p className="text-sm mt-1">Complete 3 speaking practice sessions with at least 90% accuracy</p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="h-2 flex-1 bg-white/30 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: '66%' }}></div>
                  </div>
                  <span className="text-xs">2/3</span>
                </div>
                <p className="text-xs mt-2 text-blue-100">Reward: +50 XP and "Fluency" badge</p>
              </div>
              
              <div className="bg-white border border-border rounded-lg p-4">
                <h3 className="font-medium">Upcoming Challenges</h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm flex items-center justify-between">
                    <span>Reading comprehension marathon</span>
                    <span className="text-xs text-muted-foreground">Starts in 5 days</span>
                  </li>
                  <li className="text-sm flex items-center justify-between">
                    <span>Grammar tournament</span>
                    <span className="text-xs text-muted-foreground">Starts in 12 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GamificationPanel;
