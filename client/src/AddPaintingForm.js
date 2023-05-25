import { useState } from "react";
import { useNavigate } from "react-router-dom"

function AddPaintingForm({user, museums}){

    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const [museumValue, setMuseumValue] = useState("");
  
    return(
        <div>
            <h1 className="name-container">Add Painting</h1>
            <form>
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
            </form>
        </div>
    
    )
}

export default AddPaintingForm;