import React from "react"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

// function App() {

//     return (
//         <div className="todo-list">
//         <TodoItem />
//         <TodoItem />
//         <TodoItem />
//         </div>
//         // need to wrap in curly braces for the object and again for using JS
//         // can't use background-color - needs to be camelCase
//     )
// }

class App extends React.Component {

    myMethod() {
        // display logic
    }
    render() {
        const date = new Date();
        this.myMethod()
        // inline styling goes here (and conditional rendering)
        return (
            <div className="todo-list">
            <h1>{this.props.whatever}</h1>    
            <TodoItem />
            <TodoItem />
            <TodoItem />
            </div>
        )
    }
}
export default App


    // const date = new Date()
    // const hours = date.getHours()
    // let timeOfDay 
    // const styles = {
    //     fontSize: "30px"}

    // if (hours < 12) {
    //     timeOfDay = "morning"
    //     styles.color = "#04756F"
    // } else if (hours >= 12 && hours < 17) {
    //     timeOfDay = "afternoon"
    //     styles.color = "#2E0927"
    // }else {
    //     timeOfDay = "night"
    //     styles.color = "#D90000"
    // }