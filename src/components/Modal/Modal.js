import React, { Component } from 'react';
import { isEmpty, isNull } from 'lodash';

// import style
import './style/index.css';

/**
 * Modal
 */
export default class Modal extends Component {
  /**
   * Constructor
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      store: null,
      reopen: true
    }
  }

  componentDidUpdate() {
    if (this.props.store !== this.state.store)
      this.toggleModal();
  }

  /**
   * Toggle Modal
   */
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
      store: this.props.store,
      reopen: !this.state.reopen
    });
  }

  /**
   * Render
   */
  render() {
    return (
      <div id="modal1" className={this.state.isOpen ? 'modal open': 'modal close'}>
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => {this.toggleModal()}}>Close</a>
        </div>
      </div>
    );
  }
}