const DropDown = (props) => {
  const { handleSubmit, children } = props;


  return (
    <div className="dropdown" onClick={(e) => e.stopPropagation()}>
      <form className="dropdown-form" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};

export default DropDown;
