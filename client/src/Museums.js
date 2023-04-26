import Museum from "./Museum"
import { useState, useEffect } from "react"

function Museums(){
const[museums, setMuseums] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/museums')
    .then((resp) => resp.json())
    .then((museums) => setMuseums(museums))
},[])

    return(
        <div>
            <div className="name-container">
                <h1>Featured Museums</h1>
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