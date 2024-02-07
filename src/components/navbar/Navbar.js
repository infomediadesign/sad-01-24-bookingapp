import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logoContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo"><h1>Booking App</h1></span>
          </Link>
        </div>
        <div className="navItems">
          {user ? (
            <>
              <span className="username">{user.username}</span>
              <button className="navButton" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button className="navButton">Register</button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="navButton">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
