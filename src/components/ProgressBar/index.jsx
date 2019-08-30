import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class ProgressBar extends Component {
  static propTypes = {
    value: PropTypes.number,
    limit: PropTypes.number
  };

  static defaultProps = {
    value: 0,
    limit: 100
  };

  render() {
    let { value, limit } = this.props;
    let percentage = Math.round((value / limit) * 100);
    if (percentage < 0) percentage = 0;
    return (
      <div className="progress-bar" data-testid="progress-bar">
        <div
          className={percentage > 100 ? "progress-fill limit" : "progress-fill"}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
        <span>{percentage}%</span>
      </div>
    );
  }
}
