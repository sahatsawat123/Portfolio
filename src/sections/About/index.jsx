import { useEffect } from "react";
import { data } from "../../contents/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ({ oninital, title = "", currentSection }) => {
  const Section_ID = `${title}-section`;

  useEffect(() => {
    oninital(Section_ID);
  }, []);

  return (
    <div className="space-y-4 scroll-m-14" id={Section_ID}>
      <div className="text-primaryAccent font-medium px-2">{data.title}</div>
      <div>{data.Description}</div>
    </div>
  );
};
export default About;
