import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker/Marker';

// Import redux components
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// import style
import './style/index.css';

// Google map API Key
const API_KEY = 'AIzaSyDgIM7Hcp_ITaYxN3oUTUyJE-cnS-7cTeE';

/**
 * Get Stores
 * 
 * @param {Array} stores 
 * @param {String} filter 
 */
const getStores = (stores, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return stores;
    default:
      return stores;
  }
};

/**
 * Map State To Props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => ({
  stores: getStores(state.stores, state.visibilityFilter)
})

/**
 * Map Component
 */
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 2.333333
    },
    zoom: 11
  };

  /**
   * Get Marker Component
   * 
   * @return {Array} JsxElement
   */
  getMarkerComponent() {
    const stores = this.props.stores;
    if (isEmpty(stores))
      return;

    return stores.map((store, idx) => {
      return (
        <Marker
          key={idx}
          lat={parseFloat(store.latitude)}
          lng={parseFloat(store.longitude)}
          retailer={store}
        />
      );
    });
  }

  /**
   * Render
   */
  render() {
    const marker = this.getMarkerComponent();

    return (
      <div className="map">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {marker}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Map);
