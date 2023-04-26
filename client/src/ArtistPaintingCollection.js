import { useState, useEffect } from "react";

function ArtistPaintingCollection(){
    const artistId = window.location.pathname.split('/')[2]
    const[paintings, setPaintings]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/artists/${artistId}/paintings`)
        .then((resp) => resp.json())
        .then((paintings) => setPaintings(paintings))
    },[])

    const artistName = paintings.map((painting)=>{
        return painting.artist.name
    })

    return(
        <div>
            <div className="name-container">
                <h1>Paintings by {artistName[0]}</h1>
            </div>
            <div id="artist-paintings-container">
            {paintings.map((painting)=>{
                return <div key={painting.id}>
                    <div className="painting">
                        <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                        <h5>Displayed at {painting.museum.name}</h5>
                    </div>
                </div>
            })}
            </div>
        </div>
    )
}

export default ArtistPaintingCollection;