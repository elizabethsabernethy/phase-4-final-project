function User({user}){
    return(
            <div className="artist">
                <h2>{user != null? user.name: "Please Login to view 'My Art'"}</h2>
            </div>
    )
}

export default User;