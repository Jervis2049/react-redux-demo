import { INIT_FOODLIST, ADD_FOOD } from '../constants/food'

let initState = [];

export default (prevState = initState, action = {}) => {

    switch (action.type) {
        case INIT_FOODLIST:
            return action.data
            break;
        case ADD_FOOD:
            return prevState.map(item => {
                if (item.id === action.id) {
                    item.count++
                }
                return item
            })
            break;
        default:
            return prevState
    }
}