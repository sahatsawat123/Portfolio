import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="flex items-end gap-4 text-2xl">
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryBase transition-all"
          icon={faGithub}
        />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="hover:scale-125  hover:text-primaryBase transition-all"
          icon={faLinkedin}
        />
      </a>
    </div>
  );
};
export default Contact;
