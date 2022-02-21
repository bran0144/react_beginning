import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return (
        <ul>
            <li>First Item</li>
            <li>Second Item</li>
            <li>Third Item</li>
        </ul>
    )
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById("root")
)
