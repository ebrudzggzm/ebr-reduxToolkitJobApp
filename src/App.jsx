import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddJob from "./pages/AddJob";
import JobList from "./pages/JobList";
import Header from "./components/Header";
import { useEffect } from "react";
import api from "./utils/api";
import {
  setJobsList,
  setJobsError,
  setJobsLoading,
} from "./redux/slices/jobSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

 const getJobs = ()=>{
  dispatch(setJobsLoading());

  api
    .get("/jobs")
    .then((res) => dispatch(setJobsList(res.data)))
    .catch((err) => dispatch(setJobsError(err.message)));

 }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<JobList tryAgain={getJobs}/>} />
          <Route path={"/new"} element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
