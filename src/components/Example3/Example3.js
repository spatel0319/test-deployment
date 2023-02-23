import {useState, useEffect } from "react"
import axios from 'axios'

// Make a simple React Application that displays Chuck Norris quotes and retrieves new ones when you click a button
const Example3 = () => {
    useEffect(() => {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => console.log(res))
    }, [])
    return (
        <div>
        </div>
    )
}

export default Example3