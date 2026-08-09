import "./Recipes.css";

function Recipes() {
  return (
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
  );
}

export default Recipes;
