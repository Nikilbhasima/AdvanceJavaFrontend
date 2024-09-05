import React from 'react';
import "./Button.css";

function CustomButton(props) {
  const buttonStyle = {
    color: props.buttonName.fontColor,
    backgroundColor: props.buttonName.backGround,
  };

  return (
    <button 
      className={`click-btn ${props.buttonName.name}`} 
      style={buttonStyle}
    >
      {props.buttonName.name}
    </button>
  );
}

export default CustomButton;