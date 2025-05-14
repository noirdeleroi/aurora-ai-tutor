
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillHexagon from '../ui/SkillHexagon';
import ProgressChart from '../ui/ProgressChart';

const skillData = [
  { name: 'Listening', value: 70, color: '#4B89DC' },
  { name: 'Grammar', value: 65, color: '#3498DB' },
  { name: 'Vocabulary', value: 80, color: '#1ABC9C' },
  { name: 'Reading', value: 75, color: '#2ECC71' },
  { name: 'Speaking', value: 60, color: '#F1C40F' },
  { name: 'Pronunciation', value: 55, color: '#E67E22' },
];

const progressData = [
  { label: 'Listening', currentWeek: 70, previousWeek: 65 },
  { label: 'Grammar', currentWeek: 65, previousWeek: 60 },
  { label: 'Vocabulary', currentWeek: 80, previousWeek: 70 },
  { label: 'Reading', currentWeek: 75, previousWeek: 72 },
  { label: 'Speaking', currentWeek: 60, previousWeek: 55 },
];

const StudentProgress = () => {
  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold">Student Progress Analytics</h2>
          <p className="text-sm text-muted-foreground">Frank Wang · Last 4 weeks</p>
        </div>
      </div>
      
      <CardContent className="p-0">
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="skills">Skills Breakdown</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Progress</TabsTrigger>
            <TabsTrigger value="toefl">TOEFL Prediction</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="space-y-4">
            <div className="flex justify-center">
              <SkillHexagon skills={skillData} />
            </div>
          </TabsContent>
          
          <TabsContent value="weekly">
            <div className="p-4">
              <ProgressChart data={progressData} />
            </div>
          </TabsContent>
          
          <TabsContent value="toefl">
            <div className="p-6 flex flex-col items-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-aurora-blue">89</h3>
                  <p className="text-sm text-muted-foreground">Current</p>
                </div>
                <div className="text-center text-muted-foreground">/</div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-400">120</h3>
                  <p className="text-sm text-muted-foreground">Maximum</p>
                </div>
                <div className="text-center text-muted-foreground">/</div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-500">100</h3>
                  <p className="text-sm text-muted-foreground">Target</p>
                </div>
              </div>
              
              <div className="w-full">
                <div className="h-4 w-full bg-gray-100 rounded-full">
                  <div className="h-full bg-aurora-blue rounded-full relative" style={{ width: '74%' }}>
                    <div className="absolute -right-1 top-0 h-full w-1 bg-green-500 rounded-full"
                         style={{ left: '100%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-muted-foreground">0</span>
                  <span className="text-xs text-green-500 font-medium">Target: 100</span>
                  <span className="text-xs text-muted-foreground">120</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 w-full mt-8">
                <div className="bg-white rounded p-4 border border-border">
                  <h4 className="text-sm font-medium mb-2">Section Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Reading</span>
                      <span className="text-xs font-medium">22/30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Listening</span>
                      <span className="text-xs font-medium">21/30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Speaking</span>
                      <span className="text-xs font-medium">23/30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Writing</span>
                      <span className="text-xs font-medium">23/30</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-4 border border-border">
                  <h4 className="text-sm font-medium mb-2">Improvement Areas</h4>
                  <ul className="text-xs space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span>Listening: Note-taking strategies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span>Speaking: Fluency and pronunciation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      <span>Reading: Inference questions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>Writing: Good essay structure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StudentProgress;
