import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import { Paper } from 'material-ui';

import './assets/css/calculator_css.css'

var mapStorageSizeNameToTextStrings = {
  "5x5": {
    name: "Small Closet Size",
    image: '5x5'
  },
  "5x10": {
    name: "Walkin Closet Size",
    image: '5x10'
  },
  "5x15": {
    name: "Bedroom Size",
    image: '5x15'
  },
  "10x10": {
    name: "Garage Size",
    image: '10x10'
  },
  "10x12.5": {
    name: "Studio Size",
    image: '10x12_5'
  },
  "10x15": {
    name: "Studio/1BR Size",
    image: '10x15'
  },
  "10x17.5": {
    name: "1BR Size",
    image: '10x20'
  },
  "10x20": {
    name: "1BR Size",
    image: '10x20'
  },
  "10x25": {
    name: "Apartment Size",
    image: '10x25'
  },
  "10x30": {
    name: "Apartment Size",
    image: '10x25'
  },
  "Contact Us": {
    name: "Custom Sizing",
    image: '10x25'
  }
}

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory_total: 0,
      storage_size_necessary: { "5x5": 100 },
      storage_types: {
        "5x5":         100,
        "5x10":        200,
        "5x15":        300,
        "10x10":       400,
        "10x12.5":     500,
        "10x15":       600,
        "10x17.5":     700,
        "10x20":       800,
        "10x25":       1000,
        "10x30":       1200,
        "Contact Us":  999999999,
      },
      inventory_types: {
        "Bins":                         { value: 4, quantity: 0 },
        "Headboard":                    { value: 3, quantity: 0 },
        "Footboard":                    { value: 3, quantity: 0 },
        "Twin Mattress or Boxspring":   { value: 20, quantity: 0 },
        "Full Mattress or Boxspring":   { value: 28, quantity: 0 },
        "Queen Mattress or Boxspring":  { value: 33, quantity: 0 },
        "King Mattress or Boxspring":   { value: 42, quantity: 0 },
        "Crib":                         { value: 10, quantity: 0 },
        "Small Dresser (3 drawers)":    { value: 20, quantity: 0 },
        "Large Dresser (6 drawers)":    { value: 50, quantity: 0 },
        "Bedside Table":                { value: 5, quantity: 0 },
        "Sofa - 2 seater":              { value: 35, quantity: 0 },
        "Sofa - 3 seater":              { value: 60, quantity: 0 },
        "Sofa - 4 seater":              { value: 70, quantity: 0 },
        "Sectional - 5 seater":         { value: 100, quantity: 0 },
        "Sectional - 6 seater":         { value: 150, quantity: 0 },
        "Chair":                        { value: 5, quantity: 0 },
        "Bar / High Table":             { value: 15, quantity: 0 },
        "Coffee Table":                 { value: 5, quantity: 0 },
        "Side Table":                   { value: 5, quantity: 0 },
        "Day Bed":                      { value: 30, quantity: 0 },
        "Bookshelf":                    { value: 20, quantity: 0 },
        "File Cabinet - 2 drawers":     { value: 10, quantity: 0 },
        "File Cabinet - 3 drawers":     { value: 15, quantity: 0 },
        "Lay-Z-Boy":                    { value: 25, quantity: 0 },
        "Small Rug":                    { value: 3, quantity: 0 },
        "Large Rug":                    { value: 10, quantity: 0 },
        "Entertainment Center":         { value: 25, quantity: 0 },
        "TV":                           { value: 10, quantity: 0 },
        "Wine Rack":                    { value: 3, quantity: 0 },
        "Breakfast Table - 4 seater":   { value: 20, quantity: 0 },
        "Dining Room Table":            { value: 30, quantity: 0 },
        "Dining Chair":                 { value: 5, quantity: 0 },
        "Sideboard":                    { value: 20, quantity: 0 },
        "Microwave":                    { value: 5, quantity: 0 },
        "Mini Fridge":                  { value: 4, quantity: 0 },
        "Refrigerator":                 { value: 30, quantity: 0 },
        "Washer or Dryer":              { value: 10, quantity: 0 },
        "Tall Lamp":                    { value: 4, quantity: 0 },
        "Short Lamp":                   { value: 3, quantity: 0 },
        "AC Window Unit":               { value: 3, quantity: 0 },
        "Large Grill":                  { value: 25, quantity: 0 },
        "Small Grill":                  { value: 10, quantity: 0 },
        "Golf Clubs":                   { value: 6, quantity: 0 },
        "Bike":                         { value: 10, quantity: 0 },
        "Skis / Snowboard":             { value: 2, quantity: 0 },
        "Treadmill":                    { value: 50, quantity: 0 },
        "Exercise Bike":                { value: 10, quantity: 0 }
      }
    };
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity(itemKey, event) {
    if ( event.target.value < 0 ) {
      event.target.value = 0;
    }
    let updatedItem = {};
    let newInventoryTotal;
    let newStorageSizeNecessary;
    // Update item quantity.
    updatedItem[itemKey] = {
      ...this.state.inventory_types[itemKey],
      quantity: event.target.value
    };
    // Update the inventory.
    let newState = {
      ...this.state,
      inventory_types: {
        ...this.state.inventory_types,
        ...updatedItem
      }
    };
    // Update the total square footage needed by the new inventory.
    newInventoryTotal = this.recalculateInventoryTotal(newState);
    newStorageSizeNecessary = this.redetermineStorageSizeNecessary(newInventoryTotal);
    newState = {
      ...newState,
      storage_size_necessary: newStorageSizeNecessary,
      inventory_total: newInventoryTotal,
    }
    this.setState(newState);
  }

  recalculateInventoryTotal(preTotalState) {
    let total = 0;
    for (let item in preTotalState.inventory_types) {
      total = total + (preTotalState.inventory_types[item].quantity * preTotalState.inventory_types[item].value);
    }
    return total;
  }

  redetermineStorageSizeNecessary(storageSizeNecessary) {
    let sizes = [];
    let newStorageSizeNecessary = {};
    for (let storageTypeName1 in this.state.storage_types) {
      sizes.push(this.state.storage_types[storageTypeName1]);
    }
    sizes.sort(function(a, b){return a - b});
    for (var i=0; i < sizes.length; i++) {
      if (storageSizeNecessary <= sizes[i]) {
        storageSizeNecessary = sizes[i];
        break;
      }
    }
    for ( let storageTypeName2 in this.state.storage_types ) {
      if ( storageSizeNecessary === this.state.storage_types[storageTypeName2] ) {
        newStorageSizeNecessary[storageTypeName2] = storageSizeNecessary;
      }
    }
    return newStorageSizeNecessary;
  }

  returnSnapshotImage() {
    if ( Object.keys(this.state.storage_size_necessary)[0] === "5x10" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/5x10.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "5x15" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/5x15.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x10" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x10.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x12.5" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x12_5.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x15" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x15.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x17.5" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x20.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x20" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x20.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x25" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x30.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "10x30" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x30.jpg')} />;
    }
    else if ( Object.keys(this.state.storage_size_necessary)[0] === "Custom Sizing" ) {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/10x30.jpg')} />;
    }
    // else ( Object.keys(this.state.storage_size_necessary)[0] === "5x5" ) {
    else {
      return <img alt="Storage thumbnail." src={require('../index/assets/images/products/5x5.jpg')} />;
    }
  }

  returnForm() {
    let items = [];
    let container = <div className="calculator-container">
      <div className="calculator-result-snapshot">
        {this.returnSnapshotImage()}
        <div className="product-data">
          <div>
            <div>
              <span className="highlight" style={{display: 'block', margin: '10px 0 5px 0'}}>{Object.keys(this.state.storage_size_necessary)[0]}</span>
              {mapStorageSizeNameToTextStrings[Object.keys(this.state.storage_size_necessary)[0]].name}
            </div>
            <div style={{display: 'block', margin: '10px 0 15px 0'}}>
              $<span className="highlight">__</span><br/>
              <span style={{fontSize: '12px'}}>per month</span>
            </div>
          </div>
          <div>
            <RaisedButton
              className="product-book-now"
              style={{margin: '0 0 15px 0'}}
              backgroundColor='#98c746'
              label="Book Now"/><br/>
              or call <a href="tel:8449767837">844.976.7837</a>
          </div>
        </div>
      </div>
      <h2>Storage Calculator</h2>
      <div className="calculator-result-total"><strong>Total Cubic Footage Used:</strong> {this.state.inventory_total}</div>
      <div className="calculator-result-unit"><strong>Minimum Storage Unit Size:</strong> {Object.keys(this.state.storage_size_necessary)[0]}</div>
      {items}
    </div>;
    for (let item in this.state.inventory_types) {
      items.push(
        // <div key={item}>
        //   <label>{item}</label>
        //   <input value={this.state.inventory_types[item].quantity} onChange={(e) => this.updateQuantity(item, e)} type="number" />
        //   <div>{this.state.inventory_types[item].quantity * this.state.inventory_types[item].value}</div>
        // </div>
        <TextField 
          key={item}
          floatingLabelText={item}
          value={this.state.inventory_types[item].quantity}
          onChange={(e) => this.updateQuantity(item, e)}
          style={{
            width: '300px',
            margin: '0 30px 0 0',
          }}
          inputStyle={{
            color: '#555'
          }}
          floatingLabelFocusStyle={{
            color: '#98c746'
          }}
          underlineFocusStyle={{
            border: '1px solid #98c746'
          }}
          type="number" />
      );
    }
    return container;
  }

  render() {
    return(
      <div className="page-container">
        <Paper className="menu">
          <div className="logo-container">
            <Link to="/"><img alt="site-logo" src={require('../index/assets/images/logo-tagline.png')} /></Link>
          </div>
          <div className="menu-container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/calculator">Storage Calculator</Link></li>
            </ul>
          </div>
        </Paper>
        {this.returnForm()}
      </div>
    );
  }
}

export default Calculator













