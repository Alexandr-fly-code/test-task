import { combineReducers } from 'redux';
import fixedPrice from './fixedPriceReducer';


const rootReducer = combineReducers({
  fixedPrice,
});

export default rootReducer;