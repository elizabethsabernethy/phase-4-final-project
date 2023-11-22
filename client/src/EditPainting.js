import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { MuseumsContext } from "./context/MuseumsContext";

function EditPainting({painting, onEditPainting}){

    const navigate = useNavigate()

    const [paintingTitle, setPaintingTitle] = useState(painting.title);
    const [paintingImgUrl, setPaintingImgUrl] = useState(painting.img_url);
    const [paintingDescription, setPaintingDescription] = useState(painting.description);
    const [paintingMuseum, setPaintingMuseum] = useState(painting.museum_id);
    const [isLoading, setIsLoading] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const {museums} = useContext(MuseumsContext);
  
    function handleSave(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch(`/artists/${user.id}/paintings/${painting.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            title: paintingTitle,
            img_url: paintingImgUrl,
            description: paintingDescription,
            museum_id: paintingMuseum
        }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((data) => onEditPainting(data));
          navigate(`/profile/${user.id}/paintings`)
        } else {
          resp.json().then((err) => alert(err.error));
        }
      });
    }

    function onEditPainting(editedPainting){
      const updatedPaintings = user.paintings.map((painting) => {
        if (painting.id === editedPainting.id) {
          return editedPainting;
        } else {
          return painting;
        }
      });
      const museum = user.museums.find((museum)=>{
        return museum.id === editedPainting.museum_id
      })
      if(museum === undefined){
        const newMuseum = museums.find((museum)=>{
          return museum.id === editedPainting.museum_id
        })
        user.museums.push(newMuseum)
      }
      const updatedUser = {
        id: user.id,
        name: user.name,
        username: user.username,
        paintings: [...updatedPaintings],
        museums: [...user.museums]
      }
      setUser(updatedUser)
    
      const museumOfNewPainting = museums.find((museum)=>{
        return museum.id === editedPainting.museum_id
      })
    
      const paintings = museumOfNewPainting.paintings.filter((painting)=>{
        return painting.id !== editedPainting.id
      })
    
      museumOfNewPainting.paintings = paintings
      museumOfNewPainting.paintings.push(editedPainting)
    
      const artist = museumOfNewPainting.artists.find((artist)=>{
        return artist.id === editedPainting.artist_id
      })
      if(artist === undefined){
        museumOfNewPainting.artists.push(user)
      }
    }

    return(
        <div>
          {user.id? 
          <div>
          {painting.id ? 
          <div>
          <h1 className="name-container">Edit Painting</h1>
            <form onSubmit={handleSave}>
            <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name={painting.title}
                    defaultValue={painting.title}
                    onChange={(e) => setPaintingTitle(e.target.value)}
                />
                <label htmlFor="imgUrl">Image URL</label>
                <input
                    type="text"
                    name={painting.img_url}
                    defaultValue={painting.img_url}
                    onChange={(e) => setPaintingImgUrl(e.target.value)}
                />
                <label htmlFor="description">Painting description</label>
                <input
                    type="text"
                    name={painting.description}
                    defaultValue={painting.description}
                    onChange={(e) => setPaintingDescription(e.target.value)}
                />
                <label htmlFor="museum">Museum</label>
                <select id="museum" name="museum" defaultValue={painting.museum_id} onChange={(e) => setPaintingMuseum(e.target.value)}>
                  <option>Select Museum</option>
                    {museums.map((museum)=>{
                        return <option key={museum.id} value={museum.id}>{museum.name}</option>
                    })}
                </select>
                <button type="submit">{isLoading ? "Loading..." : "Update Painting"}</button>
            </form>
            </div> : navigate(`/profile/${user.id}/paintings`)}
            </div> :
            <div>
              <h2>Please login to edit a painting</h2>
            </div>}
        </div>
    )
}

export default EditPainting;