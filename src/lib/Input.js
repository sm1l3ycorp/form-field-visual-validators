import React from "react";
import PropTypes from "prop-types";
import Validator from "./Validator";

const Input = ({ iconData, setIconData, ...props }) => {
  return (
    <>
      <input id={props.name} className="form-control" {...props} 
      onBlur={(e) => {
        if (e.target.value !== '' && e.target.value.length >= 8) {
            setIconData({showAlert: false, isBlank: false})
        }
        else if (e.target.value !== '' && e.target.value.length <= 8) {
            setIconData({ showAlert: true, isBlank: false }) 
        } else if (e.target.value.length === 0) {
            setIconData({ showAlert: false, isBlank: true }) 
        }
      }}/>
        <Validator {...props} /><br />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconData: PropTypes.object,
  setIconData: PropTypes.func.isRequired,
};

export default Input;
