
import React from 'react';

interface Skill {
  name: string;
  value: number;
  color: string;
}

interface SkillHexagonProps {
  skills: Skill[];
  size?: number;
}

const SkillHexagon: React.FC<SkillHexagonProps> = ({ skills, size = 200 }) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;
  
  // Calculate points on a hexagon for each skill
  const calculatePoint = (index: number, value: number) => {
    const angle = (Math.PI / 3) * index - Math.PI / 2;
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    return { x, y };
  };
  
  // Generate the path for the skill polygon
  const generatePath = () => {
    return skills.map((skill, index) => {
      const point = calculatePoint(index, skill.value / 100);
      return (index === 0 ? 'M' : 'L') + `${point.x},${point.y}`;
    }).join(' ') + 'Z';
  };
  
  // Generate grid lines
  const generateGridLines = () => {
    const lines = [];
    for (let i = 1; i <= 5; i++) {
      const lineValue = i / 5;
      const points = [];
      
      for (let j = 0; j < 6; j++) {
        points.push(calculatePoint(j, lineValue));
      }
      
      const path = points.map((point, idx) => 
        (idx === 0 ? 'M' : 'L') + `${point.x},${point.y}`
      ).join(' ') + 'Z';
      
      lines.push(
        <path 
          key={`grid-${i}`}
          d={path}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          strokeDasharray={i < 5 ? "2,2" : ""}
        />
      );
    }
    return lines;
  };
  
  // Generate axes
  const generateAxes = () => {
    return skills.map((_, index) => {
      const point = calculatePoint(index, 1);
      return (
        <line
          key={`axis-${index}`}
          x1={centerX}
          y1={centerY}
          x2={point.x}
          y2={point.y}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      );
    });
  };
  
  // Generate skill labels
  const generateLabels = () => {
    return skills.map((skill, index) => {
      const point = calculatePoint(index, 1.15);
      return (
        <g key={`label-${index}`}>
          <text
            x={point.x}
            y={point.y}
            fontSize="10"
            fill={skill.color}
            fontWeight="500"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {skill.name}
          </text>
        </g>
      );
    });
  };
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {generateGridLines()}
      {generateAxes()}
      <path
        d={generatePath()}
        fill="rgba(30, 174, 219, 0.2)"
        stroke="#1EAEDB"
        strokeWidth="2"
      />
      {skills.map((skill, index) => {
        const point = calculatePoint(index, skill.value / 100);
        return (
          <circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={skill.color}
          />
        );
      })}
      {generateLabels()}
    </svg>
  );
};

export default SkillHexagon;
