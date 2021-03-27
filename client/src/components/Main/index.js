import style from "./style.module.css";
import logo from "./logo.png";
import { useSelector } from "react-redux";

const Main = () => {
  const statusLang = useSelector((store) => store);

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.imgBox}>
          <img src={logo} alt="" className={style.image} />
        </div>
        <div className={style.centerBtn}>
          <div className={style.placeLink}>
            <h5>
              {statusLang.translate
                ? statusLang.en.button[0]
                : statusLang.ru.button[0]}
            </h5>
          </div>
          <div className={style.booking}>
            <h5>
              {" "}
              {statusLang.translate
                ? statusLang.en.button[1]
                : statusLang.ru.button[1]}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
