import { useEffect, useState } from "react";

function Museums(){
    const[museums, setMuseums] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/museums')
        .then((resp) => resp.json())
        .then((museums) => setMuseums(museums))
    },[])

    return(
        <div>
            {museums.map((museum)=>{
                return <div className="museum" key={museum.id}>
                    <h3>{museum.name}</h3>
                </div>
            })}
        </div>
    )
}

export default Museums