import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './assets/css/index_css.css'
import { TextField, RaisedButton, Paper } from 'material-ui';

import atlantaZipCodes from './components/atlantaZipCodes';
import storageOptions from './components/storageOptions'
import StorageItem from './components/storageItem'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: '',
      distance: null,
      validZipCode: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPrice = this.setPrice.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      zipCode: event.target.value.replace(/\D/g, '').substring(0, 5),
    })
  }

  handleClick(event) {
    event.preventDefault()
    const { zipCode } = this.state

    if (zipCode.length >= 5 && Object.keys(atlantaZipCodes).includes(zipCode)) {
      this.setState({
        ...this.state,
        distance: atlantaZipCodes[zipCode],
        validZipCode: true,
      })
    } else {
      this.setState({
        ...this.state,
        distance: null,
        validZipCode: false,
      })
    }
    window.location.replace(window.location.href + "#storage-options");
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleClick(event)
  }

  setPrice(defaultPrice) {
    const distanceRate = 2.0
    if (this.state.validZipCode) {
      return ( Math.ceil(defaultPrice + distanceRate * this.state.distance) )
    } else {
      return ( defaultPrice )
    }
  }

  renderOptions() {
    return (
      <div id="storage-options" className="storage-options">
        {storageOptions.map(option => (
          <StorageItem
            key={`${option.length}x${option.width}`}
            length={option.length}
            width={option.width}
            text={option.text}
            price={this.setPrice(option.defaultPrice)}
            isDefault={!(this.state.validZipCode)}
          />
        ))}
      </div>
    )
  }

  render() {
    return(
      <div className="page-container">
        <Paper className="menu">
          <div className="logo-container">
            <Link to="/"><img alt="site-logo" src={require('./assets/images/logo-tagline.png')} /></Link>
          </div>
          <div className="menu-container">
            <ul>
              <li><Link to="/calculator">Storage Calculator</Link></li>
              <li><Link to="/calculator">Item 2</Link></li>
              <li><Link to="/calculator">Item 3</Link></li>
              <li><Link to="/calculator">Item 4</Link></li>
            </ul>
          </div>
        </Paper>
        <div className="content-container">
          <div className="header">
            <div className="header-content">
              <h2 className="h1">The Easiest Way to Store Your Stuff</h2>
              <h3>Free Pick-up. Online Inventory. On-Demand Delivery.</h3>
            </div>
            <div className="header-zipcode-search">
              <h3 className="dark">Find your storage solution</h3>
              <form onSubmit={event => this.handleSubmit(event)}>
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
                  className="header-zipcode-search-input"
                  value={this.state.zipCode}
                  onChange={this.handleChange} />
                <RaisedButton
                  className="header-zipcode-search-input-submit"
                  backgroundColor='#98c746'
                  label="Submit"
                  onClick={this.handleClick} />
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
            {this.renderOptions()}
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
