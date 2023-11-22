import { useNavigate } from "react-router-dom";
import Painting from "./Painting";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function UserPaintingCollection({onDeletePainting, onEditPainting}){

    const {user} = useContext(UserContext);
    const paintings = user.id? user.paintings : []
    const navigate = useNavigate();
    
    function editPainting(painting){
        onEditPainting(painting)
        navigate(`${painting.id}/edit`)
    }

    function deletePainting(painting){
        fetch(`/artists/${user.id}/paintings/${painting.id}`, {
          method: "DELETE",
          })
            .then(() => handleDeletePainting(painting));
    }
    function handleDeletePainting(deletedPainting){
        const updatedPaintings= user.paintings.filter((painting) => painting.id !== deletedPainting.id);
        const updatedMuseums= user.museums.filter((museum)=> museum.id !== deletedPainting.museum_id)
        const updatedUser = {
          id: user.id,
          name: user.name,
          username: user.username,
          paintings: [...updatedPaintings],
          museums: [...updatedMuseums]
        }
      
        setUser(updatedUser)
      
        const museumOfPainting = museums.find((museum)=>{
          return museum.id === deletedPainting.museum_id
        })
      
        const updatedMuseumPaintings= museumOfPainting.paintings.filter((painting)=> painting.id !== deletedPainting.id)
        const updatedMuseumArtists= museumOfPainting.artists.filter((artist)=> artist.id !== deletedPainting.artist_id)
        
        museumOfPainting.paintings = updatedMuseumPaintings;
        museumOfPainting.artists = updatedMuseumArtists;
        
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