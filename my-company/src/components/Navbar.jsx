import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "navy",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/">
        Home
      </Link>

      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/about">
        About
      </Link>

      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/services">
        Services
      </Link>

      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
