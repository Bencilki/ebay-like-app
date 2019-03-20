import './App.css';
import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AdsListContainer from './components/AdsListContainer'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Welcome</h1>
          <Route path="/" exact component={AdsListContainer} />
          
        </div>
      </Provider>
    );
  }
}

export default (App);
