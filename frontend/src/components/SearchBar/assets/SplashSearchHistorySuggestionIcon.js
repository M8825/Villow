import "./SuggestionIcon.scss"

const SplashSearchHistorySuggestionIcon = () => {
	return (
		<div className="splash-search-suggestion-icon">
			<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fillRule="evenodd">
					<g stroke="#006AFF" strokeWidth="2">
						<circle cx="11" cy="11" r="10"></circle>
						<path d="M18.741 18.741l4.116 4.116" strokeLinecap="round"></path>
					</g>
					<path
						d="M10.953 7.157c-1.532-1.155-3.7-1.553-4.992-.14a3.654 3.654 0 0 0 .029 4.97l4.963 4.922 4.963-4.921a3.662 3.662 0 0 0 0-5.203c-1.353-1.322-3.494-.822-4.963.372z"
						fill="#A6E5FF"
						fillRule="nonzero"
					></path>
				</g>
			</svg>
		</div>
	);
};

export default SplashSearchHistorySuggestionIcon;
