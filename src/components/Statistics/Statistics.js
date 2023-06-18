import PropTypes from "prop-types";
import React, { Component } from 'react';
import css from './Statistics.module.css'


class Statistics extends Component {
    
    render() {
        const { good, neutral, bad, total, positisveFeedback } = this.props;
        return (
        <div>
            <ul className={css['feedback-list']}>
                <li className={css['list-text']}>Good: {good}</li>
                <li className={css['list-text']}>Neutral: {neutral}</li>
                <li className={css['list-text']}>Bad: {bad}</li>
                <li className={css['list-text']}>Total: {total}</li>
                <li className={css['list-text']}>
                    Positive feedback: {positisveFeedback}%
                </li>
            </ul>
        </div>
        );
    }
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;

