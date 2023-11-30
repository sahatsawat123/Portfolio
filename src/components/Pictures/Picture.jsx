const Picture = ({ Picture, title }) => {
  if (!Picture) return null;
  return (
    <div>
      <img
        src={Picture}
        alt={title}
        className="w-4/6 rounded-md border-2 border-primaryBG"
      />
    </div>
  );
};
export default Picture;
