import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/Marker/Marker';
import Modal from '../../components/Modal/Modal';
import { getVisibleStores } from '../../helper/filter';

// Import redux components
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

// import style
import './style/index.css';

// Google map API Key
const API_KEY = 'AIzaSyDgIM7Hcp_ITaYxN3oUTUyJE-cnS-7cTeE';

/**
 * Map State To Props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => ({
  stores: getVisibleStores(state.stores, state.visibilityFilter, state.input.value)
})

/**
 * Map Component
 */
class Map extends Component {
  /**
   * Constructor
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      retailer: null,
      // this is not a good practice but...
      modalOpen: false
    };
  }

  // Static props regarding the center of the map
  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 2.333333
    },
    zoom: 12
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
          lat={parseFloat(store.retailer.latitude)}
          lng={parseFloat(store.retailer.longitude)}
          retailer={store}
          setStore={this.getStore.bind(this)}
        />
      );
    });
  }

  /**
   * Get Marker Address Id
   * 
   * @param {String} addressId 
   */
  getStore(retailer) {
    this.setState({
      retailer,
      modalOpen: !this.state.modalOpen
    });
  }

  resetModalState() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
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
        <Modal store={this.state.retailer} modalStatus={this.state.modalOpen} setModalState={this.resetModalState.bind(this)}/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Map);
