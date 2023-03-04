import CV from "../../files/nikolay_chumak.pdf";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nick</em>
          </strong>
          <br />a full stack developer
        </h1>
        <div className="header__text">
          <p>with a passion for learning and coding.</p>
        </div>
        <div className="header__download-box">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a
            href="https://drive.google.com/file/d/1aM_4Ux1QgoSCO7Sjex1N2DrNVcDcYqU3/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Link to CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
