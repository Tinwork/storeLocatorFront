import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

/**
 * List component
 */
export default class List extends Component {
  /**
   * Get Component
   * 
   * @return {Array} JsxElement
   */
  getComponent() {
    const stores = this.props.stores;      
    const template = stores.map((store, idx) => {
      console.log(store);
      return (
        <div className="card blue darken-1" key={idx}>
          <div className="card-content white-text">
            <span className="card-title">{store.retailer}</span>
            <p>Street: {store.street}</p>
            <p>City: {store.city}, Postal code: {store.postcode}</p>
          </div>
        </div>
      );
    });

    return template;
  }
  
  /**
   * Render
   */
  render() {
    const stores = this.getComponent();
    return (
      <div>
        {stores}
      </div>
    );
  }
}
