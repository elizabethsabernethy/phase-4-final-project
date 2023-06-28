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
        return museum.id === painting.museum_id
      })
      user.uniqueMuseums.push(newMuseum)
    }
    const updatedUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      paintings: [...user.paintings],
      uniqueMuseums: [...user.uniqueMuseums]
    }
    setUser(updatedUser)
    
    const museumOfNewPainting = museums.find((museum)=>{
      return museum.id === painting.museum_id
    })
    museumOfNewPainting.paintings.push(painting)
    const artist = museumOfNewPainting.uniqueArtists.find((artist)=>{
      return artist.id === painting.artist_id
    })
    if(artist === undefined){
      museumOfNewPainting.uniqueArtists.push(user)
    }
}

function addMuseumFromForm(museum){
  setMuseums([...museums, museum])
}

function handleDeletePainting(deletedPainting){
  const updatedPaintings= user.paintings.filter((painting) => painting.id !== deletedPainting.id);
  const updatedMuseums= user.uniqueMuseums.filter((museum)=> museum.id !== deletedPainting.museum_id)
  const updatedUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    paintings: [...updatedPaintings],
    uniqueMuseums: [...updatedMuseums]
  }

  setUser(updatedUser)

  const museumOfPainting = museums.find((museum)=>{
    return museum.id === deletedPainting.museum_id
  })

  const updatedMuseumPaintings= museumOfPainting.paintings.filter((painting)=> painting.id !== deletedPainting.id)
  const updatedMuseumArtists= museumOfPainting.uniqueArtists.filter((artist)=> artist.id !== deletedPainting.artist_id)
  
  museumOfPainting.paintings = updatedMuseumPaintings;
  museumOfPainting.uniqueArtists = updatedMuseumArtists;
  
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
  const museum = user.uniqueMuseums.find((museum)=>{
    return museum.id === editedPainting.museum_id
  })
  if(museum === undefined){
    const newMuseum = museums.find((museum)=>{
      return museum.id === editedPainting.museum_id
    })
    user.uniqueMuseums.push(newMuseum)
  }
  const updatedUser = {
    id: user.id,
    name: user.name,
    username: user.username,
    paintings: [...updatedPaintings],
    uniqueMuseums: [...user.uniqueMuseums]
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

  const artist = museumOfNewPainting.uniqueArtists.find((artist)=>{
    return artist.id === editedPainting.artist_id
  })
  if(artist === undefined){
    museumOfNewPainting.uniqueArtists.push(user)
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
                <Route path='/museums' element={<Museums museums={museums}/>}/>
                <Route path='/museums/:museum_id/paintings' element={<MuseumPaintingCollection museums={museums}/>}/>
                <Route path='/add-museum' element={<AddMuseumForm addMuseumFromForm={addMuseumFromForm}/>}/>
                <Route path='/profile' element={<User/>}/>
                <Route path='/profile/:user_id/add-painting' element={<AddPaintingForm museums={museums} addPaintingFromForm={addPaintingFromForm}/>}/>
                <Route path='/profile/:user_id/paintings' element={<UserPaintingCollection onDeletePainting={handleDeletePainting} onEditPainting={handleEditPainting}/>}/>
                <Route path='/profile/:user_id/paintings/:painting_id/edit-painting' element={<EditPainting museums={museums} painting={paintingInEdit} onEditPainting={onEditPainting}/>}/>
                <Route path="/login" element={<LoginOrSignupPage/>}/>
                <Route path="/logout" element={<Logout/>}/> 
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
    </div>
  );
}

export default App;
