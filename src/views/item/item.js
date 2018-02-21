import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './assets/css/item_css.css'

class Item extends Component {
  render() {
    return(
      <div>
        item.js
        <ol>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/item">Item</Link></li>
        </ol>
      </div>);
  }
}

export default Item
