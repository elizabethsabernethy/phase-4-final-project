import { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom"
import Home from "./Home";
import Museums from "./Museums";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import MuseumPaintingCollection from "./MuseumPaintingCollection";
import PageNotFound from "./PageNotFound";
import LoginOrSignupPage from "./LoginOrSignupPage";
import User from "./User";
import Logout from "./Logout";
import AddPaintingForm from "./AddPaintingForm";
import UserPaintingCollection from "./UserPaintingCollection";
import AddMuseumForm from "./AddMuseumForm";
import EditPainting from "./EditPainting";
import { UserContext } from "./context/UserContext";
import { MuseumsContext } from "./context/MuseumsContext";

function App() {
  const [paintingInEdit, setPaintingInEdit] = useState({});
  const navigate = useNavigate()
  const {user, setUser, handleLogout} = useContext(UserContext);
  const {museums, setMuseums} = useContext(MuseumsContext);

function handleEditPainting(painting){
  setPaintingInEdit(painting)
}

  return (
    <div>
      <div id="app-header">
        <NavBar />
        <button id="loginout-button" onClick={!user.id? ()=>{navigate("/login")} : handleLogout}>{user.id ? "Logout" : "Login"}</button>
        <button hidden={user.id? false : true} id="profile-button" onClick={()=> navigate("/profile")}>My Profile</button>
      </div>
         
        <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/museums' element={<Museums/>}/>
                <Route path='/museums/:museum_id/paintings' element={<MuseumPaintingCollection/>}/>
                <Route path='/museums/new' element={<AddMuseumForm/>}/>
                <Route path='/profile' element={<User/>}/>
                <Route path='/profile/:user_id/paintings/new' element={<AddPaintingForm/>}/>
                <Route path='/profile/:user_id/paintings' element={<UserPaintingCollection onEditPainting={handleEditPainting}/>}/>
                <Route path='/profile/:user_id/paintings/:painting_id/edit' element={<EditPainting painting={paintingInEdit}/>}/>
                <Route path="/login" element={<LoginOrSignupPage/>}/>
                <Route path="/logout" element={<Logout/>}/> 
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
