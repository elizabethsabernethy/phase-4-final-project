import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginOrSignupPage({setUser}){

 const [showLogin, setShowLogin] = useState(true);

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