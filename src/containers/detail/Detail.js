import React, { Component } from 'react';
import GetApiManager from '../../services/network/ApiManager';
import { connect } from 'react-redux';
import { addStores } from '../../redux/actions';
import { isEmpty } from 'lodash';
import { getVisibleStores } from '../../helper/filter';

// import component
import List from '../../components/List/List';

// import css
import './style/index.css';

/**
 * Map State To Props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => ({
  stores: getVisibleStores(state.stores, state.visibilityFilter, state.input.value)
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
      data = await this.apiManager.get('https://demomagento.local/rest/V1/storelocator/retailers');
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