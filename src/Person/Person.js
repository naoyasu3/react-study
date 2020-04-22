import React from "react";

const person = (props) => {
  return (
    <div>
      <div>
        I 'm {props.name} and I am {props.age} years old!
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default person;
