import axios from 'axios'
import {useState, useEffect} from 'react'

import "./Doggo.css"

const Doggo = (props) => {
    // to store retrieved images containers
    const [images, setImages] = useState([])

    // to trigger another API request (see useEffect)
    const [trigger, setTrigger] = useState(0)

    // Important React Hook (gets called once or whenever a variable changes - must be listed as a parameter)
    useEffect(() => {
        // API has a limit of 50 images.
        // negative number!!!
        if (props.numDoggos <= 50) {
            // API Request. Add num images and header to enable CORS.
            // PROMISE
            axios.get('https://api.thedogapi.com/v1/images/search?api_key=5e58086f-7f26-458e-a7d7-eee2104735e2&limit=' + props.numDoggos, {"Access-Control-Allow-Origin": "*"})
                .then(res => {
                    // data: [<DogImage>, <DogImage>, <DogImage>]
                    // async request (.then)
                    // iterate through images and map each image to a corresponding container
                    setImages(res.data.map((image, indice) => {
                        return (
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <img id={indice} className = "doggoImage" src = {image.url} alt="Cool Doggy" />
                        </div>)
                    }))
                })
                .catch(err => console.log(err))
                // important to have a catch for the promise

                // imgages state variable [<div>..<div>]
        }
    }, [props.numDoggos, trigger])
    // dependencies of useEffect

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