/* eslint-disable react/prop-types */
const Tech = ({ Ishighlight, data }) => {
  return (
    <div className="flex gap-x-4 text-sm">
      {data.map((e, i) => (
        <div
          key={`${e}-tech-${i}`}
          className={`bg-primarySubContent px-2 py-1 rounded-md ${
            Ishighlight ? "text-primaryTitle" : ""
          } hover:text-primaryContent`}
        >
          {e}
        </div>
      ))}
    </div>
  );
};
export default Tech;
