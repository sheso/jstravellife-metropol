import * as TYPES from '../types/types';

// example
//====================session========================
export function checkUser(data) {
  return {
    type: TYPES.CHECK_USER_SESSION,
    data,
  }
}

const checkUserSession = () => (dispatch) => {
    fetch('/login')
    .then(res => res.status === 200 ? res.json() : null)
    .then(data => {
      dispatch(checkUser(data));
    })
}

//===================login=========================
export function signInUser(data) {
  return {
    type: TYPES.VERIFY_USER,
    data,
  }
}

const loginUser = (login, password) => (dispatch) => {
  console.log(login, password)
  fetch('/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
    })
  },
  {credentials: 'include'})
    .then(res => res.status === 200 ? res.json() : {})
    .then(data => {
      dispatch(signInUser(data));
    })
}

//========================logout====================
export function removeUser() {
  return {
    type: TYPES.VERIFY_USER,
    data: null
  }
}
const logoutUser = () => (dispatch) => {
  fetch('/logout', {credentials: 'include'})
    .then(res => res.status === 200 ? dispatch(removeUser()) : null)
}

//===================registration===================

export function signUpUser(data) {
  return {
    type: TYPES.VERIFY_USER,
    data,
  }
}

const registerUser = ({ email, login, password }) => (dispatch) => {
  fetch('/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login,
      email,
      password,
    })
  },
  {credentials: 'include'})
    .then(res => res.status === 200 ? res.json() : {})
    .then(data => {
      dispatch(signUpUser(data));
    })
}
// \example

export {
  checkUserSession,
  loginUser,
  logoutUser,
  registerUser,
}
