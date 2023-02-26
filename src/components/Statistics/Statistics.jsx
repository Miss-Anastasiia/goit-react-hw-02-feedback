import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul className={`${css.container} list`}>
      <li className={css.item}>
        <p>{good}</p>
        <p>Good</p>
      </li>
      <li className={css.item}>
        <p>{neutral}</p>
        <p>Neutral</p>
      </li>
      <li className={css.item}>
        <p>{bad}</p>
        <p>Bad</p>
      </li>
      <li className={css.item}>
        <p>{total}</p>
        <p>Total</p>
      </li>
      <li className={css.item}>
        <p>{positivePercentage}%</p>
        <p>Positive feedback</p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistics;
