import {
    INIT_FOODLIST,
    ADD_FOOD,
} from '../action-types'

export const initFoodList = data => ({ type: INIT_FOODLIST, data })
export const addFood = id => ({ type: ADD_FOOD, id })
export const asyncAddFood = id =>{
    return (dispatch)=>{
        //模拟异步操作
        setTimeout(()=>{
            dispatch(addFood(id)) 
        },500)
    }
}

