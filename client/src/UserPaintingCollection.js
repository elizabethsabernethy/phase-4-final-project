import { useState, useEffect } from "react";
import User from "./User";

function UserPaintingCollection({user}){
    const[paintings, setPaintings]= useState([])

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/profile/${user.id}/paintings`)
    //     .then((resp) => resp.json())
    //     .then((paintings) => setPaintings(paintings))
    // },[])

    return(
        <div>
            {console.log(user)}
            {/* <div className="name-container">
                <h1>{User.name}'s Paintings</h1>
            </div>
            <div id="artist-paintings-container">
            {paintings.map((painting)=>{
                return <div key={painting.id}>
                    <div className="painting">
                        <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                        <h5>Displayed at {painting.museum.name}</h5>
                    </div>
                </div>
            })}
            </div> */}
        </div>
    )
}

export default UserPaintingCollection;