import React from "react"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

function App() {
    const firstName = "Katie"
    const lastName = "Gott"
    return (
        <div> 
            <h1>Hello {firstName + " " + lastName}!</h1>
           <input type="checkbox" />
           <p>Placeholder</p> 
           <input type="checkbox" />
           <p>Placeholder</p> 
           <input type="checkbox" />
           <p>Placeholder</p> 
        </div>
    )
}
export default App