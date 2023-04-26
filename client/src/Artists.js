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
                    {console.log(artist)}
                </div>
            })}
        </div>
    )
}

export default Artists;