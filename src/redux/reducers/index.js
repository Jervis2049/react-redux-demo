import { combineReducers } from 'redux';

import food from './food';
import selectedFood from './selectedFood';

//汇总reducer
export default combineReducers({
    food,
    selectedFood
})