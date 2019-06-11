import { combineReducers } from 'redux';
import breweriesReducer from './breweriesReducer'
 
const rootReducer = combineReducers({ breweriesReducer });
 
export default rootReducer;