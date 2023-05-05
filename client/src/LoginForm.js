import { useState } from "react";
import { useNavigate } from "react-router-dom"

function LoginForm({setUser}){

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
          navigate('/profile')
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
    }

    return(
        <div>
            <h1 className="name-container">Login</h1>
            <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
        {/* {errors.map((err) => (
          console.log(err)
        ))} */}
{/* errors rendering undefined */}
    </form>
        </div>
    
    )
}

export default LoginForm;