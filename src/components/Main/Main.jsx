function Main() {
  return (
    <main className="content">
      <section id="recipes" className="recipes">
        <h2 className="recipes__title">Recipes</h2>
        <p className="recipes__subtitle">
          Check out some recipes we've collected htmlFor your home-brewing
          convenience:
        </p>
        <ul className="recipes__videos">
          <li>
            <iframe
              className="recipes__iframe"
              src="https://www.youtube.com/embed/j6VlT_jUVPc?si=FYk95bFHWt3Z_txv"
              title="YouTube video player"
              allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="recipes__video-caption">
              <span>Aeropress recipe </span>
              <span>~5 min</span>
            </p>
          </li>
          <li>
            <iframe
              className="recipes__iframe"
              src="https://www.youtube.com/embed/st571DYYTR8?si=w7ned8hTM99i0BgB"
              title="YouTube video player"
              allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                  web-share;
                "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="recipes__video-caption">
              <span>French press recipe</span> <span>~15 min</span>
            </p>
          </li>
        </ul>
      </section>
      <section id="book-a-table" className="reservation">
        <h2 className="reservation__title">Book a table</h2>
        <form className="reservation__form form" noValidate>
          <fieldset className="form__fieldset">
            <label htmlFor="text" className="form__label">
              Name *
              <input
                id="name-input"
                className="form__input"
                type="text"
                placeholder="Name Surname"
                minLength="4"
                maxLength="20"
                required
              />
              <span className="name-input-error form__error"></span>
            </label>
            <label htmlFor="number" className="form__label">
              Number of Guests *
              <input
                id="guests-input"
                className="form__input"
                type="number"
                min="1"
                max="8"
                placeholder="1-8"
                required
              />
              <span className="guests-input-error form__error"></span>
            </label>
            <label htmlFor="datetime-local" className="form__label">
              Date & Time *
              <input
                id="datetime-input"
                className="form__input"
                type="datetime-local"
                required
              />
              <span className="datetime-input-error form__error"></span>
            </label>
            <label htmlFor="email" className="form__label">
              Your email *
              <input
                id="email-input"
                className="form__input"
                type="email"
                placeholder="email@email.com"
                required
              />
              <span className="email-input-error form__error"></span>
            </label>
          </fieldset>
          <button type="sumbit" className="form__button">
            Book a table
          </button>
          <label
            htmlFor="checkbox"
            className="form__label form__label_type_checkbox"
          >
            <input
              id="checkbox"
              className="form__checkbox"
              type="checkbox"
              defaultChecked
              required
            />
            I agree with the terms of use
            <span className="checkbox-error form__error"></span>
          </label>
        </form>
      </section>
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
      <section id="about" className="about">
        <h2 className="about__title">About the coffee shop</h2>
        <div className="about__content">
          <p className="about__paragraph">
            Our coffee shop is located in the Triple Peaks Library. It features
            6 tables and free WiFi.
          </p>

          <p className="about__paragraph">
            Our main mission is keeping guests cozy and energized.
          </p>

          <p className="about__paragraph">
            Besides that, we try to reduce our environmental impact — so we
            don't sell single-use cups. But you can buy one of our reusable
            cups!
          </p>
        </div>
        <div className="about__circle"></div>
        <div className="about__circle about__circle_animation_blurred"></div>
      </section>
    </main>
  );
}

export default Main;
