import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import './assets/css/calculator_css.css'

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory_total: 0,
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
    let total = 0;
    let updatedItem = {};
    updatedItem[itemKey] = {
      ...this.state.inventory_types[itemKey],
      quantity: event.target.value
    };
    let newState = {
      ...this.state,
      inventory_types: {
        ...this.state.inventory_types,
        ...updatedItem
      }
    };
    for (let item in newState.inventory_types) {
      total = total + (newState.inventory_types[item].quantity * newState.inventory_types[item].value);
    }
    newState = {
      ...newState,
      inventory_total: total,
    }
    this.setState(newState);
  }

  returnForm() {
    let items = [];
    let container = <div>
      <div>Total: {this.state.inventory_total}</div>
      {items}
    </div>;
    for (let item in this.state.inventory_types) {
      items.push(
        <div key={item}>
          <label>{item}</label>
          <input value={this.state.inventory_types[item].quantity} onChange={(e) => this.updateQuantity(item, e)} type="number" />
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
