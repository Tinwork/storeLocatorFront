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
      return (
        <div className="card blue darken-1" key={idx}>
          <div className="card-content white-text">
            <span className="card-title">{store.retailer.retailer}</span>
            <p>Street: {store.retailer.street}</p>
            <p>City: {store.retailer.city}, Postal code: {store.retailer.postcode}</p>
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
