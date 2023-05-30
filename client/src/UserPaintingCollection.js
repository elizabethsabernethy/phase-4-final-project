import { useEffect, useState } from "react";

function UserPaintingCollection({user, newPainting}){
    const[img, setImg]= useState("")
    const paintings = user.id? user.paintings : []

    useEffect(()=>{
     paintings.map((painting)=>{
        return painting.img_url
     })
    },[])

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
                        <img className="painting-img" src={img} onError={()=> setImg("https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png")} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                    </div>
                    }
                </div>
            })}
            </div>
        </div>
    )
}

export default UserPaintingCollection;