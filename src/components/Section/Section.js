import PropTypes from "prop-types";
import css from './Section.module.css'

const Section = ({ title, children }) => (
    <div>
        <h2 className={css.title}>{title}</h2>
        {children}
    </div>
);

Section.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Section