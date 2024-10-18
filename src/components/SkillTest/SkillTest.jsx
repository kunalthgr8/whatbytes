import React, { useState } from 'react';
import SkillTestHeader from './SkillTestHandler';
import QuickStatistics from './QuickStats';
import ComparisonGraph from './Graph';
import SyllabusAnalysis from './Syllabus';
import QuestionAnalysis from './QuestionAna';

function SkillTest() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="flex-1 ml-64 p-6">
        <SkillTestHeader />
        <QuickStatistics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComparisonGraph />
          <SyllabusAnalysis />
        </div>
        <QuestionAnalysis />
      </div>
      
    </div>
  );
}

export default SkillTest;
