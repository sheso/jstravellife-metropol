import style from "./style.module.css";
import logo from "./logo.png";

const Main = () => {
  return (
    <>
      <div className={style.conteiner}>
        <div className={style.imgBox}>
          <img src={logo} alt="" className={style.image} />
        </div>
        <div className={style.placeLink}>
          <h5>ЧТО ПОСМОТРЕТЬ?</h5>
        </div>
        <div className={style.booking}>
          <h5>ЗАБРОНИРОВАТЬ</h5>
        </div>
      </div>
    </>
  );
};

export default Main;
