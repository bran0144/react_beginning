import React from "react"

function Joke(props) {
    <div className="joke">
        <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
        <p>Punchline: {props.punchine}</p>
        <hr />
    </div>
}

export default Joke