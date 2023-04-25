import { useEffect, useState } from "react";

function Paintings(){
    const[paintings, setPaintings] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/paintings')
        .then((resp) => resp.json())
        .then((paintings) => setPaintings(paintings))
    },[])

    return(
        <div id="paintings-container">
            {paintings.map((painting)=>{
                return <div className="painting" key={painting.id}>
                    <h3 className="painting-title">{painting.title}</h3>
                    <h4>By {painting.artist.name}</h4>
                    <p className="painting-description">{painting.description}</p>
                    <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                    <h4>Displayed at {painting.museum.name}</h4>
                </div>
            })}
        </div>
    )
}

export default Paintings;