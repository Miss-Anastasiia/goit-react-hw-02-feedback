import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={`list ${css.feedbackList}`}>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default FeedbackOptions;
