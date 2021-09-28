import React from "react";

const Controls = ({ onGood, onNeutral, onBad }) => (
  <ul className="Feedback__btn-list">
    <li className="Feedback__btn-item">
      <button type="button" className="Feedback__btn" onClick={onGood}>
        Good
      </button>
    </li>
    <li className="Feedback__btn-item">
      <button type="button" className="Feedback__btn" onClick={onNeutral}>
        Neutral
      </button>
    </li>
    <li className="Feedback__btn-item">
      <button type="button" className="Feedback__btn" onClick={onBad}>
        Bad
      </button>
    </li>
  </ul>
);

export default Controls;
