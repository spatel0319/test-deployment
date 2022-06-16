import axios from 'axios'
import {useState, useEffect} from 'react'

import "./Doggo.css"

const Doggo = (props) => {
    const [images, setImages] = useState([])
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        if (props.numDoggos <= 48 && props.numDoggos % 3 === 0) {
            axios.get('https://api.thedogapi.com/v1/images/search?api_key=5e58086f-7f26-458e-a7d7-eee2104735e2&limit=' + props.numDoggos, {"Access-Control-Allow-Origin": "*"})
                .then(res => {
                    setImages(res.data.map((image, indice) => {
                        return (
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img id={indice} className = "doggoImage" src = {image.url} alt="Cool Doggy" />
                        </div>)
                    }))
                })
                .catch(err => console.log(err))
        }
    }, [props.numDoggos, trigger])

    return (
        <div className = "container-fluid" style = {{textAlign: "center"}}>
            <button type="button" onClick = {() => {setTrigger(trigger + 1)}} className="btn btn-success" id = "moreDogs">More Doggos</button>
            <div className = "row">
                {images}
            </div>
        </div>
    )
}

export default Doggo