import React from "react";

export const Building = () => {
	return (
		<svg viewBox="0 0 32 32" width={24} height={24}>
			<title>Type</title>
			<g stroke="none" className="details-icon">
				<path d="M24 2H8a2 2 0 00-2 2v24a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-9 26v-5h2v5zm9 0h-5v-6.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V28H8V4h16z"></path>
				<rect x="11" y="13" width="4" height="4" rx=".5"></rect>
				<rect x="17" y="13" width="4" height="4" rx=".5"></rect>
				<rect x="11" y="7" width="4" height="4" rx=".5"></rect>
				<rect x="17" y="7" width="4" height="4" rx=".5"></rect>
			</g>
		</svg>
	);
};

export const Calendar = () => {
	return (
		<svg
			viewBox="0 0 32 32"
			aria-hidden="true"
			focusable="false"
			role="img"
			width={24}
			height={24}
		>
			<title>Year Built</title>
			<g stroke="none" className="details-icon">
				<rect x="8" y="16" width="4" height="4" rx=".5"></rect>
				<rect x="20" y="16" width="4" height="4" rx=".5"></rect>
				<rect x="14" y="16" width="4" height="4" rx=".5"></rect>
				<rect x="8" y="22" width="4" height="4" rx=".5"></rect>
				<rect x="20" y="22" width="4" height="4" rx=".5"></rect>
				<rect x="14" y="22" width="4" height="4" rx=".5"></rect>
				<path d="M25 5h-1V3a1 1 0 00-2 0v2H10V3a1 1 0 00-2 0v2H7a3 3 0 00-3 3v19a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3zM7 7h1v2a1 1 0 002 0V7h12v2a1 1 0 002 0V7h1a1 1 0 011 1v4H6V8a1 1 0 011-1zm18 21H7a1 1 0 01-1-1V14h20v13a1 1 0 01-1 1z"></path>
			</g>
		</svg>
	);
};

export const Heating = () => {
	return (
		<svg
			viewBox="0 0 32 32"
			aria-hidden="true"
			focusable="false"
			role="img"
			width={24}
			height={24}
		>
			<title>Heating</title>
			<g stroke="none" className="details-icon">
				<path d="M21 18.11V7a5 5 0 00-10 0v11.11a7 7 0 1010 0zM16 28a5 5 0 01-3.57-8.5l.57-.58V7a3 3 0 016 0v11.92l.57.58A5 5 0 0116 28z"></path>
				<path d="M17 20.18V8a1 1 0 00-2 0v12.18a3 3 0 102 0z"></path>
			</g>
		</svg>
	);
};

export const Cooling = () => {
	return (
		<svg
			viewBox="0 0 32 32"
			aria-hidden="true"
			focusable="false"
			role="img"
			width={24}
			height={24}
		>
			<title>Cooling</title>
			<path
				stroke="none"
				className="details-icon"
				d="M28.49 17.71a1 1 0 00-1.23-.71l-5.06 1.34L18 16l4.2-2.34L27.26 15h.26a1 1 0 001-.71 1 1 0 00-.71-1.18l-3.13-.81 3.1-1.73a.94.94 0 00.37-1.31 1 1 0 00-1.37-.35l-3.1 1.72.84-3a1 1 0 00-.71-1.18 1 1 0 00-1.22.68L21.2 12 17 14.33V9.66l3.7-3.57a.94.94 0 000-1.36 1 1 0 00-1.41 0L17 6.93V3a1 1 0 00-2 0v4l-2.29-2.2a1 1 0 00-1.41 0 .94.94 0 000 1.36l3.7 3.5v4.67L10.8 12 9.44 7.12a1 1 0 00-1.22-.68 1 1 0 00-.71 1.18l.84 3-3.1-1.71a1 1 0 00-1.37.35.94.94 0 00.37 1.31l3.1 1.73-3.13.81a1 1 0 00-.71 1.18 1 1 0 001 .71h.26l5.03-1.34L14 16l-4.2 2.34L4.74 17a1 1 0 00-1.23.68 1 1 0 00.71 1.18l3.13.81-3.1 1.73a.94.94 0 00-.37 1.31 1 1 0 001.37.35l3.1-1.72-.84 3a1 1 0 00.71 1.18.78.78 0 00.26 0 1 1 0 001-.72L10.8 20l4.2-2.33v4.67l-3.7 3.57a.94.94 0 000 1.36 1 1 0 001.41 0l2.29-2.2v4a1 1 0 002 0v-4l2.29 2.2a1 1 0 00.71.29 1 1 0 00.7-.29.94.94 0 000-1.36L17 22.34v-4.67L21.2 20l1.36 4.87a1 1 0 001 .72.78.78 0 00.26 0 1 1 0 00.71-1.18l-.84-3 3.1 1.72a1 1 0 001.37-.35.94.94 0 00-.37-1.31l-3.1-1.73 3.13-.81a1 1 0 00.67-1.22z"
			></path>
		</svg>
	);
};

export const Logo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 162 34"
			width="140"
			height="32"
		>
			<title id="zillow-logo-title">Zillow</title>
			<path
				fill="rgb(0, 106, 255)"
				d="M124 12.6h6.7l2 6.2a253.4 253.4 0 011.7 6l1.7-6 2-6.2h4.9l2 6.2a230.6 230.6 0 011.7 6s1-3.9 1.7-6l2-6.2h6l-6.6 20.6h-6l-1.6-5a413.5 413.5 0 01-1.9-6s-1 3.8-1.8 5.9l-1.6 5.4h-6.2L124 12.6zM86.2 1.8h-6.7v31.7h6.7V1.8zM98 1.8h-6.8v31.7h6.7V1.8zM117.3 23c0-3-2.2-5.1-4.8-5.1-2.7 0-4.9 2-4.9 5.1 0 3.1 2.2 5.2 4.9 5.2 2.6 0 4.8-2 4.8-5.2zm-16.1 0c0-6.2 5-10.9 11.3-10.9a11 11 0 110 22 11 11 0 01-11.3-11M40.8 4.7v5.9h11.9v.2L41 31l-.4 1.1v1.4h22.8v-6.2H50.6l12-20.5.2-.8V4.7h-22zM67.7 12.6h6.8v20.9h-6.8V12.6zm3.4-10.3A3.8 3.8 0 0175 6a3.8 3.8 0 11-7.7 0 3.8 3.8 0 013.8-3.7M20.6 9a.3.3 0 01.3.2 163.3 163.3 0 012.7 3.4 61.4 61.4 0 00-9.3 9.2c3.7-1.6 12.3-4.1 16.2-4.8v-5L15.3 0 0 12v5.4c4.7-2.8 15.7-7.1 20.6-8.4z"
			></path>
			<path
				fill="rgb(0, 106, 255)"
				d="M8.2 29.7a.3.3 0 01-.3 0L5 26.3V26a53.6 53.6 0 019.6-10.4C11.6 16.6 3 20.2 0 22v11.5h30.5v-11c-4.2.6-16.6 4.3-22.3 7.2z"
			></path>
		</svg>
	);
};
