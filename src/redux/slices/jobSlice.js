import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobsLoading: (state) => {
      state.isLoading = true;
    },
    setJobsError: (state, action) => {
      (state.isLoading = false), (state.error = action.payload);
    },
    setJobsList: (state, action) => {
      (state.isLoading = false),
        (state.error = null),
        (state.jobs = action.payload);
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJob: (state, action) => {
      const index = state.jobs.findIndex((i) => i.id === action.payload);

      state.jobs.splice(index, 1);
    },
   
  },
});

export default jobSlice.reducer;

export const { addJob, deleteJob, setJobsError, setJobsList, setJobsLoading } =
  jobSlice.actions;

console.log(jobSlice, "jobslice");
