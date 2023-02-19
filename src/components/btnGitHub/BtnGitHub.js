import gitHubIcon from "./gitHub-black.svg";
import websiteLink from "./world.svg";
import "./style.css";

const types = {
  gitHubFront: {
    img: gitHubIcon,
    text: "GitHub repo",
  },

  gitHubBack: {
    img: gitHubIcon,
    text: "GitHub backend",
  },

  siteLink: {
    img: websiteLink,
    text: "Website link",
  },
};

const BtnGitHub = ({ link, type = "gitHubFront" }) => {
  console.log(type);
  console.log(types[type]);
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={types[type].img} alt={types[type].text} />
      {types[type].text}
    </a>
  );
};

export default BtnGitHub;
