import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.Feedback__list}>
    {options.map((option) => (
      <button
        type="button"
        className={s.Feedback__btn}
        key="option"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
