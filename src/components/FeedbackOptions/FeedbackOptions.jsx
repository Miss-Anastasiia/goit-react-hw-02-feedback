import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);

  return (
    <ul className={`list ${css.feedbackList}`}>
      {stateArr.map(option => (
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
