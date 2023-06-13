import { useLocation } from "react-router-dom";
import Painting from "./Painting";

function MuseumPaintingCollection({museums}){
    
const location = useLocation();
const path = location.pathname
const museum_id = parseInt(path.split('/')[2])

const museum = museums.find((museum)=>{
    return museum.id === museum_id
})

        return(
        <div>
             <div className="name-container">
                    <h1>{museum.name} Collection</h1>
            </div>
            <div id="museum-paintings-container">
            {museum.paintings.map((painting)=>{
                return <div key={painting.id}>
                    <Painting painting={painting}></Painting>
                </div>
            })}
            </div>
        </div>
    )
}

export default MuseumPaintingCollection;