import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Museum({museum}){
const[show, setShow] = useState(false)

const navigate = useNavigate()

function click(){
    navigate(`${museum.id}/paintings`)
}

function showArtists(){
    setShow((show)=> !show)
}

    return(
        <div className="museum">
            <h3 className="museum-name">{museum.name}</h3>
            <h4 className="museum-location">{museum.location}</h4>
            <img className="museum-img" src={museum.img_url} alt={museum.name} width="350px"></img>
            {museum.paintings.length > 0? 
            <div>
                <button className="view-paintings" onClick={click}>View ({museum.paintings.length}) Paintings</button>
                <button onClick={showArtists} className="view-paintings">{!show ? 'View Featured Artists' : 'Hide Artists'}</button>
            <div hidden={!show}>
                {museum.artists.map((artist)=>{
                    return <div key={artist.id}>
                        <h4>{artist.name}</h4>
                        </div>
                })}
            </div>
            </div>: 
            <p>Empty Collection</p>}
        </div>       
    )
}

export default Museum