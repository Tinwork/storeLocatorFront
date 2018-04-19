import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { getWeekNumber } from '../../helper/week';

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
  }

  /**
   * Get List Template
   */
  getListTemplate() {
    if (isEmpty(this.props.store)) {
      return;
    }

    const storeOpening = this.props.store.time_slot;
    // just get some datas for the demo but getWeekNumber return the right week number
    const week  = getWeekNumber() + 1;
    // loop threw the elements
    const element = [];
    for (let idx = 0; idx < storeOpening.length; idx++) {
      const weekIdx = parseInt(storeOpening[idx].week_index);
      if (weekIdx === week) {
        element.push(
          <li className="collection-item" key={idx}>{
            storeOpening[idx].day}: {storeOpening[idx].opened_at} to {storeOpening[idx].closed_at}
          </li>
        );
      }
    }

    return element;
  }

  /**
   * Render
   */
  render() {
    let retailer = null; 
    if (!isEmpty(this.props.store))
      retailer = this.props.store.retailer;
    
    return (
      <div id="modal1" className={this.props.modalStatus ? 'modal open': 'modal close'}>
        <div className="modal-content">
          {!isEmpty(retailer) && 
            <div>
              <h4>{retailer.retailer}</h4>
              <p>{retailer.street}</p>
            </div>
          }
          <ul>
            {this.getListTemplate()}
          </ul>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => {this.props.setModalState()}}>Close</a>
        </div>
      </div>
    );
  }
}