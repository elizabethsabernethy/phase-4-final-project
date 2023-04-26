import { useState, useEffect } from "react"
import Artist from "./Artist"

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
                return <Artist artist={artist} key={artist.id}/>
            })}
        </div>
    )
}

export default Artists;