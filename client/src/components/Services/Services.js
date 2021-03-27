import Button from '@material-ui/core/Button';
import ServiceItem from '../ServiceItem/ServiceItem';
import { useDispatch, useSelector } from 'react-redux';
import * as services from './servicesDb.js';
import style from "./style.module.css";


const Services = () => {
  // const dispatch = useDispatch();
  // const avia = useSelector(state => state.avia);
  return (<div className={style.services_div_wrapper}>


    <ServiceItem service={services.hall} />
    <ServiceItem service={services.wedding} />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>);
}

export default Services;
