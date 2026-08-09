import "./About.css";
function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About the coffee shop</h2>
      <div className="about__content">
        <p className="about__paragraph">
          Our coffee shop is located in the Triple Peaks Library. It features 6
          tables and free WiFi.
        </p>

        <p className="about__paragraph">
          Our main mission is keeping guests cozy and energized.
        </p>

        <p className="about__paragraph">
          Besides that, we try to reduce our environmental impact — so we don't
          sell single-use cups. But you can buy one of our reusable cups!
        </p>
      </div>
      <div className="about__circle"></div>
      <div className="about__circle about__circle_animation_blurred"></div>
    </section>
  );
}

export default About;
