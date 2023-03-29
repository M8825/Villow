import "./SuggestionItem.scss";

const SuggestionItem = ({ suggestion, searchFilter }) => {
	const handleSearchOnClickItem = (e) => {
		e.preventDefault();

		debugger;

	};

	return (
		<li className="suggestion-item" onClick={handleSearchOnClickItem}>
			{suggestion}
		</li>
	);
};

export default SuggestionItem;
