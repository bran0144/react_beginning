import React from "react"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    }else {
        timeOfDay = "night"
    }


    return (
        <h1>Good {timeOfDay}!</h1>
    )
}
export default App