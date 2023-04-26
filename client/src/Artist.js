import { useNavigate } from "react-router-dom"

function Artist({artist}){
    const navigate = useNavigate()

    function click(){
        navigate(`${artist.id}/paintings`)
    }

    return(
            <div className="artist">
                    <h3 className="artist-name">{artist.name}</h3>
                    <p className="artist-username">@{artist.username}</p>
                    <button className="view-paintings" onClick={click}>View ({artist.paintings.length}) paintings</button>
                    <p className="artist-museums">Paintings on display at: {artist.name}</p>
            </div>
    )
}

export default Artist;