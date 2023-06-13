import Painting from "./Painting";

function UserPaintingCollection({user, newPainting}){

    const paintings = user.id? user.paintings : []

    return(
        <div>
            <div className="name-container">
                <h1>{user.name}'s Paintings</h1>
            </div>
            <div id="artist-paintings-container">
            {paintings.map((painting)=>{
                return <div key={painting.id}>
                    {paintings.length < 1 ? "Please add paintings" :
                    <Painting painting={painting}></Painting>
                    }
                </div>
            })}
            </div>
        </div>
    )
}

export default UserPaintingCollection;