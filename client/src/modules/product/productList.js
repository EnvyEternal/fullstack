import React from "react";

const ProductList = (props) => {
    const {u} = props;
        return(
            <li>
               <ul>{u.id}</ul>
               <ul>{u.name}</ul>
               <ul>{u.price}$</ul>
            </li>
        );
}

export default ProductList