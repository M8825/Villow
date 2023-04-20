const CheckMarks = ({ homeType, defChecked }) => {
  return (
    <label
      htmlFor={homeType.toLowerCase()}
      className="home-type-checkbox-container"
    >
      <input
        type="checkbox"
        id={homeType.toLowerCase()}
        name={homeType}
        defaultChecked={defChecked}
      />
      <span>{homeType}</span>
    </label>
  );
};

export default CheckMarks;
