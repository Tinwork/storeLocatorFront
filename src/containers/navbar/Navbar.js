import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInput, setVisibilityFilter } from '../../redux/actions';

// Import component
import Input from '../../components/Input/Input';

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
    console.log(this.props);
    this.props.dispatch(addInput(value));
    this.props.dispatch(setVisibilityFilter('SHOW_BY_NAME'));
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

    return (
      <div className="navbar">
        <nav>
          <div className="nav-wrapper">
            <Input fields={inputFields} sendInputValue={this.getInputValue.bind(this)}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps
)(Navbar);