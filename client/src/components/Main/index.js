import BottomNav from "../BottomNav";
import style from "./style.module.css";
import logo from "./logo.png";

const Main = () => {
  return (
    <>
      <div className={style.conteiner}>
       
        <div className={style.imgBox}>
          <img src={logo} alt="" className={style.image} />
        </div>

        <div className={style.navBottom}>
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Main;
