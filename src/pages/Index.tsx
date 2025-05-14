
import React from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import TodaySchedule from '../components/dashboard/TodaySchedule';
import StudentProgress from '../components/dashboard/StudentProgress';
import RecommendedResources from '../components/dashboard/RecommendedResources';
import GamificationPanel from '../components/dashboard/GamificationPanel';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <aside className="hidden md:block">
          <Sidebar />
        </aside>
        
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <TodaySchedule />
              <GamificationPanel />
            </div>
            
            <div className="mb-4 md:mb-6">
              <StudentProgress />
            </div>
            
            <div>
              <RecommendedResources />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
