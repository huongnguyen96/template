import React from "react";

function Button(props) {
  console.log(props);
  return (
    <div className="component__button">
      <button className="btn btn-primary">{props.text}</button>
    </div>
  );
}

Button.defaultProps = {
  text: "Click me",
};

export default Button;
