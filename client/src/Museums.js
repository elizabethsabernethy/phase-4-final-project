import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Museums(){
    const[museums, setMuseums] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:3000/museums')
        .then((resp) => resp.json())
        .then((museums) => setMuseums(museums))
    },[])

    function view_paintings_click(museum){
        navigate(`/museums/${museum.id}/paintings`)
    }

    return(
        <div id="museums-container">
            {museums.map((museum)=>{
                return <div className="museum" key={museum.id}>
                    <h3 className="museum-name">{museum.name}</h3>
                    <h4 className="museum-location">{museum.location}</h4>
                    <img className="museum-img" src={museum.img_url} alt={museum.name} width="350px"></img>
                    <button className="view-paintings" onClick={()=>view_paintings_click(museum)}>View Paintings</button>
                </div>
            })}
        </div>
    )
}

export default Museums