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
          </div>{" "}
          <a
            className={style.linkBooking}
            href="https://be.synxis.com/?_ga=2.208427482.957974354.1616845732-1432913282.1615819046&adult=1&arrive=2021-03-28&chain=21125&child=0&currency=RUB&depart=2021-03-29&hotel=3819&level=hotel&locale=ru-RU&rooms=1"
          >
            <div className={style.link}>
              {" "}
              {statusLang.translate
                ? statusLang.en.button[1]
                : statusLang.ru.button[1]}
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Main;
