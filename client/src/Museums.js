import { useEffect, useState } from "react";

function Museums(){
    const[museums, setMuseums] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:3000/museums")
        .then((resp) => resp.json())
        .then((museums) => console.log(museums))
    },[])

    return(
        <div>
            
        </div>
    )
}

export default Museums