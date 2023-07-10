import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";


function User(){

    const navigate = useNavigate()

    const {user} = useContext(UserContext);

    function paintingsClick(){
        navigate(`${user.id}/paintings`)
    }
    function addPaintingClick(){
        navigate(`${user.id}/paintings/new`)
    }

    return(
            <div id="user-container">
                {user.id? 
                    <div className="artist">
                        <h2>Hi, {user.name}</h2>
                        <h3>@{user.username}</h3>
                        <button className="view-paintings" onClick={paintingsClick}>View ({user.paintings.length}) paintings</button>
                        <button className="view-paintings" onClick={addPaintingClick}>Add paintings</button>
                        <h3>Museums featured at:</h3>
                        <p>{user.museums < 1 ? "None Currently" : user.uniqueMuseums.map((museum)=> `${museum.name}. `)}</p>
                    </div> : 
                    <div>
                        <h2>Please login to view profile</h2>
                    </div>}
            </div>
    )
}

export default User;