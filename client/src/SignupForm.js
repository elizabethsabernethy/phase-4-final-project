import { useState } from "react";

function SignupForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
          username,
          password,
          password_confirmation: passwordConfirmation
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => console.log(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
        <div>
            <h1 className="name-container">Create New Account</h1>
            <div id="signup-page">
                <form id="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name (i.e. John Doe)</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
                <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                {/* {errors.map((err) => (
                    alert(err)
                ))} */}
                {/* repeatdly alerts when trying to fix issue */}
            </form>
            </div>
            
        </div>
      
    );
}

export default SignupForm;