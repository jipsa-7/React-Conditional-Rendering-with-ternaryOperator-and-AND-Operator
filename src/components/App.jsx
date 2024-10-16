import React from "react";
import Login from "./Login.jsx";
var isLoggedIn = false;
const currentTime = new Date(2020, 12, 2, 13).getHours();
function App() {
  return (
    <div className="container">
      {/** example for ternary operator for checking condition because
       * "if" is a statement which cano=not be used in jsx. Statements
       * should be specified out side and accesed through function.
       *  Only expressions can be written inside the jsx */}
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 ? (
        <h1>Why are you still working</h1>
      ) : (
        <h1>carry on..</h1>
      )}
      {currentTime > 12 ? <h1>Why are you still working</h1> : null}
      {/**We can use null if we don't want to display anything */}
      {currentTime > 12 && <h1>Why are you still working</h1>}{" "}
      {/**And operator can also 
      be used if we don't want to display anything when condition turns false */}
    </div>
  );
}

export default App;
