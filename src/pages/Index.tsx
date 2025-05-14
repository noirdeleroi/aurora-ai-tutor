
import React from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import TodaySchedule from '../components/dashboard/TodaySchedule';
import StudentProgress from '../components/dashboard/StudentProgress';
import RecommendedResources from '../components/dashboard/RecommendedResources';
import GamificationPanel from '../components/dashboard/GamificationPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <aside className="hidden md:block">
          <Sidebar />
        </aside>
        
        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <TodaySchedule />
              <GamificationPanel />
            </div>
            
            <div className="mb-6">
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
