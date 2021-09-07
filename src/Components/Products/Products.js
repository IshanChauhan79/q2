import React from "react";
import classes from "./Products.module.css";
import products from "../../Data/products";

function Products(props) {
  const productList = products.map((el, i) => {
    if (
      (props.type === el.type || props.type === "All") &&
      (props.color === el.color || props.color === "All")
    ) {
      return (
        <div className={classes.Product} key={i}>
          <img src={process.env.PUBLIC_URL + `/images/${el.img}`} alt="" />
          <div className={classes.Title}>{el.name}</div>
          <div className={classes.Price}>Rs {el.price} </div>
        </div>
      );
    }
  });
  console.log(productList.length);
  return <div className={classes.Products}>{productList}</div>;
}

export default Products;
