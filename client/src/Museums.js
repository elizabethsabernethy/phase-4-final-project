import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Museum from "./Museum"
import { UserContext } from "./context/UserContext";

function Museums({museums}){

const navigate = useNavigate();
const {user} = useContext(UserContext);

    function addMuseum(){
        navigate(`/museums/new`)
    }

    return(
        <div>
            <div className="name-container">
                <h1>Featured Museums</h1>
            </div>
            <div id="add-museum">
               {user.id? <button onClick={addMuseum}>Add Museum</button> : null} 
            </div>
            
            <div id="museums-container">
            {museums.map((museum)=>{
                return <Museum museum={museum} key={museum.id}/>
            })}
        </div>
        </div>
        
    )
}

export default Museums