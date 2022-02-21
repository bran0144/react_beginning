import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
            <h1>Katie</h1>
            <p>Hackbright grad learning React</p>
        <ul>
            <li>1. Greece</li>
            <li>2. St. Lucia</li>
            <li>3. Ireland</li>
        </ul>
        </div>
    )
}

ReactDOM.render(
    <MyInfo />, 
    document.getElementById("root")
)
