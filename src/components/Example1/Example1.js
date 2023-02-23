import {useState, useEffect} from 'react'
import './Example1.css'

const Example1 = (props) => {

    const [count, setCount] = useState(0)
    const [textColor, setTextColor] = useState("black")
    const [increment, setIncrement] = useState(1)

    useEffect(() => {
        // TODO: specify text color and increment
        if (props.color == 'blue') {
            setTextColor('blue')
        } else if (props.color == 'red') {
            setTextColor('red')
        }

        if (props.increment != null) {
            setIncrement(props.increment)
        }
    }, [])
    // useEffect dependencies

    return (
        <div className = 'count_container'>
            <h2 style={{color: textColor}}>Current Count: {count}</h2>
            <button onClick = {() => {setCount(count + increment)}}>Increment Count</button>
        </div>
    )
}

export default Example1