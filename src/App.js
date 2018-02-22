import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import logo from './logo.svg';
// import './App.css';

import Index from './views/index/index';
import Item from './views/item/item';
import Pricing from './views/pricing/pricing';
import Dashboard from './views/dashboard/dashboard';
import Calculator from './views/calculator/calculator';

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
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calculator" component={Calculator} />
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
