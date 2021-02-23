import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncAddFood } from '@/redux/actions/food'
import { addSelectedFood } from '@/redux/actions/selectedFood'
import './index.css'

class FoodItem extends Component {

    addHandle(itemObj) {

        //菜单总列表的子项count加1，使之作为按钮显示/隐藏的判断条件
        this.props.asyncAddFood(itemObj.id)

        //添加到已选列表
        itemObj.count++;
        this.props.addSelectedFood(itemObj)
    }

    render() {

        let { count, id, name, price, selectedFoodList } = this.props;
        let itemObj = { count, id, name, price };
        let isInSelectedFood = selectedFoodList.some(item => item.id === id)
        if (!isInSelectedFood) {
            count = 0;
        }
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <button
                            className="add-btn"
                            style={{ display: count === 0 ? "flex" : "none" }}
                            onClick={() => this.addHandle(itemObj)}
                        >
                            加入购物车
                        </button>
                        <span style={{ display: count > 0 ? "flex" : "none" }} >已添加</span>
                    </td>
                </tr>
            </>
        )
    }
}

export default connect(
    state => ({ selectedFoodList: state.selectedFood }),
    {
        asyncAddFood,
        addSelectedFood
    }
)(FoodItem)