import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInput, setVisibilityFilter, addEndpoint } from '../../redux/actions';

// Import component
import Input from '../../components/Input/Input';

// Import css
import './style/index.css';

/**
 * Map State To Props
 * 
 * @param {String} value 
 */
const mapStateToProps = value => ({
  input: value
});

/**
 * Navbar container
 */
class Navbar extends Component {
  
  /**
   * Get Input Value
   * 
   * @param {String} value
   */
  getInputValue(value) {
    this.props.dispatch(addInput(value));
    this.props.dispatch(setVisibilityFilter('SHOW_BY_NAME'));
  }

  /**
   * Get Endpoint Value
   * 
   * @param {String} value 
   */
  getEndpointValue(value) {
    this.props.dispatch(addEndpoint(value));
  }

  /**
   * Render
   */
  render() {
    const inputFields = {
      label: {
        name: 'search'
      },
      type: 'search',
      placeholder: 'Search your store',
    }

    const endpointFields = {
      label: {
        name: 'code',
      },
      type: 'search',
      placeholder: 'Paste your endpoint'
    };

    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <Input fields={inputFields} sendInputValue={this.getInputValue.bind(this)}/>
            <Input fields={endpointFields} sendInputValue={this.getEndpointValue.bind(this)}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Navbar);