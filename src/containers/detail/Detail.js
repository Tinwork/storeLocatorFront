import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStores } from '../../redux/actions';
import GetApiManager from '../../services/network/ApiManager';


// import component
import List from '../../components/List/List';

/**
 * Get Visible Stores
 * 
 * @param {Array} stores 
 * @param {String} filter
 * @return {Array} stores
 */
const getVisibleStores = (stores, filter, criteria) => {
  switch (filter) {
    case 'SHOW_ALL':
      return stores;
    case 'SHOW_BY_NAME':
      return stores.filter(s => s.retailer.includes(criteria));
    case 'SHOW_BY_LOCATION':
      return stores.filter(s => s.city == criteria.toLowerCase());
    default:
      return stores;
  }
};

/**
 * Detail
 */
class Detail extends Component {
  /**
   * Constructor
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.apiManager = GetApiManager();
  }

  /**
   * Component Did Mount
   */
  componentDidMount() {
    this.getStoreData();
  }

  /**
   * Get Store Data
   */
  async getStoreData() {
    let data = null;
    try {
      data = await this.apiManager.get('https://demomagento.local/rest/V1/storelocator/retailer/1');
      this.props.dispatch(addStores(data));
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * Renders
   */
  render() {
    return (
      <h1>Call detail view</h1>
    )
  }
}

export default connect()(Detail);