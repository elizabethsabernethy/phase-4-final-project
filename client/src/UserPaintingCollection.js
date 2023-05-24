import { useState, useEffect } from "react";
import User from "./User";

function UserPaintingCollection({user}){
    const[paintings, setPaintings]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/profile/${user.id}/paintings`)
    .then((resp)=>{
      if(resp.ok){
        return resp.json()
    .then((paintings)=>{
      return setPaintings(paintings)})
      }
      setPaintings([])
      })
    },[])

    {console.log(paintings)}

    return(
        <div>
            <div className="name-container">
                <h1>{user.name}'s Paintings</h1>
            </div>
            <div id="artist-paintings-container">
            {paintings.map((painting)=>{
                return <div key={painting.id}>
                    {paintings.length < 1 ? "Please add paintings" :
                    <div className="painting">
                        <img className="painting-img" src={painting.img_url} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                        <h5>Displayed at {painting.museum.name}</h5>
                    </div>
                    }
                </div>
            })}
            </div>
        </div>
    )
}

export default UserPaintingCollection;