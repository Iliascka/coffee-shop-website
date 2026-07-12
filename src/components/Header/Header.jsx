function Header() {
  return (
    <header class="header">
      <nav class="nav">
        <img
          src="./images/logo_coffeeshop_dark.svg"
          alt="Logo-coffeeshop"
          class="nav__logo"
        />
        <ul class="nav__links">
          <li>
            <a class="nav__link" href="#recipes">
              Recipes
            </a>
          </li>
          <li>
            <a class="nav__link" href="#book-a-table">
              Book a table
            </a>
          </li>
          <li>
            <a class="nav__link" href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a class="nav__link" href="#contacts">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <h1 class="header__title">
        <span class="header__span-accent">Specialty coffee</span>in the Triple
        Peaks Library
      </h1>
      <p class="header__description">
        Welcome to our study zone! We've got the coffee to energize you and the
        cozy vibes to help you get creative.
      </p>
      <img
        src="./images/inside_coffee_shop.png"
        alt="Coffee Shop Image"
        class="header__image"
      />
      <div class="header__footer">
        <div>
          <p class="header__paragraph">Hours:</p>
          <p class="header__paragraph">
            Monday &ndash; Friday (10:00 &ndash; 19:00)
          </p>
          <p class="header__paragraph">
            Saturday &ndash; Sunday (11:00 &ndash; 18:00)
          </p>
        </div>
        <p class="header__paragraph">
          200 Success Avenue, The Town of Triple Peaks
        </p>
      </div>
    </header>
  );
}

export default Header;
