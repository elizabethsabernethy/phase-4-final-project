import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Paintings from "./Paintings";
import MuseumPaintingCollection from "./MuseumPaintingCollection";
import Artists from "./Artists";
import ArtistPaintingCollection from "./ArtistPaintingCollection";
import PageNotFound from "./PageNotFound";

function App() {

  return (
    <div>
      <div id="app-header">
        <NavBar />
        <button>Login or Signup</button>
      </div>
        
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='museums' element={<Museums/>}/>
                <Route path='museums/:museum_id/paintings' element={<MuseumPaintingCollection/>}/>
                <Route path='paintings' element={<Paintings/>}/>
                <Route path='artists' element={<Artists/>}/>
                <Route path='artists/:artist_id/paintings' element={<ArtistPaintingCollection/>}/>
                <Route path='my-art' element={<Paintings/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
