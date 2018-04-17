import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * List component
 */
export default class List extends Component {
  
  /**
   * Render
   */
  render() {
    const cls = this.props;
    return (
      <div className="card blue darken-1">
        <div className="card-content white-text">
          <span className="card-title">{cls.title}</span>
          <p>Address: {cls.address}</p>
          <p>City: {cls.city}, Postal code: {cls.postalCode}</p>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.city,
  postalCode: PropTypes.number
};