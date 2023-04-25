import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Paintings from "./Paintings";

function App() {
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path="/museums" element={<Museums/>}/> 
        <Route path="/museums/:museum_id/paintings" element={<Paintings/>}/>
        <Route path="/paintings" element={<Paintings/>}/>
        <Route path="/my-art" element={<Museums/>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
