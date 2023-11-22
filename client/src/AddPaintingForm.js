import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserContext } from "./context/UserContext";
import { MuseumsContext } from "./context/MuseumsContext";

function AddPaintingForm({addPaintingFromForm}){

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [museumValue, setMuseumValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {user} = useContext(UserContext);
    const {museums} = useContext(MuseumsContext);
    const user_id = user.id
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch(`/artists/${user.id}/paintings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img_url: imgUrl, description, artist_id: user_id, museum_id: museumValue }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((data) => addPaintingFromForm(data));
          navigate(`/profile/${user.id}/paintings`)
        } else {
          resp.json().then((err) => alert((err.error)));
        }
      });
    }

  
    return(
        <div>
          {user.id? 
          <div>
            <h1 className="name-container">Add Painting</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="imgUrl">Image URL</label>
                <input
                    type="text"
                    id="imgUrl"
                    autoComplete="off"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <label htmlFor="description">Painting description</label>
                <input
                    type="text"
                    id="description"
                    autoComplete="off"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="museum">Museum</label>
                <select id="museum" name="museum" onChange={(e) => setMuseumValue(e.target.value)}>
                  <option>Select Museum</option>
                    {museums.map((museum)=>{
                        return <option key={museum.id} value={museum.id}>{museum.name}</option>
                    })}
                </select>
                <button type="submit">{isLoading ? "Loading..." : "Add Painting"}</button>
            </form>
            </div>:
            <div>
              <h2>Please login to add a painting</h2>
            </div>}
        </div>
    
    )
}

export default AddPaintingForm;