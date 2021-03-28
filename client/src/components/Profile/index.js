import React, { useState } from 'react';
import SigIn from '../SignIn';
import SigUp from '../SignUp';
import styles from './styles.module.css';
export default function Profile() {
  const [viewSigIn, setviewSigIn] = useState(false);
  const [viewSigUp, setviewSigUp] = useState(false);

  const handlerShowSigIn = () => {
    // handlerShowSigUp();
    setviewSigIn((prev) => {
      if (prev) {
        return false;
      }
      setviewSigUp(false);
      return true;
    });
  };

  const handlerShowSigUp = () => {
    // handlerShowSigIn();
    setviewSigUp((prev) => {
      if (prev) {
        return false;
      }
      setviewSigIn(false);
      return true;
    });
  };
  return (
    <div className={styles.profile}>
      {viewSigIn && <SigIn />}
      {viewSigUp && <SigUp />}
      <div className={styles.profile__user_avatar} />
      <div className="profile__user__info">
        <p className="user__name">Name</p>
        <p className="user__email">Email</p>
      </div>
      <div className="profile__action">
        <button
          type="button"
          className="profile__register__btn"
          onClick={handlerShowSigUp}
        >
          Register
        </button>
        <button
          type="button"
          className="profile__login__btn"
          onClick={handlerShowSigIn}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
