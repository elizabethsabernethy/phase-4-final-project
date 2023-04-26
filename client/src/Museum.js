import { useNavigate } from "react-router-dom"

function Museum({museum}){
const navigate = useNavigate()

    return(
        <div className="museum" onClick={()=> navigate(`${museum.id}`)}>
            <h3 className="museum-name">{museum.name}</h3>
            <h4 className="museum-location">{museum.location}</h4>
            <img className="museum-img" src={museum.img_url} alt={museum.name} width="350px"></img>
            <button className="view-paintings" >View Paintings</button>
        </div>       
    )
}

export default Museum