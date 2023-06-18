import PropTypes from "prop-types";
import React from 'react';
import css from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((option, index) => {
            return <button key={index} type="button" className={css.btn} onClick={onLeaveFeedback}>
                {option}
            </button>
            }) 
            }
        </div> 
    )

}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions
