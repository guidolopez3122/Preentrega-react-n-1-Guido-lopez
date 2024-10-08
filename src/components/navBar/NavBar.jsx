import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return (
      <nav className="navbar">
      <h2>Clothes Empire</h2>
      <ul className="nav-items">
        <li>
          <a href="#gorras">
            <i></i> Gorras
          </a>
        </li>
        <li>
          <a href="#camisetas">
            <i></i> Camisetas
          </a>
        </li>
        <li>
          <a href="#camperas">
            <i></i> Camperas
          </a>
        </li>
        <li>
          <a href="#shorts">
            <i></i> Shorts
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar