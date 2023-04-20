const CheckMarks = ({ homeType }) => {
  return (
    <label htmlFor={homeType.toLowerCase()} className="home-type-checkbox-container">
      <input type="checkbox" id={homeType.toLowerCase()} name={homeType}/>
      <span>{homeType}</span>
    </label>
  );
};

export default CheckMarks;
