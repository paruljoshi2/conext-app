import React, { useState } from "react";
import { userDetailContext } from "../context";
import ChildComponent from "./user";

const UserDetailsComponent = () => {
  var [userDetails] = useState({
    name: "Mayank",
    age: 30,
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      <hr />
      <ChildComponent />
    </userDetailContext.Provider>
  );
};

export default UserDetailsComponent;
