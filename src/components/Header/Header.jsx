import "./Header.css";
import Nav from "../Nav/Nav";
import insideCoffeeShop from "../../../images/inside_coffee_shop.png";

function Header() {
  return (
    <header className="header">
      <Nav />
      <h1 className="header__title">
        <span className="header__span-accent">Specialty coffee</span>in the
        Triple Peaks Library
      </h1>
      <p className="header__description">
        Welcome to our study zone! We've got the coffee to energize you and the
        cozy vibes to help you get creative.
      </p>
      <img
        src={insideCoffeeShop}
        alt="Coffee Shop Image"
        className="header__image"
      />
      <div className="header__footer">
        <div>
          <p className="header__paragraph">Hours:</p>
          <p className="header__paragraph">
            Monday &ndash; Friday (10:00 &ndash; 19:00)
          </p>
          <p className="header__paragraph">
            Saturday &ndash; Sunday (11:00 &ndash; 18:00)
          </p>
        </div>
        <p className="header__paragraph">
          200 Success Avenue, The Town of Triple Peaks
        </p>
      </div>
    </header>
  );
}

export default Header;
