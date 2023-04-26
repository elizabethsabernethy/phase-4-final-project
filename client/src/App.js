import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Paintings from "./Paintings";
import MuseumPaintingCollection from "./MuseumPaintingCollection";

function App() {

  return (
    <div>
        <NavBar />
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='museums' element={<Museums/>}/>
                <Route path='museums/:museum_id/paintings' element={<MuseumPaintingCollection/>}/>
                <Route path='paintings' element={<Paintings/>}/>
                <Route path='artists' element={<Paintings/>}/>
                <Route path='my-art' element={<Paintings/>}/>
            </Routes>
    </div>
  );
}

export default App;
