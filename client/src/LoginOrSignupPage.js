import { useContext, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { UserContext } from "./context/UserContext";

function LoginOrSignupPage(){

 const [showLogin, setShowLogin] = useState(true);
 const {setUser} = useContext(UserContext);

  return (
      <div>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p className="has-account">
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm setUser={setUser}  />
          <p className="has-account">
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
      </div>
  );
}

export default LoginOrSignupPage;