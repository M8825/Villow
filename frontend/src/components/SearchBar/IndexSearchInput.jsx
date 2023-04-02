import "./IndexSearchInput.scss";
import SearchIcon from "./SearchIcon";

const IndexSearchInput = ({ focuseSearch, setFocuseSearch, searchRef }) => {
  const handleOnclick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setFocuseSearch(true);
  };

  const handleHover = (e) => e.target.classList.add("hovered");
  const onHoverLeave = (e) => e.target.classList.remove("hovered");

  return (
    <div className="search-component-wrapper">
      <div
        className={"search-input " + (focuseSearch ? "focused" : "not_focused")}
        onMouseEnter={handleHover}
        onMouseLeave={onHoverLeave}
        onClick={handleOnclick}
        ref={searchRef}
      >
        <input
          type="text"
          placeholder="Address, City, ZIP, state"
          className="text-input"
        />
        {!focuseSearch && (
          <div className="search-icon-wrapper">
            <SearchIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexSearchInput;
