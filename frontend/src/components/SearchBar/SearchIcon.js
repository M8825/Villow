import "./SearchIcon.scss";

const SearchIcon = () => {
	return (
		<div className="search_container__search_button">
			<svg
				viewBox="0 0 32 32"
				aria-hidden="true"
				focusable="false"
				role="img"
			>
				<path
					stroke="none"
					d="M29.41,26.59,23.77,21A12,12,0,0,0,14,2c-.17,0-.33,0-.5,0s-.33,0-.5,0A11,11,0,0,0,2,13c0,.17,0,.33,0,.5s0,.33,0,.5a12,12,0,0,0,19,9.77l5.64,5.64a2,2,0,0,0,2.82-2.82ZM14,22a8,8,0,1,1,8-8A8,8,0,0,1,14,22Z"
				></path>
			</svg>
		</div>
	);
};

export default SearchIcon;
