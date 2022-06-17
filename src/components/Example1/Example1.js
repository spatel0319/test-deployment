import {useState, useEffect} from 'react'

const Example1 = (props) => {

    const [count, setCount] = useState(0)
    const [textColor, setTextColor] = useState("black")

    useEffect(() => {
        // change text color if specified
        if (props.color === "r") {
            setTextColor("red")
        } else if (props.color === "b") {
            setTextColor("blue")
        } else if (props.color === "g") {
            setTextColor("green")
        }

    }, [props.color])
    // useEffect dependencies

    return (
        <div>
            <h2 style={{color: textColor}}>Current Count: {count}</h2>
            <button onClick = {() => {setCount(count + 1)}}>Increment Count</button>
        </div>
    )
}

export default Example1