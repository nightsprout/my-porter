import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import logo from './logo.svg';
// import './App.css';

import Index from './views/index/index';
import Item from './views/item/item';
import Pricing from './views/pricing/pricing';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Index} />
            <Route path="/item" component={Item} />
            <Route path="/pricing" component={Pricing} />
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
