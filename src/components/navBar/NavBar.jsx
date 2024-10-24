import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {

    return (
      <nav className="navbar">
        <Link to="/" className="brand">
        <img className="logo" src="/img/proyecto de ropa-04.JPG" alt="" />
        <h2 className="empire-name">Clothes Empire</h2>
        </Link>
      
      <ul className="categorias">
        <li className="categoria">
          <Link to="/categoria/camisetas"> Camisetas </Link>
        </li>
       
        <li className="categoria">
          <Link to="/categoria/camperas"> Camperas </Link>
        </li>

        <li className="categoria">
          <Link to="/categoria/shorts"> Shorts </Link>
        </li>

        <li className="categoria">
          <Link to="/categoria/conjuntos"> Conjuntos </Link>
        </li>

        <li>
          <Link to="/categoria/gorras"> Gorras </Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default NavBar