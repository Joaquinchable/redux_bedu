import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Counter from './containers/Counter/Counter';
import reducer from './store/reducer';
import './App.css';
const store = createStore(reducer) ;
class App extends Component {
  render() {
    return ( 
      <Provider store={store}> 

      <div className="App">
       <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
