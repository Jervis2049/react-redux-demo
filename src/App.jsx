import React, { Component } from 'react'
import FoodList from '@/components/FoodList'
import SelectedList from '@/components/SelectedList'
import TotalPrice from '@/components/TotalPrice'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="content">
          <FoodList />
          <SelectedList />
          <TotalPrice />
        </div>
      </Provider>
    );
  }
}

