import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";
import image from "../../assets/numnguen.jpg";
const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-primaryTitle font-semibold">
        {data.name}
      </div>
      <div className="rounded-full inline-block ml-2">
        <img className="w-20 h-20 rounded-full mr-4" src={image} />
      </div>
      <div className="text-primaryTitle font-semibold">{data.title}</div>
      <div className="text-sm w-5/6">{data.caption}</div>
      <div className="mt-4 ">
        <a href={data.link} target="blank">
          <span className="rounded-md bg-primaryTitle text-gray-200 py-2 px-4 ">
            {data.btntext}
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};
export default Header;
