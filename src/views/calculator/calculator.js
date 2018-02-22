import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import TextField from 'material-ui/TextField';

import './assets/css/calculator_css.css'

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

  returnForm() {
    let items = [];
    let container = <div>
      <div>Total: {this.state.inventory_total}</div>
      <div>Size Necessary: {Object.keys(this.state.storage_size_necessary)[0]}</div>
      {items}
    </div>;
    for (let item in this.state.inventory_types) {
      items.push(
        // <div key={item}>
        //   <label>{item}</label>
        //   <input value={this.state.inventory_types[item].quantity} onChange={(e) => this.updateQuantity(item, e)} type="number" />
        //   <div>{this.state.inventory_types[item].quantity * this.state.inventory_types[item].value}</div>
        // </div>
        <div key={item}>
          <TextField 
            floatingLabelText={item}
            value={this.state.inventory_types[item].quantity}
            onChange={(e) => this.updateQuantity(item, e)}
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
        <div>{this.state.inventory_types[item].quantity * this.state.inventory_types[item].value}</div>

        </div>
      );
    }
    return container;
  }

  render() {
    return(this.returnForm());
  }
}

export default Calculator
