import { useEffect, useState} from "react";
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

function App() {
  const [user, setUser] = useState({});
  const [museums, setMuseums] = useState([]);
  const [newPainting, setNewPainting] = useState({});
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:3000/museums')
    .then((resp) => resp.json())
    .then((museums) => setMuseums(museums))
},[])

  useEffect(()=>{
    fetch("/me")
    .then((resp)=>{
      if(resp.ok){
       resp.json().then((data)=> {
        setUser(data)
      })
      }
      })
  },[])

  function handleLogout(){
    navigate("/logout")
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        setUser({});
      }
    });
  }

  function addPaintingFromForm(painting){
    //update paintings array for user object
    //update museums array for the user object if the museum for the painting isn't present in the users museums array
    //setUser with new painting
    //find museum in museums array for the new painting
    //update the cooresponding museum with new painting
    //update artists array for the museum object if the artists for the painting isn't present in the museum's artists array
    //setMuseums with new painting
    setNewPainting(painting)
}

function addMuseumFromForm(museum){
  setMuseums([...museums, museum])
}

function handleDeletePainting(deletedPainting){
  const updatedPaintings= user.paintings.filter((painting) => painting.id !== deletedPainting.id);
  console.log(updatedPaintings);
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
                <Route path='museums' element={<Museums museums={museums} user={user}/>}/>
                <Route path='museums/:museum_id/paintings' element={<MuseumPaintingCollection museums={museums}/>}/>
                <Route path='/add-museum' element={<AddMuseumForm addMuseumFromForm={addMuseumFromForm}/>}/>
                <Route path='profile' element={<User user={user}/>}/>
                <Route path='profile/:user_id/add-painting' element={<AddPaintingForm user={user} museums={museums} addPaintingFromForm={addPaintingFromForm}/>}/>
                <Route path='profile/:user_id/paintings' element={<UserPaintingCollection user={user} onDeletePainting={handleDeletePainting}/>}/>
                <Route path="login" element={<LoginOrSignupPage setUser={setUser}/>}/>
                <Route path="logout" element={<Logout/>}/> 
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
