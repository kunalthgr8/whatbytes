import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setScore, setRank, setPercentile } from '../../../store/scoreSlice'; 

const ModalForm = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [rank, setRankValue] = useState('');
  const [percentile, setPercentileValue] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!rank || !percentile || !numberOfQuestions) return;
    if(isNaN(rank) || isNaN(percentile) || isNaN(numberOfQuestions)) return;
    if(rank < 0 || percentile < 0 || percentile > 100 || numberOfQuestions < 0 || numberOfQuestions > 15) return;
    dispatch(setRank(rank));
    dispatch(setPercentile(percentile));
    dispatch(setScore(numberOfQuestions));

    console.log({ rank, percentile, numberOfQuestions });
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div 
      className="fixed w-full inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" 
      onClick={onClose} 
    >
      <div 
        className="bg-white w-2/5 rounded-lg p-6 relative shadow-lg" 
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-lg font-bold m-4 mt-0">Update Scores</h2>
        <div className="absolute top-4 right-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Icon" className="w-8 h-8" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex gap-3 items-center">
            <span className="mr-2 bg-blue-600 px-3 py-2 text-nav-white rounded-full font-bold">1</span>
            <label className="block mb-2 flex-1" htmlFor="rank">Update your <strong>Rank</strong>:</label>
            <input
              type="number"
              id="rank"
              value={rank}
              onChange={(e) => setRankValue(e.target.value)}
              className="border rounded w-1/2 px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2 bg-blue-600 px-3 py-2 text-nav-white rounded-full font-bold">2</span>
            <label className="block mb-2 flex-1" htmlFor="percentile">Update your <strong>Percentile</strong>:</label>
            <input
              type="number"
              id="percentile"
              value={percentile}
              onChange={(e) => setPercentileValue(e.target.value)}
              className="border rounded w-1/2 px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <span className="mr-2 bg-blue-600 px-3 py-2 text-nav-white rounded-full font-bold">3</span>
            <label className="block mb-2 flex-1" htmlFor="numberOfQuestions">Update your <strong>Current Score</strong> (out of 15):</label>
            <input
              type="number"
              id="numberOfQuestions"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
              className="border rounded w-1/2 px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 border border-gray-400 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
