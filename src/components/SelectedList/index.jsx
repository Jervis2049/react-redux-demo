import React, { Component } from 'react'
import SeclectedFoodItem from '@/components/SeclectedFoodItem'
import { connect } from 'react-redux'
import { getSelectedFood } from '../../redux/actions/selectedFood'
import './index.css'

class SelectedFood extends Component {

    render() {
        
        let { selectedFoodList } = this.props;
        return (
            <div className="selected-list">
                <h3>已选菜式（组件）</h3>
                <table>
                    <thead>
                        <tr>
                            <th>菜式</th>
                            <th>价格（元）</th>
                            <th>数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedFoodList.map((item) => {
                                return <SeclectedFoodItem key={item.id} {...item} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect(
    state => ({ selectedFoodList: state.selectedFood }),
    {
        getSelectedFood
    }
)(SelectedFood)