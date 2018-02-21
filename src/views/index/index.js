import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import './assets/css/index_css.css'

class Index extends Component {
  render() {
    return(
      <div>
        <div className="menu">
          <div className="logo-container">
          <img alt="site-logo" src={require('./assets/images/logo-tagline-e5bcf434b535e6f9811420ed88f572a801788c7850aa5e7b6f0af05055827d8f.png')} />
          </div>
          <div className="menu-container">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li> 
            </ul>
          </div>
        </div>
        <div className="page-container">
          <div className="header">
            <h2>The Easiest Way to Store Your Stuff</h2>
            <h3>Free Pick-up. Online Inventory. On-Demand Delivery.</h3>
            <div className="button button-solid">Reserve Your Free Pickup</div>
            <div className="zipcode-search">
              <h3>Find your storage solution</h3>
              <form>
                <input placeholder="Zip Code"/>
                <input type="submit"/>
              </form>
            </div>
          </div>
          <div className="section how-it-works">
            <h2>How It Works</h2>
            <div>
              Hold Image One
              <span>We pick yp your packed boxes and other stuff you want to store.</span>
            </div>
            <div>
              Hold Image Two
              <span>We store your items safely and securely.</span>
            </div>
            <div>
              Hold Image Three
              <span>You order back anything you want from your online visual catalog.</span>
            </div>
          </div>
          <div className="section price-listing">
            <h2>Find Your Storage Solution</h2>
            <form>
              <input placeholder="Zip Code"/>
              <input type="submit"/>
            </form>
            <div className="storage-options">
              <div className="storage-option five-five">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option five-ten">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option five-fifteen">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option ten-ten">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option ten-twelve-half">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option ten-fifteen">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option ten-twenty">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
              </div>
              <div className="storage-option ten-twentyfive">
                <div>
                  Image
                </div>
                <div>
                  Data &amp; Info
                </div>
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

export default Index
