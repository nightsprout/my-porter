import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import { Paper } from 'material-ui';

import './assets/css/calculator_css.css'

var mapStorageSizeNameToTextStrings = {
  "5x5": {
    name: "Small Closet Size",
    image: '5x5',
    price: 55,
  },
  "5x10": {
    name: "Walk-In Closet Size",
    image: '5x10',
    price: 89,
  },
  "5x15": {
    name: "Small Room Size",
    image: '5x15',
    price: 119,
  },
  "10x10": {
    name: "Room Size",
    image: '10x10',
    price: 139,
  },
  "10x12.5": {
    name: "Garage Size",
    image: '10x12_5',
    price: 169,
  },
  "10x15": {
    name: "Studio Size",
    image: '10x15',
    price: 199,
  },
  "10x17.5": {
    name: "Large Studio Size",
    image: '10x20',
    price: 229,
  },
  "10x20": {
    name: "2-Car Garage Size",
    image: '10x20',
    price: 259,
  },
  "10x25": {
    name: "Small Apartment Size",
    image: '10x25',
    price: 299,
  },
  "10x30": {
    name: "Apartment Size",
    image: '10x25',
    price: 329,
  },
  "Contact Us": {
    name: "Custom Sizing",
    image: '10x25',
    price: false,
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
        "Bins":                         { value: 4, quantity: '' },
        "Headboard":                    { value: 3, quantity: '' },
        "Footboard":                    { value: 3, quantity: '' },
        "Twin Mattress or Boxspring":   { value: 20, quantity: '' },
        "Full Mattress or Boxspring":   { value: 28, quantity: '' },
        "Queen Mattress or Boxspring":  { value: 33, quantity: '' },
        "King Mattress or Boxspring":   { value: 42, quantity: '' },
        "Crib":                         { value: 10, quantity: '' },
        "Small Dresser (3 drawers)":    { value: 20, quantity: '' },
        "Large Dresser (6 drawers)":    { value: 50, quantity: '' },
        "Bedside Table":                { value: 5, quantity: '' },
        "Sofa - 2 seater":              { value: 35, quantity: '' },
        "Sofa - 3 seater":              { value: 60, quantity: '' },
        "Sofa - 4 seater":              { value: 70, quantity: '' },
        "Sectional - 5 seater":         { value: 100, quantity: '' },
        "Sectional - 6 seater":         { value: 150, quantity: '' },
        "Chair":                        { value: 5, quantity: '' },
        "Bar / High Table":             { value: 15, quantity: '' },
        "Coffee Table":                 { value: 5, quantity: '' },
        "Side Table":                   { value: 5, quantity: '' },
        "Day Bed":                      { value: 30, quantity: '' },
        "Bookshelf":                    { value: 20, quantity: '' },
        "File Cabinet - 2 drawers":     { value: 10, quantity: '' },
        "File Cabinet - 3 drawers":     { value: 15, quantity: '' },
        "Lay-Z-Boy":                    { value: 25, quantity: '' },
        "Small Rug":                    { value: 3, quantity: '' },
        "Large Rug":                    { value: 10, quantity: '' },
        "Entertainment Center":         { value: 25, quantity: '' },
        "TV":                           { value: 10, quantity: '' },
        "Wine Rack":                    { value: 3, quantity: '' },
        "Breakfast Table - 4 seater":   { value: 20, quantity: '' },
        "Dining Room Table":            { value: 30, quantity: '' },
        "Dining Chair":                 { value: 5, quantity: '' },
        "Sideboard":                    { value: 20, quantity: '' },
        "Microwave":                    { value: 5, quantity: '' },
        "Mini Fridge":                  { value: 4, quantity: '' },
        "Refrigerator":                 { value: 30, quantity: '' },
        "Washer or Dryer":              { value: 10, quantity: '' },
        "Tall Lamp":                    { value: 4, quantity: '' },
        "Short Lamp":                   { value: 3, quantity: '' },
        "AC Window Unit":               { value: 3, quantity: '' },
        "Large Grill":                  { value: 25, quantity: '' },
        "Small Grill":                  { value: 10, quantity: '' },
        "Golf Clubs":                   { value: 6, quantity: '' },
        "Bike":                         { value: 10, quantity: '' },
        "Skis / Snowboard":             { value: 2, quantity: '' },
        "Treadmill":                    { value: 50, quantity: '' },
        "Exercise Bike":                { value: 10, quantity: '' }
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
            {/* {mapStorageSizeNameToTextStrings[Object.keys(this.state.storage_size_necessary)[0]].price &&
              <div style={{display: 'block', margin: '10px 0'}}>
                $<span className="highlight">
                  {mapStorageSizeNameToTextStrings[Object.keys(this.state.storage_size_necessary)[0]].price}
                </span><br/>
                <span style={{position: 'relative', top: '-6px', fontSize: '12px'}}>per month</span>
              </div>
            } */}
          </div>
            <div style={{display: 'block', margin: '10px 0'}}>
              <RaisedButton
                className="product-book-now"
                style={{margin: '0 0 15px 0'}}
                backgroundColor='#98c746'
                label="Book Now"/><br/>
            </div>
            {/* :
            <div>
              <RaisedButton
                className="product-book-now"
                style={{margin: '0 0 15px 0'}}
                backgroundColor='#98c746'
                label="Call for a Quote"/><br/>
            </div>
          } */}
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
              <li><Link to="/calculator">Calculator</Link></li>
            </ul>
          </div>
        </Paper>
        {this.returnForm()}
      </div>
    );
  }
}

export default Calculator













