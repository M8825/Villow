const CheckMarks = ({ homeType, defChecked }) => {
  function handleChange(e) {
  }

  return (
    <label
      htmlFor={homeType.toLowerCase()}
      className="home-type-checkbox-container"
    >
      <input
        type="checkbox"
        id={homeType.toLowerCase()}
        name={homeType}
        onChange={handleChange}
        checked={defChecked}
      />
      <span>{homeType}</span>
    </label>
  );
};

export default CheckMarks;
