// import "../assets/Style/App.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { useState } from "react";
import React from "react";
import { UserContext } from "./UserContext";

// ! import a { } diye import korle akta file theke oi function ke import kore R 
//? import a { } nah dile oi file ta ke import kore 

//* context amader 2 ta dei 1st one is provider and 2nd one is consumer . consumer use na kore useContext  hook use korbo

export default function Component() {

  const [user, setUser] = useState({
    name: "Joy",
    age: 24,
    email: "ychag@example.com",
    pro: "Soft Engineer",
  });

  return (
    <div className="parent">
        
      {/*  UserContext context api ta amader kon kon value dibe eita bole dicche , r provider er majhe bole dicche ke ke eita nite parbe  */}
     
      <UserContext.Provider value={ {user, setUser} }>
        <Component1 />
        <Component2 />
        <Component3 />
      </UserContext.Provider>
    </div>
  );
}
