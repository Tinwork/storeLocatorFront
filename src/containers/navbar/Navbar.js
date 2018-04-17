import React, { Component } from 'react';

// import material ui next component

// Import component
import Input from '../../components/Input/Input';

/**
 * Navbar container
 */
export default class Navbar extends Component {
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
            <form>
              <Input fields={inputFields}/>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
