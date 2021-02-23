import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, deleteSelectedFood } from '@/redux/actions/selectedFood'
import './index.css'

class Item extends Component {

    increHandle = (id) => {
        this.props.incrementCount(id)
    }

    decreHandle = (id) => {
        this.props.decrementCount(id)
    }

    delHandle = (id) => {
        this.props.deleteSelectedFood(id)
    }

    render() {

        let { count, id, name, price } = this.props;

        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <div className="count-box">
                            <div className="decrease btn" onClick={() => this.decreHandle(id)}></div>
                            <div className="count">{count}</div>
                            <div className="increase btn" onClick={() => this.increHandle(id)}></div>
                        </div>
                    </td>
                    <td>
                        <button className="del-btn" onClick={() => this.delHandle(id)}>删除</button>
                    </td>
                </tr>
            </>
        )
    }
}

export default connect(
    state => ({}),
    {
        incrementCount,
        decrementCount,
        deleteSelectedFood
    }
)(Item)