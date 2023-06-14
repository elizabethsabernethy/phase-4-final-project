import Museum from "./Museum"

function Museums({museums, user}){

    function addMuseum(){
        console.log("added")
    }

    return(
        <div>
            <div className="name-container">
                <h1>Featured Museums</h1>
            </div>
            <div id="add-museum">
               {user.id? <button onClick={addMuseum}>Add Museum</button> : null} 
            </div>
            
            <div id="museums-container">
            {museums.map((museum)=>{
                return <Museum museum={museum} key={museum.id}/>
            })}
        </div>
        </div>
        
    )
}

export default Museums