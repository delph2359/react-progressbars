import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class ProgressBar extends Component {
  static propTypes = {
    percentage: PropTypes.number,
    limit: PropTypes.number
  };

  static defaultProps = {
    percentage: 0,
    limit: 100
  };

  render() {
    let { percentage, limit } = this.props;
    if (percentage < 0) percentage = 0;
    return (
      <div className="progress-bar" data-testid="progress-bar">
        <div
          className={
            percentage > limit ? "progress-fill limit" : "progress-fill"
          }
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
        <span>{percentage}%</span>
      </div>
    );
  }
}
