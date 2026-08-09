import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img
        src="./images/logo_coffeeshop_dark.svg"
        alt="Logo-coffeeshop"
        className="nav__logo"
      />
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
