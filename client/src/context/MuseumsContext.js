import React, {useState, useEffect} from "react";

const MuseumsContext = React.createContext();

function MuseumsProvider({ children }) {

    const [museums, setMuseums] = useState({});

    useEffect(()=>{
        fetch('http://localhost:3000/museums')
        .then((resp) => resp.json())
        .then((museums) => setMuseums(museums))
    },[])


    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <MuseumsContext.Provider value={{museums, setMuseums}}>{children}</MuseumsContext.Provider>;
  }
  
  export { MuseumsContext, MuseumsProvider };