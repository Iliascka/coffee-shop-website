function Footer() {
  return (
    <footer id="contacts" class="footer">
      <div class="footer__content">
        <img
          src="./images/logo_coffeeshop_light.svg"
          alt="Triple Peaks logo coffeeshop"
          class="footer__logo"
        />
        <div class="footer__column">
          <h4 class="footer__social-heading">Social media</h4>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a href="#" class="footer__social-link">
                <img
                  src="./images/facebook_white.svg"
                  alt="Facebook-icon"
                  class="footer__social-icon"
                />
                Facebook
              </a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__social-link">
                <img
                  src="./images/instagram_white.svg"
                  alt="Instagram-icon"
                  class="footer__social-icon"
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p class="footer__copyright">&copy; 2025 Ilias Katsantonis</p>
    </footer>
  );
}

export default Footer;
