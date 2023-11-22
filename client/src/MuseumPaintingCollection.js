import { useLocation } from "react-router-dom";
import Painting from "./Painting";
import { useContext } from "react";
import { MuseumsContext } from "./context/MuseumsContext";

function MuseumPaintingCollection(){
    
const location = useLocation();
const path = location.pathname
const museum_id = parseInt(path.split('/')[2])
const{museums} = useContext(MuseumsContext);

const museum = museums.find((museum)=>{
    return museum.id === museum_id

})

        return(
        <div>
            {museum ? 
            <div>
             <div className="name-container">
            <h1>{museum.name} Collection</h1>
            </div>
            <div id="museum-paintings-container">
            {museum.paintings.map((painting)=>{
                return <div key={painting.id}>
                    <Painting painting={painting} museum={museum}></Painting>
                </div>
            })}
            </div>
            </div> : 
            <div> 
            </div>
            }
            
        </div>
    )
}

export default MuseumPaintingCollection;