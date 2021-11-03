import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Validator.module.css";

const Validator = ({ showalert, isblank, ...props }) => {
    return (
          <FontAwesomeIcon
            icon={
              showalert === true
                ? ["fas", "exclamation-circle"]
                : showalert === false && isblank === true
                ? ["fas", "question-circle"]
                : ["fas", "check-circle"]
            }
            size="sm"
            className={
              showalert === true
                ? styles.errorIcon
                : showalert === false && isblank === true
                ? styles.icon
                : styles.validIcon
            }
          />
    );
};

Validator.propTypes = {
  showalert: PropTypes.bool,
  isblank: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Validator;
