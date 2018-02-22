import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './assets/css/dashboard_css.css'

class Dashboard extends Component {
  render() {
    return(
      <div>
        dashboard.js
        <ol>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/item">Item</Link></li>
        </ol>
      </div>);
  }
}

export default Dashboard
