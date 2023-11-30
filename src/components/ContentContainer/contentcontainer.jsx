/* eslint-disable react/prop-types */
import { useState } from "react";
import FormattedDate from "../FormattedDates/FormattedDate";
import Picture from "../Pictures/Picture";
import Title from "../TitleLinks/Title";
import Materials from "../Materials/Materials";
import Description from "../Descriptions/Description";
import Tech from "../Techs/Tech";
import { useEffect } from "react";

const Contentcontainer = ({
  title: SectionTitle = "",
  data = [],
  oninital,
}) => {
  const [mountEnter, IssetmountEnter] = useState({});

  const Section_ID = `${SectionTitle}-section`;

  useEffect(() => {
    oninital(Section_ID);
  }, []);

  return (
    <div id={Section_ID} className="scroll-m-14">
      <div className="text-primaryAccent font-medium px-2">{SectionTitle}</div>
      {data.map(
        (
          {
            date = "",
            title = "",
            link = "",
            materials = [],
            description = [],
            skill = [],
            picture,
          },
          index
        ) => (
          <div
            key={`${Section_ID}-${index}-${title.replaceAll(" ", "")}`}
            className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${
              mountEnter[`${Section_ID}-${index}`] ? "bg-primaryBase" : ""
            }`}
            onMouseEnter={() =>
              IssetmountEnter({ [`${Section_ID}-${index}`]: true })
            }
            onMouseLeave={() =>
              IssetmountEnter({ [`${Section_ID}-${index}`]: false })
            }
          >
            <div>
              <FormattedDate Ishighlight={mountEnter[`${Section_ID}-${index}`]}>
                {date}
              </FormattedDate>
              <Picture Picture={picture} title={title}></Picture>
            </div>

            <div className="grid gap-y-4">
              <Title
                Ishighlight={mountEnter[`${Section_ID}-${index}`]}
                title={title}
                link={link}
              />
              {materials > 0 ? (
                <div className="flex-gap-4 text-xl items-center">
                  {materials.map((e, i) => (
                    <Materials
                      key={`${e}-material-${i}`}
                      icon={e.type}
                      link={e.link}
                    ></Materials>
                  ))}
                </div>
              ) : null}
              <div className="flex-gap-4 text-xl">
                {materials.map((e, i) => (
                  <Materials
                    key={`${e}-material-${i}`}
                    icon={e.type}
                    link={e.link}
                  ></Materials>
                ))}
              </div>
              <Description Description={description}></Description>
              {skill.map((e, i) => (
                <Tech
                  key={`${e}-skill-${i}`}
                  Ishighlight={mountEnter[`${Section_ID}-${index}`]}
                  data={e}
                ></Tech>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Contentcontainer;
