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
        // IF THE USER IS LOGGED IN, SHOW PROFILE INFORMATION
        // INCLUDING NAME, USERNAME, A BUTTON TO SHOW PAINTINGS, A BUTTON TO SHOW MUSEUMS WHERE THEIR PAINTINGS ARE SHOWN, AND EDIT/DELETE BUTTONS
        // EDIT BUTTON SHOULD ALLOW USER TO EDIT USERNAME, NAME, OR PASSWORD
        // DELETE BUTTON SHOULD ALLOW USER TO DELETE PROFILE, ADD ALERT FOR EXTRA CLARIFICATION?
        // USER SHOULD BE ABLE TO ADD AND DELETE PAINTINGS THROUGH THE MY-ART PAGE
        // USER SHOULD BE ABLE TO ADD MUSEUM TO HOUSE PAINTINGS
            <div className="artist">
                {user? 
                    <div>
                        <h2>Hi, {user.name}</h2>
                        <h3>@{user.username}</h3>
                        <button className="view-paintings" onClick={paintingsClick}>View ({user.paintings.length}) paintings</button>
                        <button className="view-paintings" onClick={addPaintingClick}>Add paintings</button>
                        <h3>Museums featured at:</h3>
                        <p>{user.museums}</p>
                    </div> : 
                    <div>
                        <h2>Please login to view profile</h2>
                    </div>}
            </div>
    )
}

export default User;