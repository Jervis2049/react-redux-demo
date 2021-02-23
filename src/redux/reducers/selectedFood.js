import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    DELETE_SELECTED_FOOD,
    ADD_SELECTED_FOOD
} from '../action-types'

let initState = [];

const deleteFun = (prevState, id) => {
    let list = JSON.parse(JSON.stringify(prevState))
    let deleteIndex = list.findIndex(item => item.id === id)
    list.splice(deleteIndex, 1)
    return list
}

const increFun = (prevState, id) => {
    return prevState.map(item => {
        if (item.id === id) {
            item.count++
        }
        return item
    })
}

const decreFun = (prevState, id) => {
    return prevState.map(item => {
        if (item.id === id) {
            item.count--;
        }
        return item
    }).filter(item => item.count > 0)
}

export default (prevState = initState, action = {}) => {
    switch (action.type) {
        case ADD_SELECTED_FOOD:
            return [...prevState, action.foodItem]
            break;
        case DELETE_SELECTED_FOOD:
            return deleteFun(prevState, action.id)
            break;
        case INCREMENT_COUNT:
            return increFun(prevState, action.id)
            break;
        case DECREMENT_COUNT:
            return decreFun(prevState, action.id)
            break;
        default:
            return prevState
    }
}