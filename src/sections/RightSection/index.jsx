import Contentcontainer from "../../components/ContentContainer/contentcontainer";
import About from "../About";

import { data as Experiencedata } from "../../contents/experience";
import { data as projectdata } from "../../contents/project";
import Footer from "../Footer/Footer";

const RightSection = ({ oninital, NavbarItems, currentSection }) => {
  return (
    <div className="grid gap-y-14 lg:gap-y-40 px-5">
      <About
        oninital={oninital}
        title="About"
        NavbarItems={NavbarItems}
        currentSection={currentSection}
      />
      <Contentcontainer
        oninital={oninital}
        title="Experience"
        data={Experiencedata}
      ></Contentcontainer>
      <Contentcontainer
        oninital={oninital}
        title="Project"
        data={projectdata}
      ></Contentcontainer>
      <Contentcontainer
        oninital={oninital}
        title="Article"
        data={projectdata}
      ></Contentcontainer>
      <Footer />
    </div>
  );
};
export default RightSection;
