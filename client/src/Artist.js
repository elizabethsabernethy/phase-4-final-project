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
                    <div className="artist-museums">Paintings on display at: {artist.museums.length<1? "N/A" : artist.museums.map((museum)=>{
                        return <p style={{ fontWeight: 'bold'}} className="artist-museum-name" key={museum.id}>{museum.name}. </p>
                    })}</div>
            </div>
    )
}

export default Artist;