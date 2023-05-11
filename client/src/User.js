import { useNavigate } from "react-router-dom";

function User({user}){

    const navigate = useNavigate()

    function click(){
        navigate(`${user.id}/paintings`)
    }

    return(
        // IF THE USER IS LOGGED IN, SHOW PROFILE INFORMATION
        // INCLUDING NAME, USERNAME, A BUTTON TO SHOW PAINTINGS, A BUTTON TO SHOW MUSEUMS WHERE THEIR PAINTINGS ARE SHOWN, AND EDIT/DELETE BUTTONS
        // EDIT BUTTON SHOULD ALLOW USER TO EDIT USERNAME, NAME, OR PASSWORD
        // DELETE BUTTON SHOULD ALLOW USER TO DELETE PROFILE, ADD ALERT FOR EXTRA CLARIFICATION?
        // USER SHOULD BE ABLE TO ADD AND DELETE PAINTINGS THROUGH THE MY-ART PAGE
        // USER SHOULD BE ABLE TO ADD MUSEUM TO HOUSE PAINTINGS
            <div className="artist">
                {/* ON REFRESH, USER IS NOT PERSISTED, REQUIRING RE-LOGIN */}
                {user? 
                    <div>
                        <h2>Hi, {user.name}</h2>
                        <h3>@{user.username}</h3>
                        <button className="view-paintings" onClick={click}>View ({user.paintings.length}) paintings</button>
                    </div> : 
                    <div>
                        <h2>Please login to view profile</h2>
                    </div>}
            </div>
    )
}

export default User;