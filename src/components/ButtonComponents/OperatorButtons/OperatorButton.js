import React from "react";

const OperatorButton = (props) => {
  return (
    <>
    <button className="btnOperator" onclick={()=>props.operatorFunction(props.operator.value)}>{props.operators.char}</button>  
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
