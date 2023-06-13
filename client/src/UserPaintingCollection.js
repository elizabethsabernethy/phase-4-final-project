import Painting from "./Painting";

function UserPaintingCollection({user, newPainting}){

    const paintings = user.id? user.paintings : []

    function editPainting(){
        console.log("edit")
    }

    function deletePainting(){
        console.log("delete")
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
                    <button onClick={editPainting} className="painting-button">Edit Painting</button>
                    <button onClick={deletePainting} className="painting-button">Delete Painting</button>
                    </div>
                    }
                </div>
            })}
            </div>
        </div>
    )
}

export default UserPaintingCollection;