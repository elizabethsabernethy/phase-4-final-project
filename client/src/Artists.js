import { useState, useEffect } from "react"
import Artist from "./Artist"

function Artists({showArtistPaintings}){
    const[artists, setArtists] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3000/artists')
      .then((resp) => resp.json())
      .then((artists) => setArtists(artists))
  },[])

    return(
        <div>
            <div className="name-container">
                <h1>Featured Artists</h1>
            </div>
            <div id="artists-container">
            {artists.map((artist)=>{
                console.log(artist.id)
                return <Artist artist={artist} showArtistPaintings={showArtistPaintings} key={artist.id}/>
            })}
        </div>
        </div>
        
    )
}

export default Artists;