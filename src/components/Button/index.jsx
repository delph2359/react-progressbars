import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { text, onClick } = this.props;
    return (
      <button className="button" onClick={onClick} data-testid="button">
        {text}
      </button>
    );
  }
}
