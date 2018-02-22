import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Paper } from 'material-ui-next';

import './assets/css/item_css.css'

class Item extends Component {
  render() {
    return(
      <div className="page-container">
        <Paper className="menu">
          <div className="logo-container">
          <img alt="site-logo" src={require('./assets/images/logo-tagline.png')} />
          </div>
          <div className="menu-container">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li> 
            </ul>
          </div>
        </Paper>
        {/* <ol>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/item">Item</Link></li>
        </ol> */}
      </div>);
  }
}

export default Item
