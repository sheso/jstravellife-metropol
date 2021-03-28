import Button from "@material-ui/core/Button";
import ServiceItem from "../ServiceItem/ServiceItem";
// import { useDispatch, useSelector } from 'react-redux';
import * as services from "./servicesDb.js";
import style from "./style.module.css";
import { useSelector } from "react-redux";
const Services = () => {
  // const dispatch = useDispatch();
  // const avia = useSelector(state => state.avia);

  const statusLang = useSelector((store) => store);

  return (
    <div className={style.services_div_wrapper}>
      <ServiceItem
        service={statusLang.translate ? statusLang.en.hall : statusLang.ru.hall}
      />
      <ServiceItem
        service={
          statusLang.translate ? statusLang.en.wedding : statusLang.ru.wedding
        }
      />
      <ServiceItem service={ statusLang.translate ? statusLang.en.catering : statusLang.ru.catering} />
      <ServiceItem service={services.hall} />
    </div>
  );
};

export default Services;
