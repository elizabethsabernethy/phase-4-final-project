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


  function addPaintingFromForm(painting){ 
    const updatedPaintings = [...user.paintings, painting]
    const museum = user.museums.find((museum)=> museum.id === painting.museum_id)
    let updatedMuseums = [...user.museums];
    if(!museum){
      const newMuseum = museums.find((museum)=> museum.id === painting.museum_id)
      updatedMuseums = [...user.museums, newMuseum]
    }
    const updatedUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      paintings: updatedPaintings,
      museums: updatedMuseums
    }
    setUser(updatedUser)
    
    const museumOfNewPainting = museums.find((museum)=>{
      return museum.id === painting.museum_id
    })
    museumOfNewPainting.paintings.push(painting)
    const artist = museumOfNewPainting.artists.find((artist)=>{
      return artist.id === painting.artist_id
    })
    if(artist === undefined){
      museumOfNewPainting.artists.push(user)
    }
}

function addMuseumFromForm(museum){
  setMuseums([...museums, museum])
}

function handleDeletePainting(deletedPainting){
  const updatedPaintings= user.paintings.filter((painting) => painting.id !== deletedPainting.id);
  const updatedMuseums= user.museums.filter((museum)=> museum.id !== deletedPainting.museum_id)
  const updatedUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    paintings: [...updatedPaintings],
    museums: [...updatedMuseums]
  }

  setUser(updatedUser)

  const museumOfPainting = museums.find((museum)=>{
    return museum.id === deletedPainting.museum_id
  })

  const updatedMuseumPaintings= museumOfPainting.paintings.filter((painting)=> painting.id !== deletedPainting.id)
  const updatedMuseumArtists= museumOfPainting.artists.filter((artist)=> artist.id !== deletedPainting.artist_id)
  
  museumOfPainting.paintings = updatedMuseumPaintings;
  museumOfPainting.artists = updatedMuseumArtists;
  
}

function handleEditPainting(painting){
  setPaintingInEdit(painting)
}

function onEditPainting(editedPainting){
  const updatedPaintings = user.paintings.map((painting) => {
    if (painting.id === editedPainting.id) {
      return editedPainting;
    } else {
      return painting;
    }
  });
  const museum = user.museums.find((museum)=>{
    return museum.id === editedPainting.museum_id
  })
  if(museum === undefined){
    const newMuseum = museums.find((museum)=>{
      return museum.id === editedPainting.museum_id
    })
    user.museums.push(newMuseum)
  }
  const updatedUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    paintings: [...updatedPaintings],
    museums: [...user.museums]
  }
  setUser(updatedUser)

  const museumOfNewPainting = museums.find((museum)=>{
    return museum.id === editedPainting.museum_id
  })

  const paintings = museumOfNewPainting.paintings.filter((painting)=>{
    return painting.id !== editedPainting.id
  })

  museumOfNewPainting.paintings = paintings
  museumOfNewPainting.paintings.push(editedPainting)

  const artist = museumOfNewPainting.artists.find((artist)=>{
    return artist.id === editedPainting.artist_id
  })
  if(artist === undefined){
    museumOfNewPainting.artists.push(user)
  }
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
                <Route path='/museums/new' element={<AddMuseumForm addMuseumFromForm={addMuseumFromForm}/>}/>
                <Route path='/profile' element={<User/>}/>
                <Route path='/profile/:user_id/paintings/new' element={<AddPaintingForm museums={museums} addPaintingFromForm={addPaintingFromForm}/>}/>
                <Route path='/profile/:user_id/paintings' element={<UserPaintingCollection onDeletePainting={handleDeletePainting} onEditPainting={handleEditPainting}/>}/>
                <Route path='/profile/:user_id/paintings/:painting_id/edit' element={<EditPainting museums={museums} painting={paintingInEdit} onEditPainting={onEditPainting}/>}/>
                <Route path="/login" element={<LoginOrSignupPage/>}/>
                <Route path="/logout" element={<Logout/>}/> 
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
