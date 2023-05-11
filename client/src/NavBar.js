import {NavLink} from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "70px",
        padding: "12px",
        margin: "0 6px 6px",
        color: "antiquewhite",
        textAlign: "center",
        textDecoration:"none",
        background: "rgb(2, 54, 59)"
      };

    return(
        <div className="navbar">
            <NavLink
            to="/"
            style={linkStyles}
            >
                Home
            </NavLink>
            <NavLink
            to="/museums"
            style={linkStyles}
            >
                Museums
            </NavLink>
            <NavLink
            to="/paintings"
            style={linkStyles}
            >
                Paintings
            </NavLink>
            <NavLink
            to="/artists"
            style={linkStyles}
            >
                Artists
            </NavLink>
        </div>
    )
}

export default NavBar;