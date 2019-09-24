import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btnSpecial" onclick={()=> props.specialFunction(props.specials)}> {props.specials} </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
