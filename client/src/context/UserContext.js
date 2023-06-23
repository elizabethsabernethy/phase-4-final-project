import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [user, setUser] = useState({});
    const navigate = useNavigate()

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

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <UserContext.Provider value={{user, setUser, handleLogout}}>{children}</UserContext.Provider>;
  }
  
  export { UserContext, UserProvider };