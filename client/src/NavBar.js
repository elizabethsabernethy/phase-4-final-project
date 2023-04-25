import {NavLink} from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "70px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "rgb(69, 88, 62)",
        textDecoration: "none",
        color: "white",
      };

    return(
        <div className="navbar">
            <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                background:'white',
                color: 'rgb(69, 88, 62)'
            }}
            >
                Home
            </NavLink>
            <NavLink
            to="/museums"
            exact
            style={linkStyles}
            activeStyle={{
                background:'white',
                color: 'rgb(69, 88, 62)'
            }}
            >
                Museums
            </NavLink>
            <NavLink
            to="/paintings"
            exact
            style={linkStyles}
            activeStyle={{
                background:'white',
                color: 'rgb(69, 88, 62)'
            }}
            >
                Paintings
            </NavLink>
            <NavLink
            to="/my-art"
            exact
            style={linkStyles}
            activeStyle={{
                background:'white',
                color: 'rgb(69, 88, 62)'
            }}
            >
                My Art
            </NavLink>
        </div>
    )
}

export default NavBar;