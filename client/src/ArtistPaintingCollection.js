import { useState, useEffect } from "react";

function ArtistPaintingCollection(){
    const artistId = window.location.pathname.split('/')[2]
    const[paintings, setPaintings]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/artists/${artistId}/paintings`)
        .then((resp) => resp.json())
        .then((paintings) => setPaintings(paintings))
    },[])

    return(
        <div>
            {paintings.map((painting)=>{
                return <div>
                <div id="artist-name-container">
                    <h1>Paintings by {painting.artist.name}</h1>
                </div>
                <div id="artist-paintings-container">
                    <div className="painting" key={painting.id}>
                        <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                        <h5>Displayed at {painting.museum.name}</h5>
                    </div>
                </div>
                </div>
            })}
        </div>
    )
}

export default ArtistPaintingCollection;