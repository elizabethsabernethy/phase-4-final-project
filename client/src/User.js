import { useNavigate } from "react-router-dom";


function User({user}){

    const navigate = useNavigate()

    function paintingsClick(){
        navigate(`${user.id}/paintings`)
    }
    function addPaintingClick(){
        navigate(`${user.id}/add-painting`)
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
                        <p>{user.museums < 1 ? "None Currently" : user.museums.map((museum)=> `${museum.name}. `)}</p>
                    </div> : 
                    <div>
                        <h2>Please login to view profile</h2>
                    </div>}
            </div>
    )
}

export default User;