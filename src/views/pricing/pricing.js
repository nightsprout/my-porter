import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './assets/css/pricing_css.css'

class Pricing extends Component {
  render() {
    return(
      <div>
        pricing.js
        <ol>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/item">Item</Link></li>
        </ol>
      </div>
    );
  }
}

export default Pricing
