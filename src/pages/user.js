import React, { useContext } from "react";
import { userDetailContext } from "../context";

const ChildComponent = () => {
  var contextData = useContext(userDetailContext);
  return (
    <div>
      <h2>This is Child Component</h2>
      <h4>User Name: {contextData?.name}</h4>
      <h4>User Age: {contextData?.age}</h4>
    </div>
  );
};

export default ChildComponent;
