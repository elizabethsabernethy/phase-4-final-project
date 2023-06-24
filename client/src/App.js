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

function App() {
  const [museums, setMuseums] = useState([]);
  const [paintingInEdit, setPaintingInEdit] = useState({});
  const navigate = useNavigate()
  const {user, setUser, handleLogout} = useContext(UserContext);

  useEffect(()=>{
    fetch('http://localhost:3000/museums')
    .then((resp) => resp.json())
    .then((museums) => setMuseums(museums))
},[])


  function addPaintingFromForm(painting){
    user.paintings.push(painting)
    const museum = user.uniqueMuseums.find((museum)=>{
      return museum.id === painting.museum_id
  })
  if(museum === undefined){
    const newMuseum = museums.find((museum)=>{
      return museum.id = painting.museum_id
    })
    user.uniqueMuseums.push(newMuseum)
  }

  //LOOK AT NOTES IMMEDIATELY BELOW!!!!!!!!
  console.log(painting.museum_id) //returns correct id
  console.log(user.uniqueMuseums) //returns american institute of art regardless of painting.museum_id if museum is undefined




    //update paintings array for user object
    //update museums array for the user object if the museum for the painting isn't present in the users museums array
    //setUser with new painting
    //find museum in museums array for the new painting
    //update the cooresponding museum with new painting
    //update artists array for the museum object if the artists for the painting isn't present in the museum's artists array
    //setMuseums with new painting
}

function addMuseumFromForm(museum){
  setMuseums([...museums, museum])
}

function handleDeletePainting(deletedPainting){
  const updatedPaintings= user.paintings.filter((painting) => painting.id !== deletedPainting.id);
  console.log(updatedPaintings);
}

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
                <Route path='/museums' element={<Museums museums={museums}/>}/>
                <Route path='/museums/:museum_id/paintings' element={<MuseumPaintingCollection museums={museums}/>}/>
                <Route path='/add-museum' element={<AddMuseumForm addMuseumFromForm={addMuseumFromForm}/>}/>
                <Route path='/profile' element={<User/>}/>
                <Route path='/profile/:user_id/add-painting' element={<AddPaintingForm museums={museums} addPaintingFromForm={addPaintingFromForm}/>}/>
                <Route path='/profile/:user_id/paintings' element={<UserPaintingCollection onDeletePainting={handleDeletePainting} onEditPainting={handleEditPainting}/>}/>
                <Route path='/profile/:user_id/paintings/:painting_id/edit-painting' element={<EditPainting museums={museums} painting={paintingInEdit}/>}/>
                <Route path="/login" element={<LoginOrSignupPage/>}/>
                <Route path="/logout" element={<Logout/>}/> 
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
