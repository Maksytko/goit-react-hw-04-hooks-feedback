import { useState } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return Math.floor((good * 100) / total);
  }

  function onLeaveFeedback(event) {
    switch (event.target.name) {
      case "good":
        return setGood(good + 1);
      case "neutral":
        return setNeutral(neutral + 1);
      case "bad":
        return setBad(bad + 1);
      default:
        return;
    }
  }

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={[good, neutral, bad]}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}

export default Feedback;
