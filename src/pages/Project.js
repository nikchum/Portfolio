import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <h2 className="project-details__subtitle">{project.description}</h2>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="btn-box">
            {project.siteLink && (
              <BtnGitHub link={project.siteLink} type="siteLink" />
            )}
            {project.gitHubLink && (
              <BtnGitHub link={project.gitHubLink} type="gitHubFront" />
            )}
            {project.gitHubLinkBack && (
              <BtnGitHub link={project.gitHubLinkBack} type="gitHubBack" />
            )}
          </div>

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
