import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={s.Feedback__statistics}>
    <ul className={s.Feedback__list}>
      <li className={s.Feedback__item}>
        <span className={s.Feedback__value}>Good: {good}</span>
      </li>
      <li className={s.Feedback__item}>
        <span className={s.Feedback__value}>Neutral: {neutral}</span>
      </li>
      <li className={s.Feedback__item}>
        <span className={s.Feedback__value}>Bad: {bad}</span>
      </li>
      <li>
        <span className={s.Feedback__value}>Total: {total}</span>
      </li>
      <li>
        <span className={s.Feedback__value}>
          Positive feedback: {positivePercentage}%
        </span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
