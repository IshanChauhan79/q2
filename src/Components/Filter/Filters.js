import React from "react";
import classes from "./Filters.module.css";

function Filters(props) {
  return (
    <div className={classes.Filters}>
      <div className={classes.Filter}>
        <div className={classes.Label}>Type</div>
        <select onChange={props.typeChanged}>
          <option value="All"> All</option>
          <option value="Shirt"> Shirts</option>
          <option value="Pants"> Pants</option>
        </select>
      </div>
      <div className={classes.Filter}>
        <div className={classes.Label}>Color</div>
        <select onChange={props.colorChanged}>
          <option value="All"> All</option>
          <option value="Blue"> Blue</option>
          <option value="Red"> Red</option>
          <option value="Brown"> Brown</option>
          <option value="White"> White</option>
          <option value="LighGray"> LighGray</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
