import React, { Component } from 'react'
import FoodItem from '@/components/FoodItem'
import { connect } from 'react-redux'
import { initFoodList } from '@/redux/actions/food'
import './index.css'

class Food extends Component {

    componentDidMount() {
        let foodData = [
            {
                id: 1,
                name: '牛肉炒饭',
                price: 20,
                count: 0
            },
            {
                id: 2,
                name: '酸菜鱼',
                price: 18,
                count: 0
            },
            {
                id: 3,
                name: '红烧茄子',
                price: 15,
                count: 0
            },
            {
                id: 4,
                name: '猪扒滑蛋拌饭',
                price: 22,
                count: 0
            },
            {
                id: 5,
                name: '米饭',
                price: 2,
                count: 0
            },
        ]
        this.props.initFoodList(foodData)
    }

    render() {

        let { foodList } = this.props;
        return (
            <div className="food-list">
                <h3>菜单（组件）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>菜式</th>
                            <th>价格（元）</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodList.map((item) => {
                                return <FoodItem key={item.id} {...item} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect(
    state => ({ foodList: state.food }), //映射状态
    {
        initFoodList //映射操作状态的方法
    }
)(Food)