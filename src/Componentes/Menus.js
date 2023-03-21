import { Link } from "react-router-dom";

  function Menu() {
    return (
      <nav>
        <ul className="menu">
        <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/producto">Producto</Link>
          </li>
          <li>
            <Link to="/carrousel">Carrousel</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Menu;
  