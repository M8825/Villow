const LandingPage = ({ handlePostListing }) => {
	return (
		<div className="create-listing-wrapper">
			<div className="header">
				<h1>Sell your home with confidence</h1>
				<p>
					Villow is making it simpler to sell your home and move
					forward.
				</p>
			</div>

			<div className="content-wrapper">
				<div className="content">
					<div className="description">
						<h1>Sell your home yourself</h1>
						<p>
							Deciding to sell your home yourself is referred to
							as for-sale-by-owner (FSBO). The FSBO process is
							similar to traditional selling, but without the help
							of a real estate agent. In this case, you’re
							responsible for the home prep, marketing, showings,
							and negotiations.
						</p>
						<button
							type="submit"
							onClick={e => handlePostListing(e, "LandingPage")}
							className="post-listing"
						>
							Post your home for sale
						</button>
					</div>
					<div>
						<img
							src="https://blog-media.dev.zg-core.com/bedrock/app/uploads/sites/11/2022/02/Sell_My_HomeV1102.png"
							alt="FSBO"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
