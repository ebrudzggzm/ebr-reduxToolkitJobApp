import { useSelector,useDispatch } from "react-redux";
import Loader from '../components/Loader';
import Error from '../components/Error';
import Card from "../components/Card";
import Filter from "../components/Filter";


const JobList = ({tryAgain}) => {
  
const {error,jobs,isLoading} = useSelector((store)=>store.jobReducer)
console.log(jobs,'jobs')
  return (
    <div className="list-page">
      <Filter/>
       {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} tryAgain={tryAgain} />
      ) : jobs && jobs.length > 0 ? ( // jobs dizisi var mı ve içinde öğeler var mı kontrolü
        <div className="card-wrapper">
          {jobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="none">Henüz hiç iş eklenmedi.</div>
      )}
    </div>
  );
};

export default JobList;

