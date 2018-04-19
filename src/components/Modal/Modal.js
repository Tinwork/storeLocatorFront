import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { getWeekNumber } from '../../helper/week';

// import style
import './style/index.css';

// Date
const date = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

/**
 * Modal
 */
export default class Modal extends Component {
  /**
   * Get List Template
   */
  getListTemplate() {
    if (isEmpty(this.props.store)) {
      return;
    }

    // inner counter
    let daysCounter = 0;
    // copy the store
    const storeOpening = this.props.store.time_slot;
    // just get some datas for the demo but getWeekNumber return the right week number
    const week  = getWeekNumber() + 1;
    // loop threw the elements
    const element = [];
    // loop threw the store
    for (let idx = 0; idx < storeOpening.length; idx++) {
      const weekIdx = parseInt(storeOpening[idx].week_index);
      if (weekIdx === week) {
        element.push(
          <tr key={idx}>
            <td>{date[daysCounter]} - {storeOpening[idx].day}</td>
            <td>{storeOpening[idx].opened_at}</td>
            <td>{storeOpening[idx].closed_at}</td>
          </tr>
        );
        daysCounter++;
      }
    }

    if (element.length < date.length) {
      this.aggregateElements(daysCounter, element);
    }

    return element;
  }

  /**
   * Aggregate Elements
   * 
   * @param {Number} idx 
   * @param {Array} element 
   */
  aggregateElements(idx, element) {
    for (let i = idx; i < date.length; i++) {
      element.push(
        <tr key={i}>
          <td>{date[i]}</td>
          <td>Close</td>
          <td>Close</td>
        </tr>
      );
    }
  }

  /**
   * Render
   * 
   * /!\ Note that there should be a table component but...
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
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Open at</th>
                <th>Close at</th>
              </tr>
            </thead>
            <tbody>
              {this.getListTemplate()}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => {this.props.setModalState()}}>Close</a>
        </div>
      </div>
    );
  }
}