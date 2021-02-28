import {
    ADD_SELECTED_FOOD,
    DELETE_SELECTED_FOOD,
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    SELECTED_FOODLIST,
} from '../constants/selectedFood'

export const addSelectedFood = foodItem => ({ type: ADD_SELECTED_FOOD, foodItem })
export const deleteSelectedFood = id => ({ type: DELETE_SELECTED_FOOD, id })
export const incrementCount = id => ({ type: INCREMENT_COUNT, id })
export const decrementCount = id => ({ type: DECREMENT_COUNT, id })
export const getSelectedFood = id => ({ type: SELECTED_FOODLIST, id})