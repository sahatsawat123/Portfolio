import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function App() {
  const [sectionIds, setsectionsID] = useState([]);
  const [NavbarItems, setNavbarItems] = useState([]);
  const [currentSection, setcurrentSection] = useState("");

  const addsectionID = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setsectionsID((prev) => [...new Set([...prev, elementId])]);

    const elementtitle =
      document.getElementById(sectionId).childNodes[0].textContent;

    //{ title: "Article", sectionId: "Article-section" }
    const obj = { title: elementtitle, sectionId: elementId };

    setNavbarItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handelscroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const eloffsetTop = document.getElementById(el).getClientRects()[0].y;
      const height = document.getElementById(el).getClientRects()[0].height;
      const viewHeight = window.innerHeight * 0.3;

      if (eloffsetTop <= 0) {
        if (eloffsetTop + height > viewHeight) {
          setcurrentSection(el);
        }
      } else if (eloffsetTop > 0 && eloffsetTop < viewHeight) {
        setcurrentSection(el);
      }
    }
  };

  useEffect(() => {
    if (sectionIds.length > 0) {
      setcurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handelscroll);

    return () => {
      removeEventListener("scroll", handelscroll);
    };
  }),
    [sectionIds];

  return (
    <div className=" mt-14 mx-auto max-w-6xl gap-y-5 grid lg:grid-cols-[40%_60%]">
      <LeftSection NavbarItems={NavbarItems} currentSection={currentSection} />
      <RightSection
        NavbarItems={NavbarItems}
        currentSection={currentSection}
        oninital={addsectionID}
      />
    </div>
  );
}

export default App;
