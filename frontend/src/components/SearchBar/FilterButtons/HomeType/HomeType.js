import DropDown from "../DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./HomeType.scss";

const HomeType = () => {
  return (
    <DropDown buttonValue={"Home Type"} selectedButton={true}>
      <div className="home-type-container">
        <div className="deselect-all-title-container">
          <h6>Home Type</h6>

          <div className="deselect-btn-container">
            <button className="deselect-btn">
              <FontAwesomeIcon icon={faCheck} className="icon"/>
            </button>
            <h6 className="deselect-text">Deselect All</h6>
          </div>
        </div>
      </div>
    </DropDown>
  );
};

export default HomeType;
