function Main() {
  return (
    <main class="content">
      <section id="recipes" class="recipes">
        <h2 class="recipes__title">Recipes</h2>
        <p class="recipes__subtitle">
          Check out some recipes we've collected for your home-brewing
          convenience:
        </p>
        <ul class="recipes__videos">
          <li>
            <iframe
              class="recipes__iframe"
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
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p class="recipes__video-caption">
              <span>Aeropress recipe </span>
              <span>~5 min</span>
            </p>
          </li>
          <li>
            <iframe
              class="recipes__iframe"
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
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p class="recipes__video-caption">
              <span>French press recipe</span> <span>~15 min</span>
            </p>
          </li>
        </ul>
      </section>
      <section id="book-a-table" class="reservation">
        <h2 class="reservation__title">Book a table</h2>
        <form class="reservation__form form" novalidate>
          <fieldset class="form__fieldset">
            <label for="text" class="form__label">
              Name *
              <input
                id="name-input"
                class="form__input"
                type="text"
                placeholder="Name Surname"
                minlength="4"
                maxlength="20"
                required
              />
              <span class="name-input-error form__error"></span>
            </label>
            <label for="number" class="form__label">
              Number of Guests *
              <input
                id="guests-input"
                class="form__input"
                type="number"
                min="1"
                max="8"
                placeholder="1-8"
                required
              />
              <span class="guests-input-error form__error"></span>
            </label>
            <label for="datetime-local" class="form__label">
              Date & Time *
              <input
                id="datetime-input"
                class="form__input"
                type="datetime-local"
                required
              />
              <span class="datetime-input-error form__error"></span>
            </label>
            <label for="email" class="form__label">
              Your email *
              <input
                id="email-input"
                class="form__input"
                type="email"
                placeholder="email@email.com"
                required
              />
              <span class="email-input-error form__error"></span>
            </label>
          </fieldset>
          <button type="sumbit" class="form__button">
            Book a table
          </button>
          <label for="checkbox" class="form__label form__label_type_checkbox">
            <input
              id="checkbox"
              class="form__checkbox"
              type="checkbox"
              checked
              required
            />
            I agree with the terms of use
            <span class="checkbox-error form__error"></span>
          </label>
        </form>
      </section>
      <section id="menu" class="menu">
        <h2 class="menu__title">Menu</h2>
        <p class="menu__subtitle">
          We brew coffee from locally roasted, Fairtrade certified beans and use
          biodegradable cups. All teas from our collection are $2/cup.
        </p>
        <ul class="menu__cards">
          <li class="card">
            <h3 class="card__title">Filter</h3>
            <ul class="card__list">
              <li class="card__list-item">
                Regular (12 oz)
                <span class="card__list-divider"></span>
                $1
              </li>
              <li class="card__list-item">
                Large (16 oz)
                <span class="card__list-divider"></span>
                $1.25
              </li>
              <li class="card__list-item">
                XL (20 oz)
                <span class="card__list-divider"></span>
                $1.5
              </li>
              <li class="card__list-item">
                Party-size (24 oz, decaf)
                <span class="card__list-divider"></span>
                $1.75
              </li>
              <li class="card__list-item">
                Iced Coffee (16 oz)
                <span class="card__list-divider"></span>
                $1.25
              </li>
            </ul>
          </li>
          <li class="card">
            <h3 class="card__title">Espresso</h3>
            <ul class="card__list">
              <li class="card__list-item">
                Macchiato
                <span class="card__list-divider"></span>
                $2.25
              </li>
              <li class="card__list-item">
                Cortado
                <span class="card__list-divider"></span>
                $2.5
              </li>
              <li class="card__list-item">
                Mocha
                <span class="card__list-divider"></span>
                $3
              </li>
              <li class="card__list-item">
                Sunrise in the Bay Area (decaf)
                <span class="card__list-divider"></span>
                $10
              </li>
            </ul>
          </li>
          <li class="card">
            <h3 class="card__title">Basked Goods</h3>
            <ul class="card__list">
              <li class="card__list-item">
                Almond Croissant
                <span class="card__list-divider"></span>
                $2
              </li>
              <li class="card__list-item">
                Banana Bread
                <span class="card__list-divider"></span>
                $1.75
              </li>
              <li class="card__list-item">
                Key Lime Pie
                <span class="card__list-divider"></span>
                $3
              </li>
              <li class="card__list-item">
                Blue Velvet Cake
                <span class="card__list-divider"></span>
                $3.75
              </li>
              <li class="card__list-item">
                Web Cookie
                <span class="card__list-divider"></span>
                $2
              </li>
              <li class="card__list-item">
                Fresh Bug’uette
                <span class="card__list-divider"></span>
                $0.25
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="about" class="about">
        <h2 class="about__title">About the coffee shop</h2>
        <div class="about__content">
          <p class="about__paragraph">
            Our coffee shop is located in the Triple Peaks Library. It features
            6 tables and free WiFi.
          </p>

          <p class="about__paragraph">
            Our main mission is keeping guests cozy and energized.
          </p>

          <p class="about__paragraph">
            Besides that, we try to reduce our environmental impact — so we
            don't sell single-use cups. But you can buy one of our reusable
            cups!
          </p>
        </div>
        <div class="about__circle"></div>
        <div class="about__circle about__circle_animation_blurred"></div>
      </section>
    </main>
  );
}

export default Main;
