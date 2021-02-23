import React, { Component } from 'react'
import store from "@/redux/store";
import './index.css'

export default class TotalPrice extends Component {

    constructor() {
        super()
        this.state = {
            selectedFood: [],
            num: "",
            price: ""
        }
        //当store中数据发生变化就会更新数据
        store.subscribe(() => {
            let data = store.getState();
            this.calculate(data)
        })

    }

    calculate(data) {

        let { selectedFood } = data;
        let num = "", price = "";
        if (selectedFood.length > 0) {
            num = selectedFood.reduce((prev, cur) => prev + cur.count, 0)
            price = selectedFood.reduce((prev, cur) => prev + cur.price * cur.count, 0)
        }
        this.setState({
            num,
            price,
            selectedFood
        })
    }

    buyOrder() {
        let { selectedFood } = this.state;
        console.log("结算", selectedFood)
    }

    render() {

        let { num, price } = this.state;

        return (
            <div className="total-price">
                <h3>结算（组件）</h3>
                <div className="column">
                    <div>总数量：{num}份</div>
                    <div>总价格：{price}元</div>
                    <button onClick={() => this.buyOrder()}>结算</button>
                </div>
            </div>
        )
    }
}

