import { useState } from "react";
import { useNavigate } from "react-router-dom"

function AddPaintingForm({user, museums}){

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [museumValue, setMuseumValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const user_id = user.id
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch(`/artists/${user.id}/paintings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img_url: imgUrl, description, user_id, museum_id: museumValue }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((data) => console.log(data));
        //   navigate('/profile')
        } else {
          resp.json().then((err) => console.log(err.errors));
        }
      });
    }

  
    return(
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
                    {museums.map((museum)=>{
                        return <option key={museum.id} value={museum.id}>{museum.name}</option>
                    })}
                </select>
                <button type="submit">{isLoading ? "Loading..." : "Add Painting"}</button>
            </form>
        </div>
    
    )
}

export default AddPaintingForm;