import React, { Component } from 'react';
import GetApiManager from '../../services/network/ApiManager';
import { connect } from 'react-redux';
import { addStores, resetStores } from '../../redux/actions';
import { isEmpty } from 'lodash';
import { getVisibleStores } from '../../helper/filter';

// import component
import List from '../../components/List/List';

// import css
import './style/index.css';

const endpoint = 'https://ec2-34-245-135-127.eu-west-1.compute.amazonaws.com/rest/V1/storelocator/retailers';

/**
 * Map State To Props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => ({
  stores: getVisibleStores(state.stores, state.visibilityFilter, state.input.value),
  endpoint: state.endpoint
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
    this.state = {
      loading: false,
      endpoint: null,
      error: false
    }
  }

  /**
   * Component Did Update
   */
  componentDidUpdate() {
    // nested if is bad 
    if (!isEmpty(this.props.endpoint))
      if (this.props.endpoint.value !== this.state.endpoint) {
        this.getStoreData(this.props.endpoint);
        this.setState({
          loading: true,
          endpoint: this.props.endpoint.value
        })
      }
  }

  /**
   * Get Store Data
   */
  async getStoreData(end) {
    let endPoint = isEmpty(end.value) ? endpoint : end.value;
    let data = null;
    try {
      data = await this.apiManager.get(endPoint);
      // reset the store if the user change the endpoint
      this.props.dispatch(resetStores());
      // then add the datas back to the store
      this.props.dispatch(addStores(data));
      this.setState({
        loading: false,
        error: false
      });
    } catch(e) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }

  /**
   * Renders
   */
  render() {
    return (
      <div className="sidebarView">
        {isEmpty(this.props.stores) && !this.state.loading ? (
          <blockquote>No store available</blockquote>
        ): (
          <List stores={this.props.stores}/>
        )}

        {this.state.loading && 
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        }

        {this.state.error && 
          <p>Error with the endpoint, please try this endpoint: https://ec2-34-245-135-127.eu-west-1.compute.amazonaws.com/rest/V1/storelocator/retailers</p>
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Detail);