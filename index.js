import React, {Component} from "react"
import ReactDOM, { render } from "react-dom"
import TodoApp from "./TodoApp"

// ReactDOM.render(
//     <TodoApp />, 
//     document.getElementById("root")
// )


// // #1
// class App extends React.Component {
//     render() {
//     return (
//         <div>
//             <Header username="vschool"/>
//             <Greeting />
//         </div>
//     )
// }
// }

// // #2
// class Header extends React.Component{
//     render() {
//     return (
//         <header>
//             <p>Welcome, {this.props.username}!</p>
//         </header>
//     )
// }
// }

// // #3
// class Greeting extends React.Component {
//     render() {
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }

//     return (
//         <h1>Good {timeOfDay} to you, sir or madam!</h1>
//     )
// }
// }

ReactDOM.render(<TodoApp />, document.getElementById("root"))