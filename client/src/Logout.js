import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(){

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
        return navigate("/")
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

  return (
      <div>
        <h1>Thanks for visiting, come back soon!</h1>
      </div>
  );
}

export default Logout;