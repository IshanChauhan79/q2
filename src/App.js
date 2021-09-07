import React, { useState } from "react";
import classes from "./App.module.css";
import Filters from "./Components/Filter/Filters";
import Products from "./Components/Products/Products";

function App() {
  const [color, setColor] = useState("All");
  const [type, setType] = useState("All");

  const colorHandler = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };
  const typeHandler = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };

  return (
    <div className={classes.App}>
      <Filters colorChanged={colorHandler} typeChanged={typeHandler} />
      <Products color={color} type={type} />
    </div>
  );
}

export default App;

// import React from "react";
// import classes from  './App.module.css';

// function App() {
//   return (
//     <div className={classes.App}>
//       hello
//     </div>
//   );
// }

// export default App;
