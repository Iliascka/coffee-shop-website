import "./Nav.css";
import logoDark from "../../../images/logo_coffeeshop_dark.svg";

function Nav() {
  return (
    <nav className="nav">
      <img src={logoDark} alt="Logo-coffeeshop" className="nav__logo" />
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#recipes">
            Recipes
          </a>
        </li>
        <li>
          <a className="nav__link" href="#book-a-table">
            Book a table
          </a>
        </li>
        <li>
          <a className="nav__link" href="#menu">
            Menu
          </a>
        </li>
        <li>
          <a className="nav__link" href="#contacts">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
