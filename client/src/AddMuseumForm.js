import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function AddMuseumForm({addMuseumFromForm}){

    const navigate = useNavigate()

    const {user} = useContext(UserContext);

    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/museums`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, img_url: imgUrl, location}),
        }).then((resp) => {
          setIsLoading(false);
          if (resp.ok) {
            resp.json().then((data) => addMuseumFromForm(data));
            navigate('/museums')
          } else {
            resp.json().then((err)=> alert((err.error)))
          }
        });
      }

    return(
        <div>
          {user.id? 
          <div>
            <h1 className="name-container">Add Museum</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="museum-name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="imgUrl">Image URL</label>
                <input
                    type="text"
                    id="museum-imgUrl"
                    autoComplete="off"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                />
                <label htmlFor="location">Location (i.e. City, State)</label>
                <input
                    type="text"
                    id="location"
                    autoComplete="off"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Add Museum"}</button>
            </form>
            </div> : 
            <div>
            <h2> Please login to add a museum</h2>
            </div>
            }
        </div>
    )
}

export default AddMuseumForm;