import React, { Component } from 'react';
import GetApiManager from '../../services/network/ApiManager';
import { connect } from 'react-redux';
import { addStores } from '../../redux/actions';
import { isEmpty } from 'lodash';

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
  console.log(filter);
  switch (filter) {
    case 'SHOW_ALL':
      return stores;
    case 'SHOW_BY_NAME':
      return stores.filter(s => s.retailer.includes(criteria));
    case 'SHOW_BY_LOCATION':
      return stores.filter(s => s.city === criteria.toLowerCase());
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
  stores: getVisibleStores(state.stores, state.visibilityFilter)
});

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
      <div className="sidebarView">
        {isEmpty(this.props.stores) ? (
          <p>No store available</p>
        ): (
          <List stores={this.props.stores}/>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Detail);