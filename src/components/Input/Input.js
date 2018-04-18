import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

/**
 * Input Component
 */
export default class Input extends Component {
  /**
   * Constructor
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  /**
   * Listen Input
   */
  listenInput(e) {
    if (e.key.toLowerCase() !== 'enter')
      return;

    this.props.sendInputValue(e.target.value);
  }

  /**
   * Render
   */
  render() {
    const classes = this.props;
    const isLabelEmpty = isEmpty(classes.fields.label);

    return (
      <div className="input-field">
        <input type={classes.fields.type} placeholder={classes.fields.placeholder} onKeyPress={this.listenInput.bind(this)}/>
        {!isLabelEmpty &&
          <label className="label-icon" htmlFor={classes.fields.label.name}>
            <i className="material-icons">{classes.fields.label.name}</i>
          </label>
        }
        <i className="material-icons">close</i>
      </div>
    );
  }
}

Input.propTypes = {
  fields: {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: {
      name: PropTypes.string,
    }
  }
};