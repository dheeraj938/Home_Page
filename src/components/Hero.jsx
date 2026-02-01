import "../styles/hero.css";
import bg from "../assets/images/bg.jpeg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text-top">
          <h1>"Where Creativity Meets Professional Excellence"</h1>
        </div>
        
        <div className="hero-text-bottom">
          <p>
            Creative Lines Academy is a leading Interior Designing institute,
            shaping future design professionals through premium education,
            expert mentorship, and real-world exposure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
