import React from "react";
import classes from "./Products.module.css";
import products from "../../Data/products";

function Products() {
  const productList = products.map((el,i) => (
    <div className={classes.Product} key={i}>
      <img
        src={process.env.PUBLIC_URL + `/images/${el.img}`}
        alt=""
      />
      <div className={classes.Title}>{el.name}</div>
      <div className={classes.Price}>RS. {el.price} </div>
    </div>
  ));
  return (
    <div className={classes.Products}>
      {productList}
    </div>
  );
}

export default Products;
