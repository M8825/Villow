export function formatNumberToK(number) {
	// Divide by 1000 and round to the nearest whole number
	const dividedNumber = Math.round(number / 1000);
	return `${dividedNumber}K`; // Add the 'K' at the end
}

export const containerStyle = {
	width: "100%",
	height: "100vh",
};
