import React from "react"
import Joke from "./Joke.js"
import jokesData from "./jokesData"


function JokeApp() {

    const jokeComponents= jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)
        
    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default JokeApp