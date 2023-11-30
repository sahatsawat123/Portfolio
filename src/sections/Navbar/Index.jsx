/* eslint-disable react/prop-types */
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
];

const Navbar = ({ NavbarItems, currentSection }) => {
  const [MouseEnter, setMouseEnter] = useState({});

  const handleclick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  console.log(currentSection);

  return (
    <div className="hidden lg:flex flex-col  fonr-semibold cursor-pointer">
      {NavbarItems.map((e, i) => (
        <div
          key={`${e}-Navs-${i}`}
          onClick={() => handleclick(e.sectionId)}
          onMouseEnter={() => setMouseEnter({ [e.title]: true })}
          onMouseLeave={() => setMouseEnter({ [e.title]: false })}
          className="cursor-pointer flex py-3"
        >
          <div>
            <FontAwesomeIcon
              className={` new-arrow ${
                currentSection === e.sectionId
                  ? "text-primaryTitle"
                  : MouseEnter[e.title]
                  ? ""
                  : "hidden"
              }`}
              icon={faArrowRight}
            />
          </div>
          <div
            className={`${
              currentSection === e.sectionId || MouseEnter[e.title]
                ? "text-primaryHeader translate-x-3 "
                : ""
            } duration-500 ease-out `}
          >
            {e.title}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Navbar;
