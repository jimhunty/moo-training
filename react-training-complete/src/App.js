import React, { Component } from 'react';
import moment from 'moment';

import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cart time={moment().format('Do MMM YY h:mm:ss a')} />
        <Footer />
      </div>
    );
  }
}

export default App;
