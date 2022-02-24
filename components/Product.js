import React from "react"

function Product(props) {
    <div className="product">
        <h2>{props.product.name}</h2>
        <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency:"USD"})}</p>
        <hr />
    </div>
}

export default Product