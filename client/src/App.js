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
                <Route path='/' element={<Home />} />
                <Route path='museums' element={<Museums/>}>
                    <Route path=':museumId' element={<Museums/>}>
                        <Route index element={<Museums/>} />
                        <Route path='paintings' element={<Paintings/>} />
                    </Route>
                </Route>
                <Route path='paintings' element={<Paintings/>}>
                </Route>
                <Route path='my-art' element={<Paintings/>}>
                </Route>
            </Routes>
    </div>
  );
}

export default App;
