
import React from 'react';

interface ProgressData {
  label: string;
  currentWeek: number;
  previousWeek: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const maxValue = Math.max(
    ...data.map(item => Math.max(item.currentWeek, item.previousWeek)),
    80 // Minimum max value to avoid tiny bars
  );
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-aurora-blue"></div>
            <span className="text-xs">Current Week</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <span className="text-xs">Previous Week</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">{item.label}</span>
              <span className="text-xs font-medium">{item.currentWeek}/100</span>
            </div>
            <div className="h-6 w-full bg-gray-100 rounded-lg relative">
              {/* Previous week bar */}
              <div 
                className="absolute top-0 left-0 h-full bg-gray-300 rounded-lg"
                style={{ width: `${(item.previousWeek / maxValue) * 100}%` }}
              ></div>
              
              {/* Current week bar */}
              <div 
                className="absolute top-0 left-0 h-full bg-aurora-blue rounded-lg z-10"
                style={{ width: `${(item.currentWeek / maxValue) * 100}%` }}
              ></div>
              
              {/* Change indicator */}
              {item.currentWeek > item.previousWeek && (
                <div 
                  className="absolute -top-2 text-xs text-green-500 font-medium"
                  style={{ left: `${(item.currentWeek / maxValue) * 100}%` }}
                >
                  +{item.currentWeek - item.previousWeek}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;
