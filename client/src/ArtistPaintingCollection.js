import {useState} from "react"

function ArtistPaintingCollection({selectedArtist}){

    const[img, setImg]= useState(selectedArtist.paintings.map((painting)=> painting.img_url))
     
    return(
        <div>
            <div className="name-container">
                <h1>Paintings by {selectedArtist.name}</h1>
            </div>
            <div id="artist-paintings-container">
            {selectedArtist.paintings.map((painting)=>{
                return <div key={painting.id}>
                    <div className="painting">
                        <img className="painting-img" src={painting.img_url} onError={()=> setImg("https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png")} alt={painting.title} width="350px"></img>
                        <h3 className="painting-title">{painting.title}</h3>
                        <p className="painting-description">{painting.description}</p>
                        {/* <h5>Displayed at {painting.museum.name}</h5> */}
                    </div>
                </div>
            })}
            </div>
        </div>
    )
}

export default ArtistPaintingCollection;