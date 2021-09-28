import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";
import Controls from "./Controls";

class Feedback extends React.Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  updateNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  updateBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Feedback">
        <h1 className="Feedback__title">Please leave feedback</h1>
        <Controls
          onGood={this.updateGood}
          onNeutral={this.updateNeutral}
          onBad={this.updateBad}
        />
        <h2 className="Feedback__statistics">Statistics</h2>
        <ul className="Feedback__list">
          <li className="Feedback__item">
            <span className="Feedback__value">Good: {this.state.good}</span>
          </li>
          <li className="Feedback__item">
            <span className="Feedback__value">
              Neutral: {this.state.neutral}
            </span>
          </li>
          <li className="Feedback__item">
            <span className="Feedback__value">Bad: {this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}

// Feedback.propTypes{

// }

export default Feedback;
