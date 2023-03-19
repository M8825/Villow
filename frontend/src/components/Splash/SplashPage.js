import ListingsCarousel from "../ListingsCarousel/ListingsCarousel";
import Layout from "../Cards";
import Footer from "../Footer";
import Navigation from "../Header/Navigation";

const SplashPage = () => {
	return (
		<>
			<Navigation />
			<ListingsCarousel
				header={"Homes For You in New York, NY"}
				paragraph={"Based on your view history"}
			/>
			<Layout />
			<ListingsCarousel
				header={"Trending Homes in New York, NY"}
				paragraph={"Popular listings in the area"}
			/>
			<ListingsCarousel
				header={"Selling Soon Homes in New York, NY"}
				paragraph={"Likely to sell faster than 80% of homes nearby"}
			/>
			<Footer />
		</>
	);
};

export default SplashPage;
