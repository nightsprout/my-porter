import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Paper } from 'material-ui-next';
// import { RaisedButton } from 'material-ui';

import StorageItem from '../index/components/storageItem'
import './assets/css/item_css.css'

class Item extends Component {
  constructor(props) {
    super(props)

    const locationState = this.props.location.state.props
    this.state = {
      ...locationState,
    }
  }
  render() {
    return(
      <div className="item page-container">
        <Paper className="menu">
          <div className="logo-container">
            <Link to="/"><img alt="site-logo" src={require('./assets/images/logo-tagline.png')} /></Link>
          </div>
          <div className="menu-container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
            </ul>
          </div>
        </Paper>
        <div className="content-container">
          <div className="item-listing">
          <h2 className="h1">Your Personal Storage Solution</h2>
            <div className="item-listing-container">
              {/* <div className="storage-option five-five">
                <div className="product-image">
                  <img alt="5 by 5 storage example" src={require('./assets/images/products/5x5.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span class="highlight">5'x5'</span>
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div><br/>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Change Plan"/><br/>
                      <span>or call <a href="tel:8449767837">844.976.7837</a></span>
                  </div>
                </div>
              </div> */}
              <StorageItem
                length={this.state.length}
                width={this.state.width}
                text={this.state.text}
                price={this.state.price}
                isDefault={this.state.isDefault}
                zipCode={this.state.zipCode}
              />
              <div className="item-details">
                <h3>Product Details</h3>
                <ul>
                  <li><span className="highlight">Free</span> Pickup</li>
                  <li><span className="highlight">Free</span> Packing Bins delivered before your move</li>
                  <li><span className="highlight">Free</span> visual online catalog of all stored items</li>
                  <li>Item delivery ordering from your couch (or anywhere!)</li>
                  <li>Delivery starting at just <span className="highlight">$20</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <ol>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/item">Item</Link></li>
        </ol> */}
      </div>);
  }
}

export default Item
