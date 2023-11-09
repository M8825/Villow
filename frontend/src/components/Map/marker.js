function createMarkerIcon(text, color) {
	const scale = window.devicePixelRatio; // Get the device pixel ratio
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	// Define the new dimensions, considering high DPI screens
	const width = 30 * scale;
	const height = 17 * scale; // The total canvas height, including the triangle part
	const bubbleHeight = height - 3 * scale; // The height of the rounded rectangle part

	// Adjust canvas size for high DPI screens
	canvas.width = width;
	canvas.height = height;

	// The corner radius for the rounded rectangle
	const cornerRadius = 7 * scale;

	// Draw the rounded rectangle (the bubble part)
	ctx.fillStyle = color === "red" ? "#891C16" : "green";
	ctx.beginPath();
	ctx.moveTo(cornerRadius, 0);
	ctx.lineTo(width - cornerRadius, 0);
	ctx.quadraticCurveTo(width, 0, width, cornerRadius);
	ctx.lineTo(width, bubbleHeight - cornerRadius);
	ctx.quadraticCurveTo(width, bubbleHeight, width - cornerRadius, bubbleHeight);
	ctx.lineTo(cornerRadius, bubbleHeight);
	ctx.quadraticCurveTo(0, bubbleHeight, 0, bubbleHeight - cornerRadius);
	ctx.lineTo(0, cornerRadius);
	ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
	ctx.closePath();
	ctx.fill();

	// Draw the triangle (the pointer part)
	const triangleBaseWidth = 5 * scale;
	ctx.beginPath();
	ctx.moveTo(width / 2 - triangleBaseWidth / 2, bubbleHeight);
	ctx.lineTo(width / 2, height);
	ctx.lineTo(width / 2 + triangleBaseWidth / 2, bubbleHeight);
	ctx.closePath();
	ctx.fill();

	// Set text styles
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.font = `16px Open Sans`;
	ctx.imageSmoothingEnabled = true;

	// Draw the text in the center of the bubble part
	ctx.fillText(text, width / 2, bubbleHeight / 2);

	return canvas.toDataURL();
}

export default createMarkerIcon;
