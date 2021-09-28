import React from "react";
import ClassComponents from "./components/classComponents";
import FunComponents from "./components/funComponents";
class Kingdom extends React.Component {
  render() {
    return (
      <>
        <h1 style={{textAlign:"center"}}>Animals</h1>
        <ClassComponents />
        <h1 style={{textAlign:"center"}}>Birds</h1>

        <FunComponents />
      </>
    );
  }
}

export default Kingdom;
