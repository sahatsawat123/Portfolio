import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Materials = ({ icon, link }) => {
  return (
    <div className="text-xl">
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="transition-all hover:scale-125"
          icon={icon}
        />
      </a>
    </div>
  );
};
export default Materials;
