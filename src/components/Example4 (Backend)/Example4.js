import {useState, useEffect} from 'react'
import axios from 'axios'
import "./Example4.css"

const Example4 = () => {
    const [fruitName, setFruitName] = useState("banana")
    const [fruitColor, setFruitColor] = useState("yellow")

    function orange() {
        //axios.get("https://cs373-backend.uc.r.appspot.com/test2")
        axios.get("/test2")
            .then(res => {
                setFruitName(res.data)
                setFruitColor("orange")
            })
            .catch(err => console.log(err))
    }

    function banana() {
        setFruitName("banana")
        setFruitColor("yellow")
    }

    function apple() {
        //axios.get("https://cs373-backend.uc.r.appspot.com/test1")
        axios.get("/test1")
            .then(res => {
                setFruitName(res.data)
                setFruitColor("red")
            })
            .catch(err => console.log(err))
    }

    return(
        <div style = {{width:"100%", height: "100vh", textAlign: "center", backgroundColor: fruitColor}}>
            <h1>{fruitName}</h1>
            {fruitName != "apple" ? <div><button onClick = {apple} style = {{backgroundColor: "#ffcccb"}} id="button4">apple</button><br/><br/></div> : null}
            {fruitName != "orange" ? <div><button onClick = {orange} style = {{backgroundColor: "#ffd580"}} id="button4">orange</button><br/><br/></div> : null}
            {fruitName != "banana" ? <div><button onClick = {banana} style = {{backgroundColor: "#ffffe0"}} id="button4">banana</button><br/><br/></div> : null}
        </div>
    )
}

export default Example4