import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import TextField from 'material-ui/TextField';

import './assets/css/index_css.css'
import { RaisedButton } from 'material-ui';
import { Paper } from 'material-ui';

class Index extends Component {
  render() {
    return(
      <div className="page-container">
        <div className="menu">
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
        </div>
        <div className="content-container">
          <div className="header">
            <div className="header-content">
              <h2>The Easiest Way to Store Your Stuff</h2>
              <h3>Free Pick-up. Online Inventory. On-Demand Delivery.</h3>
            </div>
            <div className="header-zipcode-search">
              <h3>Find your storage solution</h3>
              <form>
                <TextField
                  floatingLabelText="Zip Code"
                  inputStyle={{
                    color: '#555'
                  }}
                  floatingLabelFocusStyle={{
                    color: '#98c746'
                  }}
                  underlineFocusStyle={{
                    border: '1px solid #98c746'
                  }}
                  className="header-zipcode-search-input" />
                <RaisedButton
                  className="header-zipcode-search-input-submit"
                  backgroundColor='#98c746'
                  label="Submit"/>
              </form>
            </div>
          </div>
          <div className="section how-it-works">
            <h2>How It Works</h2>
            <div className="how-it-works-container">
              <div>
                <img alt="We pick up your packed boxes" src={require('./assets/images/process-1.png')} />
                <p>We pick yp your packed boxes and other stuff you want to store.</p>
              </div>
              <div>
                <img alt="We store your boxes safely" src={require('./assets/images/process-2.png')} />
                <p>We store your items safely and securely.</p>
              </div>
              <div>
                <img alt="Order back anything you'd like" src={require('./assets/images/process-3.png')} />
                <p>You order back anything you want from your online visual catalog.</p>
              </div>
            </div>
          </div>
          <div className="section price-listing">
            <h2>Find Your Storage Solution</h2>
            <form className="price-listing-zipcode-search">
            <TextField
                  floatingLabelText="Zip Code"
                  inputStyle={{
                    color: '#555'
                  }}
                  floatingLabelFocusStyle={{
                    color: '#98c746'
                  }}
                  underlineFocusStyle={{
                    border: '1px solid #98c746'
                  }}
                  className="header-zipcode-search-input" />
                <RaisedButton
                  className="header-zipcode-search-input-submit"
                  backgroundColor='#98c746'
                  label="Submit"/>
            </form>
            <div className="storage-options">
              <div className="storage-option five-five">
                <div className="product-image">
                  <img alt="5 by 5 storage example" src={require('./assets/images/products/5x5.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span class="highlight">5'x5'</span><br/>
                      Small Closet Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option five-ten">
                <div className="product-image">
                  <img alt="5 by 10 storage example" src={require('./assets/images/products/5x10.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">5'x10'</span><br/>
                      Walkin Closet Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option five-fifteen">
                <div className="product-image">
                <img alt="5 by 15 storage example" src={require('./assets/images/products/5x15.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">5'x15'</span><br/>
                      Bedroom Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option ten-ten">
                <div className="product-image">
                <img alt="10 by 10 storage example" src={require('./assets/images/products/10x10.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">10'x10'</span><br/>
                      Garage Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option ten-twelve-half">
                <div className="product-image">
                <img alt="10 by 12 and a half storage example" src={require('./assets/images/products/10x12_5.jpg')} />
                </div>
                <div className="product-data">
                 <div>
                    <div>
                      <span className="highlight">10'x12.5'</span><br/>
                      Studio Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option ten-fifteen">
                <div className="product-image">
                <img alt="10 by 15 storage example" src={require('./assets/images/products/10x15.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">10'x15'</span><br/>
                      Studo/1 Bed. Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option ten-twenty">
                <div className="product-image">
                <img alt="10 by 20 storage example" src={require('./assets/images/products/10x20.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">10'x20'</span><br/>
                      1 Bedroom Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
                </div>
              </div>
              <div className="storage-option ten-twentyfive">
                <div className="product-image">
                <img alt="10 by 25 storage example" src={require('./assets/images/products/10x30.jpg')} />
                </div>
                <div className="product-data">
                  <div>
                    <div>
                      <span className="highlight">10'x25'</span><br/>
                      Apartment Size
                    </div>
                    <div>
                      $<span className="highlight">__</span><br/>
                      per month
                    </div>
                  </div>
                  <div>
                    <RaisedButton
                      className="product-book-now"
                      backgroundColor='#98c746'
                      label="Book Now"/><br/>
                      or call <a href="tel:8449767837">844.976.7837</a>
                  </div>
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
