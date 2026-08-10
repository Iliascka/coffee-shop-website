import "./Footer.css";
import logoLight from "../../../images/logo_coffeeshop_light.svg";
import facebookWhite from "../../../images/facebook_white.svg";
import instagramWhite from "../../../images/instagram_white.svg";

function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="footer__content">
        <img
          src={logoLight}
          alt="Triple Peaks logo coffeeshop"
          className="footer__logo"
        />
        <div className="footer__column">
          <h4 className="footer__social-heading">Social media</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__social-link">
                <img
                  src={facebookWhite}
                  alt="Facebook-icon"
                  className="footer__social-icon"
                />
                Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__social-link">
                <img
                  src={instagramWhite}
                  alt="Instagram-icon"
                  className="footer__social-icon"
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">&copy; 2026 Ilias Katsantonis</p>
    </footer>
  );
}

export default Footer;
