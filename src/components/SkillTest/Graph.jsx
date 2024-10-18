import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const QuestionAnalysis = () => {
  // Example data for the chart
  const data = [
    { percentile: 10, score: 20 },
    { percentile: 25, score: 50 },
    { percentile: 50, score: 72 },
    { percentile: 75, score: 90 },
    { percentile: 90, score: 100 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Question Analysis</h3>
      <p className="mb-4">You scored 10 correct out of 15 questions.</p>
      
      {/* Line chart rendering */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="percentile" label={{ value: 'Percentile', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
