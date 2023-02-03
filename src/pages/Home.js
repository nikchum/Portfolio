import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Frontend</h2>
              <p>
                JavaScript, ReactJS, Redux, HTML, CSS, SASS, TailwindCSS, NPM,
                Yarn, StyledComponents, REST, API, GIT, WebPack/Parcel/Gulp
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Backend</h2>
              <p>NodeJS, Express</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2 title-2_box-shadow">Database</h2>
              <p>MongoDB, Mongoose</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
