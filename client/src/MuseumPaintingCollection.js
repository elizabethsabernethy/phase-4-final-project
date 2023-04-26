import { useState, useEffect } from "react";

function MuseumPaintingCollection(){
    const museumId = window.location.pathname.split('/')[2]
    const[paintings, setPaintings]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/museums/${museumId}/paintings`)
        .then((resp) => resp.json())
        .then((paintings) => setPaintings(paintings))
    },[])

    const museumName = paintings.map((painting)=>{
        return painting.museum.name
    })

    return(
        <div>
             <div id="museum-name-container">
                    <h1>{museumName} Collection</h1>
            </div>
            <div id="museum-paintings-container">
            {paintings.map((painting)=>{
                return <div  key={painting.id}>
                    <div className="painting">
                        <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <h4>{painting.artist.name}</h4>
                        <p className="painting-description">{painting.description}</p>
                    </div>
                </div>
            })}
            </div>
        </div>
    )
}

export default MuseumPaintingCollection;