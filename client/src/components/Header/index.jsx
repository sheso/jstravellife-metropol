import './index.css';
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <>
      <div className="mainBlock">
        <div className="menuWrap">
          <nav className="header">
                <>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/SignIn">Войти</NavLink>
                <NavLink activeStyle={{ color: "#ffbc5b" }} to="/SignUp">Зарегистрироваться</NavLink>
                </>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;