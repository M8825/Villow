import "./SuggestionIcon.scss";

const CurrentLocationIcon = () => {
	return (
		<div className="splash-search-suggestion-icon">
			<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(5 1)" fill="none" fillRule="evenodd">
					<path
						d="M.39 4.114C1.534.75 4.763 0 6.987 0s5.352.75 6.596 4.114C16.018 10.694 6.987 22 6.987 22S-1.949 11 .39 4.114z"
						stroke="#006AFF"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<circle fill="#A6E5FF" cx="7" cy="7" r="3"></circle>
				</g>
			</svg>
		</div>
	);
};

export default CurrentLocationIcon;
