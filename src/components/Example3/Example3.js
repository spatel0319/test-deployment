import {useState, useEffect } from "react"
import axios from 'axios'

const Example3 = () => {
    useEffect(() => {
        axios.get("https://api.chucknorris.io/jokes/random")
    }, [])
    return (
        <div>
        </div>
    )
}

export default Example3