import React from "react";

function Validation(props) {
  props.storeUserData();
  return (
    <>
      <h3>{props.userData}</h3>
    </>
  );
}

export default Validation;
