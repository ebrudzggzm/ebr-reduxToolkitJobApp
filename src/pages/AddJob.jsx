import AutoInput from "../components/AutoInput";
import { statusOpt, typeOpt } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { v4 } from "uuid";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import { addJob } from "../redux/slices/jobSlice";
import Select from "../components/Select";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const formValues = Object.fromEntries(data.entries());
    console.log(formValues, "input");

    formValues.id = v4();
    formValues.date =  Date.now();

    api
      .post("/jobs", formValues)
      .then(() => {
        toast.warn("Başvuru başarıyla eklendi.");
        dispatch(addJob(formValues));

        navigate("/");
      })
      .catch(() => toast.error("Ekleme işleminde bir sorun oluştu"));
  };
  console.log(store, "store");
  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>
        <form onSubmit={handleSubmit}>
          <AutoInput label={"Pozisyon"} name={"position"} />
          <AutoInput label={"Şirket"} name={"company"} />
          <AutoInput label={"Lokasyon"} name={"location"} />
          <Select label={"Durum"} options={statusOpt} name={"status"} />
          <Select label={"Tür"} options={typeOpt} name={"type"} />
          <div>
            <SubmitButton text={"KAYDET"} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
