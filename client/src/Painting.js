import { useState } from "react"

function Painting({painting}){

    const[img, setImg]= useState(painting.img_url)

    return(
        <div className="painting">
            <img className="painting-img" src={img} alt={painting.title} onError={()=> setImg("https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png")} width="350px" height="250px"></img>
            <h3 className="painting-title">{painting.title}</h3>
            <p className="painting-description">{painting.description}</p>
        </div>       
    )
}

export default Painting