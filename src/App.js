import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
//import {Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'


export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          {/*<Route path="/" exact component={Homepage} />*/}
        </div>
        <div className="App">
          <Homepage />
      </div>
      </Provider>
    );
  }
}
