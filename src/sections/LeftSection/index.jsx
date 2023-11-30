import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar/Index";

const LeftSection = ({ NavbarItems, currentSection }) => {
  return (
    <div className="px-2 mb-14 lg:mb-0">
      <div className="sticky px-3 top-14 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[81vh]">
        <Header />
        <Navbar NavbarItems={NavbarItems} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  );
};
export default LeftSection;
