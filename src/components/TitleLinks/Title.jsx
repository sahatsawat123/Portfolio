import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Title = ({ Ishighlight, title, link }) => {
  if (!link) {
    return (
      <div
        className={`text-primaryTitle text-2xl ${
          Ishighlight ? "text-primaryTitle" : ""
        }`}
      >
        {title}
      </div>
    );
  }

  return (
    <div
      className={`text-primaryTitle text-2xl ${
        Ishighlight ? "text-primaryTitle" : ""
      }`}
    >
      <a href={link} target="_blank" rel="noreferrer">
        {title}
        <FontAwesomeIcon
          className={`text-xs -rotate-45 duration-300 ease-out ${
            Ishighlight ? "translate-x-1 -translate-y-1" : ""
          }`}
          icon={faArrowRight}
        />
      </a>
    </div>
  );
};
export default Title;
