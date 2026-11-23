import "./Footer.css";
import logoLight from "../../../images/logo_coffeeshop_light.svg";
import github from "../../../images/github.svg";
import LinkedIn from "../../../images/LinkedIn.svg";

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
          <h4 className="footer__social-heading">Connect With Me</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a
                href="https://github.com/Iliascka"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img
                  src={github}
                  alt="Facebook-icon"
                  className="footer__social-icon"
                />
                GitHub
              </a>
            </li>
            <li className="footer__list-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.linkedin.com/in/ilias-katsantonis"
                className="footer__social-link"
              >
                <img
                  src={LinkedIn}
                  alt="Instagram-icon"
                  className="footer__social-icon"
                />
                LinkedIn
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
