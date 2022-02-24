import React from "react";
import productsData from "./productsData"

function ProductApp() {
    return (
        <div>
            const productComponents = productsData.map(product => <Product key={product.id} name={product.name} />)
        </div>
    )
}    return (
    <div>
        {productComponents}
    </div>
)

export default ProductApp