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
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
