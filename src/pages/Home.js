import Header from "./../components/header/Header";
import { skills } from "../helpers/skillsList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Frontend</h2>
              <ul className="skills">
                {skills.front.map((skill, i) => (
                  <li className="skills__item" key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Backend</h2>
              <ul className="skills">
                {skills.back.map((skill, i) => (
                  <li className="skills__item" key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Database</h2>
              <ul className="skills">
                {skills.database.map((skill, i) => (
                  <li className="skills__item" key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
