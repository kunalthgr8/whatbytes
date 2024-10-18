import { createSlice } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    score: 0,
    totalQuestions: 0,
    rank: null,
    percentile: null,
  },
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload;
    },
    setRank: (state, action) => {
      state.rank = action.payload;
    },
    setPercentile: (state, action) => {
      state.percentile = action.payload;
    },
    resetScore: (state) => {
      state.score = 0;
      state.totalQuestions = 0;
      state.rank = null;
      state.percentile = null;
    },
  },
});

export const { setScore, setTotalQuestions, setRank, setPercentile, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
