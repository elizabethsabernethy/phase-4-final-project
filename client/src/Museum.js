import { useNavigate } from "react-router-dom"

function Museum({museum}){
const navigate = useNavigate()

function click(){
    navigate(`${museum.id}/paintings`)
}

    return(
        <div className="museum">
            <h3 className="museum-name">{museum.name}</h3>
            <h4 className="museum-location">{museum.location}</h4>
            <img className="museum-img" src={museum.img_url} alt={museum.name} width="350px"></img>
            {museum.paintings.length > 0? <button className="view-paintings" onClick={click}>View ({museum.paintings.length}) Paintings</button> : <p>Empty Collection</p>}
            
        </div>       
    )
}

export default Museum