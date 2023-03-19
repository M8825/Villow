import ListingIndex from "../listing";
import Layout from "../cards";
import Footer from "../footer";
import Nav from "../header/Navigation";

const SplashPage = () => {
	return (
		<>
            <Nav />
			<ListingIndex
				header={"Homes For You in New York, NY"}
				paragraph={"Based on your view history"}
			/>
			<Layout />
			<ListingIndex
				header={"Trending Homes in New York, NY"}
				paragraph={"Popular listings in the area"}
			/>
			<ListingIndex
				header={"Selling Soon Homes in New York, NY"}
				paragraph={"Likely to sell faster than 80% of homes nearby"}
			/>
			<Footer />
		</>
	);
};

export default SplashPage;
