import React, { useState  } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);
  

  const handleClickBtn = (e) => {
    const nameBtn = e.target.textContent;
    switch (nameBtn) {
      case "good":
        setGoodFeedback((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutralFeedback((prevState) => prevState + 1);
        break;
      case "bad":
        setBadFeedback((prevState) => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
  return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return Math.round(good * 100 / countTotalFeedback());
  }

  
  return (
      <div > 
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleClickBtn}
            />
          </Section>
        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? 
            (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positisveFeedback={countPositivePercentage()}
            />
            ) : (<Notification message="There is no feedback!" />
          )}
          </Section>
      </div>
    );
}


// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  
//   handleClickBtn = (e) => {
//     const nameBtn = e.target.textContent;
//     this.setState((prevState) => {
//       return {
//         [nameBtn]: prevState[nameBtn] + 1,
//       };
//     },
//   );
//   };

//   countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositivePercentage = () => {
//     return Math.round(this.state.good * 100 / this.countTotalFeedback());
//   }
  
//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div > 
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleClickBtn}
//             />
//           </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? 
//             (<Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positisveFeedback={this.countPositivePercentage()}
//             />
//             ) : (<Notification message="There is no feedback!" />
//           )}
//           </Section>
//       </div>
//     );
//   }
// }

export default App;