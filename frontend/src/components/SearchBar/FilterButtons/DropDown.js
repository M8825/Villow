import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const DropDown = (props) => {
  const {children, buttonValue, handleSubmit} = props;
	const buttonRef = useRef();

	const [dropDown, setDropDown] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				dropDown &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target)
			) {
				setDropDown(false);
			}
		};

		if (dropDown) {
			document.addEventListener("click", handleClickOutside);
		}

		return () => document.removeEventListener("click", handleClickOutside);
	}, [dropDown]);

	function onForSaleButtonClick(e) {
		if (e.currentTarget === buttonRef.current) {
			setDropDown(!dropDown);
		}
	}

	return (
		<div className="home-listing-type-wrapper">
			<button
				className={`filter-btn ${buttonValue ? "selected" : ""}`}
				ref={buttonRef}
				onClick={onForSaleButtonClick}
			>
				<span>For {buttonValue}</span>
				<FontAwesomeIcon icon={dropDown ? faAngleUp : faAngleDown} />
			</button>
			{dropDown && (
				<div className="dropdown" onClick={(e) => e.stopPropagation()}>
					<form className="dropdown-form" onSubmit={e => handleSubmit(e, setDropDown)}>
						{children}
					</form>
				</div>
			)}
		</div>
	);
};

export default DropDown;
