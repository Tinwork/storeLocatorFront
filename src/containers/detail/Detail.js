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
    this.state = {
      loading: true
    }
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
      data = await this.apiManager.get('https://ec2-34-245-135-127.eu-west-1.compute.amazonaws.com/rest/V1/storelocator/retailers');
      this.props.dispatch(addStores(data));
      this.setState({
        loading: false
      });
    } catch(e) {
      this.setState({
        loading: false
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
          <p>No store available</p>
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
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(Detail);