import {combineReducers} from 'redux'
import enReducer from './enReducer'
import ruReducer from './ruReducer'
import translateReducer from './translateReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  ru: ruReducer,
  en: enReducer,
  user: userReducer,
	translate: translateReducer,
})

export default rootReducer
