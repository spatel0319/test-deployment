import {useState, useEffect} from 'react'
import './Example1.css'

const Example1 = (props) => {

    const [count, setCount] = useState(0)

    return (
        <div className = 'count_container'>
            <h2 style={{color: props.color}}>Current Count: {count}</h2>
            <button onClick = {() => {setCount(count + props.increment)}}>Increment Count</button>
        </div>
    )
}

export default Example1