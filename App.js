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
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    componentDidMount() {
        // mostly commonly used for an API call to get data to display
    }
    componentDidUpdate() {
        
    }
    shouldComponentUpdate(nextProps, nextState) {
        // return true if we want to update
        // return false if we don't want to update
    }
    componentWillUnmount() {
        // to do some kind of clean up before the component disappears
        // maybe remove an event listener?
    }
    static getDerivedStateFromProps(props, state) {
        //should return new updated state based upon the props
        // you may not need derived state 
    }
    getSnapshotBeforeUpdate() {
        // creates a backup of current way things are
    }

    render() {
        const date = new Date();
        this.myMethod()
        // inline styling goes here (and conditional rendering)
        return (
            <div >
                <h1>Is state import to know? {this.state.answer}</h1>
                <ChildComponent answer={this.state.answer}/>
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