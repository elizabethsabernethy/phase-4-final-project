import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditPainting({painting, user, museums}){

    const navigate = useNavigate()

    const [paintingTitle, setPaintingTitle] = useState(painting.title);
    const [paintingImgUrl, setPaintingImgUrl] = useState(painting.img_url);
    const [paintingDescription, setPaintingDescription] = useState(painting.description);
    const [paintingMuseum, setPaintingMuseum] = useState(painting.museum_id);
    const [isLoading, setIsLoading] = useState(false);
  
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
          resp.json().then((data) => console.log(data));
          navigate(`/profile/${user.id}/paintings`)
        } else {
          resp.json().then((err) => alert(err.error));
        }
      });
    }
    
    return(
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
                <select id="museum" name="museum" onChange={(e) => setPaintingMuseum(e.target.value)}>
                  <option>Select Museum</option>
                    {museums.map((museum)=>{
                        return <option key={museum.id} selected={painting.museum_id}>{museum.name}</option>
                    })}
                </select>
                <button type="submit">{isLoading ? "Loading..." : "Update Painting"}</button>
            </form>
            </div> : navigate(`/profile/${user.id}/paintings`)}
        </div>
    )
}

export default EditPainting;