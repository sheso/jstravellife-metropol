<<<<<<< HEAD
import {combineReducers} from 'redux'
import enReducer from './enReducer'
import ruReducer from './ruReducer'
import translateReducer from './translateReducer'

const rootReducer = combineReducers({
  ru: ruReducer,
	en: enReducer,
	translate: translateReducer,
=======
import {combineReducers} from 'redux';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    user: userReducer,
>>>>>>> services
})

export default rootReducer
