import React from "react";
import Product from "./components/Product";
import productsData from "./components/productsData"

function ProductApp() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

}    return (
        <div>
            {productComponents}
        </div>
)

export default ProductApp