import "./Menu.css";

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2 className="menu__title">Menu</h2>
      <p className="menu__subtitle">
        We brew coffee from locally roasted, Fairtrade certified beans and use
        biodegradable cups. All teas from our collection are $2/cup.
      </p>
      <ul className="menu__cards">
        <li className="card">
          <h3 className="card__title">Filter</h3>
          <ul className="card__list">
            <li className="card__list-item">
              Regular (12 oz)
              <span className="card__list-divider"></span>
              $1
            </li>
            <li className="card__list-item">
              Large (16 oz)
              <span className="card__list-divider"></span>
              $1.25
            </li>
            <li className="card__list-item">
              XL (20 oz)
              <span className="card__list-divider"></span>
              $1.5
            </li>
            <li className="card__list-item">
              Party-size (24 oz, decaf)
              <span className="card__list-divider"></span>
              $1.75
            </li>
            <li className="card__list-item">
              Iced Coffee (16 oz)
              <span className="card__list-divider"></span>
              $1.25
            </li>
          </ul>
        </li>
        <li className="card">
          <h3 className="card__title">Espresso</h3>
          <ul className="card__list">
            <li className="card__list-item">
              Macchiato
              <span className="card__list-divider"></span>
              $2.25
            </li>
            <li className="card__list-item">
              Cortado
              <span className="card__list-divider"></span>
              $2.5
            </li>
            <li className="card__list-item">
              Mocha
              <span className="card__list-divider"></span>
              $3
            </li>
            <li className="card__list-item">
              Sunrise in the Bay Area (decaf)
              <span className="card__list-divider"></span>
              $10
            </li>
          </ul>
        </li>
        <li className="card">
          <h3 className="card__title">Basked Goods</h3>
          <ul className="card__list">
            <li className="card__list-item">
              Almond Croissant
              <span className="card__list-divider"></span>
              $2
            </li>
            <li className="card__list-item">
              Banana Bread
              <span className="card__list-divider"></span>
              $1.75
            </li>
            <li className="card__list-item">
              Key Lime Pie
              <span className="card__list-divider"></span>
              $3
            </li>
            <li className="card__list-item">
              Blue Velvet Cake
              <span className="card__list-divider"></span>
              $3.75
            </li>
            <li className="card__list-item">
              Web Cookie
              <span className="card__list-divider"></span>
              $2
            </li>
            <li className="card__list-item">
              Fresh Bug’uette
              <span className="card__list-divider"></span>
              $0.25
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
