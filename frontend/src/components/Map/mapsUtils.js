export function formatNumberToK(number) {
	const dividedNumber = Math.round(number / 1000);
	return `${dividedNumber}K`;
}

export const containerStyle = {
	width: "100%",
	height: "100%",
};
