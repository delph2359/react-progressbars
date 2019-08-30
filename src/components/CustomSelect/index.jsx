import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CustomSelect extends Component {
  static propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  render() {
    const { options, onChange } = this.props;
    return (
      <select onChange={onChange} data-testid="custom-select">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    );
  }
}
