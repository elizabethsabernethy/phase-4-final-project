function EditPainting({painting, user}){

    const navigate = useNavigate()

    const [paintingTitle, setPaintingTitle] = useState(painting.title);
    const [paintingImgUrl, setPaintingImgUrl] = useState(painting.img_url);
    const [description, setDescription] = useState("");
    const [museumValue, setMuseumValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const user_id = user.id
  
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
        }),
      }).then((resp) => {
        setIsLoading(false);
        if (resp.ok) {
          resp.json().then((data) => console.log(data));
          navigate(`/profile/${user.id}/paintings`)
        } else {
          resp.json().then((err) => alert(err.errors));
        }
      });
    }

  
    return(
        <div>
            <h1 className="name-container">Add Painting</h1>
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
        </div>
    
    )
}

export default EditPainting;