import { useState, useEffect } from "react";

function MuseumPaintingCollection(){
    const museumId = window.location.pathname.split('/')[2]
    const[paintings, setPaintings]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/museums/${museumId}/paintings`)
        .then((resp) => resp.json())
        .then((paintings) => setPaintings(paintings))
    },[])

    return(
        <div id="museum-paintings-container">
            {paintings.map((painting)=>{
                return <div className="painting" key={painting.id}>
                    <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                    <h3 className="painting-title">{painting.title}</h3>
                    <h4>{painting.artist.name}</h4>
                    <p className="painting-description">{painting.description}</p>
                    <h5>Displayed at {painting.museum.name}</h5>
                </div>
            })}
        </div>
    )
}

export default MuseumPaintingCollection;