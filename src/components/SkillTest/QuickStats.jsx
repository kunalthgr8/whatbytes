import React from "react";

const QuickStatistics = () => {
  return (
    <div className="flex justify-around bg-white rounded-lg shadow p-4 mb-6">
      <div className="text-center">
        <p className="text-2xl font-bold">1</p>
        <p>Your Rank</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">30%</p>
        <p>Percentile</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold">10 / 15</p>
        <p>Correct Answers</p>
      </div>
    </div>
  );
};

export default QuickStatistics;