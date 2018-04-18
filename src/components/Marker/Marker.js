import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import style
import './style/index.css';

// Marker size
const MARKER_SIZE = 20;

/**
 * Marker Component
 */
export default class Marker extends Component {
  
  /**
   * Generate Style
   *
   */
  generateStyle() {
    return {
      position: 'absolute',
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      left: -MARKER_SIZE / 2,
      top: -MARKER_SIZE / 2,
      backgroundColor: '#E85651',
      textAlign: 'center',
      borderRadius: '50% 50% 50% 0',
      transform: 'rotate(-45deg)'
    }
  }

  handleClick(addressId) {
    console.log(addressId);
  }

  /**
   * Render
   */
  render() {
    return (
      <div style={this.generateStyle()} onClick={this.handleClick.bind(this, this.props.retailer.address_id)} className="marker">
      </div>
    );
  }
}

Marker.propTypes = {
  retailer: PropTypes.object
}