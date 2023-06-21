import { useNavigate } from "react-router-dom";
import Painting from "./Painting";

function UserPaintingCollection({user, onDeletePainting, onEditPainting}){

    const paintings = user.id? user.paintings : []
    const navigate = useNavigate();

    function editPainting(painting){
        onEditPainting(painting)
        navigate(`${painting.id}/edit-painting`)
    }

    function deletePainting(painting){
        fetch(`/artists/${user.id}/paintings/${painting.id}`, {
          method: "DELETE",
          })
            .then((resp) => resp.json())
            .then(() => onDeletePainting(painting));
    }

    return(
        <div>
            <div className="name-container">
                <h1>{user.name}'s Paintings</h1>
            </div>
            <div id="artist-paintings-container">
            {paintings.map((painting)=>{
                return <div key={painting.id}>
                    {paintings.length < 1 ? "Please add paintings" :
                    <div>
                    <Painting painting={painting}></Painting>
                    <button onClick={()=> editPainting(painting)} className="painting-button">Edit Painting</button>
                    <button onClick={()=> deletePainting(painting)} className="painting-button">Delete Painting</button>
                    </div>
                    }
                </div>
            })}
            </div>
        </div>
    )
}

export default UserPaintingCollection;