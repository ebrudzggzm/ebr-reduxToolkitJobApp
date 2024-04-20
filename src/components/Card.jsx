import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import DelButton from "./DelButton";

const Card = ({ job }) => {
   const colors = {
    Mülakat: "green",
    Reddedildi: "red",
    "Devam Ediyor": "orange",
  };
 //console.log(colors["Devam Ediyor"],'devam');
  return (
    <div className="card">
      <div className="head">
        <section>
          <div className="letter">
            <span>{job.company[0]}</span>
          </div>

          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <DelButton id={job.id} />
        </section>
      </div>

      <div className="card-body">
        <div className="field">
          <CiLocationOn />
          <p>{job.location}</p>
        </div>
        <div className="field">
          <MdWorkOutline />
          <span>{job.type}</span>
        </div>
        <div className="field">
          <MdDateRange />
          <p>{new Date(job.date).toLocaleDateString()}</p>
        </div>
        <div className="status">
          <p style={{background: colors[job.status]}}>{job.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
