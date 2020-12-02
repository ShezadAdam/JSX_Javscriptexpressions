import React from "react";
import ReactDOM from "react-dom";

const fname = "Shezad";
const lname = "Ahmed";
const luckyno = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p> Your lucky number is {luckyno}</p>
  </div>,
  document.getElementById("root")
);
