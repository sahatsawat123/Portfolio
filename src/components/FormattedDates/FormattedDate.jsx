const FormattedDate = ({ Ishighlight, children }) => {
  return (
    <div>
      <span className={`text-sm ${Ishighlight ? "text-primaryTitle" : ""}`}>
        {children}
      </span>
    </div>
  );
};
export default FormattedDate;
