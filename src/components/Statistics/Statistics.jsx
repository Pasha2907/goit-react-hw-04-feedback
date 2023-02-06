import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <div>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </List>
    </div>
  );
};

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
