import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "grey" }}>
      <NavLink to="/products" style={{ marginLeft: "20px", color: "white" }}>
        Product
      </NavLink>
      <NavLink
        to="/products/create"
        style={{ marginLeft: "20px", color: "white" }}
      >
        Create Product
      </NavLink>
    </nav>
  );
};

export default NavBar;
