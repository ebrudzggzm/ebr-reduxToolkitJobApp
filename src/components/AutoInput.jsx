import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const {jobs} = useSelector((store)=>store.jobReducer)

  
    const arr = jobs.map((job)=>job[name]);
    const filteredSet = new Set(arr); //dizi döndürür
    const options = (Array.from(filteredSet));


  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input list={name} id={label} type="text" name={name} required />

      <datalist id={name}>
        { options.map((i)=>(<option value={i}  key={i}/>))}
      </datalist>
    </div>
  );
};

export default AutoInput;
