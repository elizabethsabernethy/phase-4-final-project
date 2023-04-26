import { useState, useEffect } from "react"

function Artists(){
    const[artists, setArtists] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3000/artists')
      .then((resp) => resp.json())
      .then((artists) => setArtists(artists))
  },[])

    return(
        <div id="artists-container">
            {artists.map((artist)=>{
                return <div className="artist" key={artist.id}>
                    <h3 className="artist-name">{artist.name}</h3>
                    <p className="artist-username">@{artist.username}</p>
                    <button className="view-paintings">View ({artist.paintings.length}) paintings</button>
                    <p className="artist-museums">Paintings on display at: {artist.name}</p>
                </div>
            })}
        </div>
    )
}

export default Artists;