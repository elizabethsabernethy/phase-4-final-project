import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Paintings from "./Paintings";
import { useEffect, useState } from "react";

function App() {

  const[museums, setMuseums] = useState([])
  const[paintings, setPaintings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/paintings')
    .then((resp) => resp.json())
    .then((paintings) => setPaintings(paintings))
},[])

  useEffect(()=>{
    fetch('http://localhost:3000/museums')
    .then((resp) => resp.json())
    .then((museums) => setMuseums(museums))
},[])

  return (
    <div>
        <NavBar />
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='museums' element={<Museums museums={museums}/>}>
                    <Route path=':museumId' element={<Museums museums={museums}/>}>
                        <Route index element={<Museums museums={museums}/>} />
                        <Route path='paintings' element={<Paintings paintings={paintings}/>} />
                    </Route>
                </Route>
                <Route path='paintings' element={<Paintings paintings={paintings}/>}>
                </Route>
                <Route path='my-art' element={<Paintings paintings={paintings}/>}>
                </Route>
            </Routes>
    </div>
  );
}

export default App;
