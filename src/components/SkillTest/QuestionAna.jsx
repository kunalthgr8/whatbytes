import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const QuestionAnalysis = () => {
  // Total number of questions
  const totalQuestions = 15;

  // Data for correct and incorrect answers
  const data = [
    {
      name: 'Correct',
      value: 10, // Number of correct answers
      fill: '#4caf50', // Green color for correct answers
    },
    {
      name: 'Incorrect',
      value: 5, // Number of incorrect answers (totalQuestions - correct = 5)
      fill: '#f44336', // Red color for incorrect answers
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Question Analysis</h3>
      <p className="mb-4">You scored 10 correct out of 15 questions.</p>

      {/* Radial Bar Chart rendering */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            barSize={20}
            data={data}
            startAngle={90}
            endAngle={-270} // Makes the chart a full circle
          >
            {/* Polar Angle Axis is for controlling the angle of the bars */}
            <PolarAngleAxis
              type="number"
              domain={[0, totalQuestions]} // Domain is set from 0 to total number of questions
              angleAxisId={0}
              tick={false} // No need for ticks in this radial chart
            />
            <RadialBar
              minAngle={15}
              clockWise
              dataKey="value"
              cornerRadius={10} // Adds rounded edges to the bars
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
