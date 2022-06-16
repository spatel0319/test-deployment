import {useState, useEffect} from 'react'
import axios from 'axios'
import "./Example2.css"

const Example2 = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(-1)

    function calculateAge() {
        if (firstName != "") {
            axios.get("https://api.agify.io?name=" + firstName)
                .then(res => {
                    setAge(res.data.age)
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='ex2'>
            {firstName != ""? <h1>👋 Hello {firstName + " " + lastName}</h1> : null}
            <input 
                type = "text"
                placeholder = 'First Name'
                value = {firstName}
                onChange = {(event) => {setFirstName(event.target.value)}}
            ></input>
            <br />
            <input 
                type = "text"
                placeholder = 'Last Name'
                value = {lastName}
                onChange = {(event) => {setLastName(event.target.value)}}
            ></input>
            <br />
            <br />
            <button type="button" onClick = {calculateAge} className="btn btn-primary">Calculate Your Name Age!</button>
            <br />
            <br />
            {age != -1? <h2>🤔 You are {age} years old!</h2> : null}
        </div>
    )
}

export default Example2