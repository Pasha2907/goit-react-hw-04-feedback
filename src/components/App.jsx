import React, { useState } from 'react';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = value => {
    setFeedback(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  };

  const countTotalFeedback = () => {
    const totalFeedbacks = Object.values(feedbacks).reduce(
      (prevValue, total) => prevValue + total,
      0
    );
    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (feedbacks.good / countTotalFeedback()) * 100
    );
    return feedbacks.good ? positiveFeedbackPercentage : 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statictics
            good={feedbacks.good}
            bad={feedbacks.bad}
            neutral={feedbacks.neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
