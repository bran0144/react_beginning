import React from "react"
import Joke from "./Joke.js"


function JokeApp() {
    return (
        <div className="jokes">
            <Joke 
                question="What do you call a fish wearing a bowtie?" 
                punchline="Sofishticated."/>
            <Joke 
                question="If April showers bring May flowers, what do May flowers bring?"
                punchline="Pilgrims."/>
            <Joke 
                question="dad joke"
                punchline="ha ha"/>
            <Joke 
                question="dad joke"
                punchline="ha ha"/>
            <Joke 
                question="dad joke"
                punchline="ha ha"/>
        </div>
    )
}

export default JokeApp