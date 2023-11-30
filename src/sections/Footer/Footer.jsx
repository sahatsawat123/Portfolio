import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-end">
        <span>
          Power by React.js and Tailwind
          <FontAwesomeIcon className="ml-2" icon={faGithub}></FontAwesomeIcon>
        </span>
      </div>
    </div>
  );
};
export default Footer;
