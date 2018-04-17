import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

/**
 * Input Component
 */
export default class Input extends Component {
  render() {
    const classes = this.props;
    const isLabelEmpty = isEmpty(classes.fields.label);

    return (
      <div className="input-field">
        <input type={classes.fields.type} placeholder={classes.fields.placeholder}/>
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