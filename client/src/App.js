import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Paintings from "./Paintings";
import MuseumPaintingCollection from "./MuseumPaintingCollection";
import Artists from "./Artists";
import ArtistPaintingCollection from "./ArtistPaintingCollection";
import PageNotFound from "./PageNotFound";
import LoginOrSignupPage from "./LoginOrSignupPage";
import User from "./User";
import Logout from "./Logout";
import AddPaintingForm from "./AddPaintingForm";
import UserPaintingCollection from "./UserPaintingCollection";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  function handleLogout(){
    navigate("/logout")
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <div id="app-header">
        <NavBar />
        <button id="loginout-button" onClick={!user? ()=>{navigate("/login")} : handleLogout}>{!user ? "Login" : "Logout"}</button>
        <button hidden={user? false : true} id="profile-button">My Profile</button>
      </div>
        
        <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='museums' element={<Museums/>}/>
                <Route path='museums/:museum_id/paintings' element={<MuseumPaintingCollection/>}/>
                <Route path='paintings' element={<Paintings/>}/>
                <Route path='artists' element={<Artists/>}/>
                <Route path='artists/:artist_id/paintings' element={<ArtistPaintingCollection/>}/>
                <Route path='profile' element={<User user={user}/>}/>
                <Route path='profile/:user_id/add-painting' element={<AddPaintingForm user={user}/>}/>
                <Route path='profile/:user_id/paintings' element={<UserPaintingCollection user={user}/>}/>
                <Route path="login" element={<LoginOrSignupPage setUser={setUser}/>}/>
                <Route path="logout" element={<Logout/>}/> 
                {/* not logging user out? */}
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
