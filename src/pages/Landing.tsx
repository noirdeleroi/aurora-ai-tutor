
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-bold text-aurora-blue">Aurora <span className="text-primary">AI</span></h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Welcome to Aurora AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            The intelligent English language tutoring platform powered by AI
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Aurora AI</h2>
            <p className="text-gray-600 mb-6">
              Aurora AI is a comprehensive educational platform designed to help students master 
              English language skills through personalized learning journeys. Our AI-powered system 
              adapts to individual learning styles and needs, making language acquisition more 
              effective and engaging.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-aurora-blue mb-2">Personalized Learning</h3>
                <p className="text-sm text-gray-600">
                  Adaptive lessons tailored to each student's strengths and weaknesses
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-aurora-blue mb-2">Real-time Feedback</h3>
                <p className="text-sm text-gray-600">
                  Instant corrections and suggestions to improve pronunciation and grammar
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-aurora-blue mb-2">Progress Tracking</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive analytics to monitor improvement and identify areas for growth
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login to Your Dashboard</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 max-w-xs mx-auto">
              <div className="mb-6 bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-aurora-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Students</h3>
              <p className="text-gray-600 mb-6">
                Access your personalized learning path, practice exercises, and track your progress.
              </p>
              <Button 
                onClick={() => navigate('/student-dashboard')}
                className="w-full bg-aurora-blue hover:bg-blue-700 text-white"
              >
                Login as Student
              </Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex-1 max-w-xs mx-auto">
              <div className="mb-6 bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-aurora-blue" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Teachers</h3>
              <p className="text-gray-600 mb-6">
                Manage your classes, monitor student progress, and create personalized lesson plans.
              </p>
              <Button 
                onClick={() => navigate('/teacher-dashboard')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Login as Teacher
              </Button>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 Aurora AI. All rights reserved.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
