import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

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
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
