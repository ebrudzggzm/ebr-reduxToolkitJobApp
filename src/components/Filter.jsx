import { useEffect, useState } from "react";
import { sortOpt, statusOpt, typeOpt } from "../constants";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import api from "../utils/api";
import {
  setJobsLoading,
  setJobsError,
  setJobsList,
} from "../redux/slices/jobSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [sort, setSort] = useState();
 const [status,setStatus]=useState();
 const [type,setType] = useState();
  useEffect(() => {
    if (text === undefined) return;
    const timer = setTimeout(() => setDebouncedText(text), 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    const sortParam =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "En Yeni" || sort === "En Eski"
        ? "date"
        : undefined;
    // console.log(sortParam)

    const orderParam =
      sort === "a-z"
        ? "asc"
        : sort === "z-a"
        ? "desc"
        : sort === "En Yeni"
        ? "desc"
        : sort === "En Eski"
        ? "asc"
        : undefined;

    const params = {
      q: text,
      _sort: sortParam,
      _order: orderParam,
      status: status || undefined,
      type: type || undefined
    };

    dispatch(setJobsLoading());
    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobsList(res.data)))
      .catch((err) => dispatch(setJobsError(err.message)));
  }, [debouncedText, sort,status,type]);
  //formu sıfırla
const handleReset = ()=>{
e.preventDefault();

//stateleri sıfırla
setDebouncedText();
setText();
setSort();
setStatus();
setType();
//inputları sıfırla
e.target.reset();
}
  return (
    <div className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form onSubmit = {handleReset}>
        <div>
          <label>Şirket ismine göre ara</label>
          <input onChange={(e) => setText(e.target.value)} type="text" />
        </div>
        <Select label={"Durum"} handleChange={(e)=>setStatus(e.target.value)} options={statusOpt} />
        <Select label={"Tür"} handleChange={(e)=>setType(e.target.value)} options={typeOpt} />
        <Select
          handleChange={(e) => setSort(e.target.value)}
          label={"Sırala"}
          options={sortOpt}
        />
        <div>
          <SubmitButton text={"Filtreleri Sıfırla"} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
