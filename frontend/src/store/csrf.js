export const restoreSession = async () => {
	// TODO: prevent console 401 error
	let res = await csrfFetch("/api/session");
	let token = res.headers.get("X-CSRF-Token");
	sessionStorage.setItem("X-CSRF-Token", token);
	let data = await res.json();
	sessionStorage.setItem("currentUser", JSON.stringify(data.user));
};

export const csrfFetch = async (url, options = {}) => {
	options.method ||= "GET";
	options.headers ||= {};

	// will need to modify this when using formData to attach resources like photos
	// can't have a Content-Type header
	// if (options.method.toUpperCase() !== 'GET') {
	//     options.headers['Content-Type'] = 'application/json';
	//     options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
	// }

	// Modified for formData
	if (options.method.toUpperCase() !== "GET") {
		options.headers["X-CSRF-Token"] =
			sessionStorage.getItem("X-CSRF-Token");

		if (
			!options.headers["Content-Type"] &&
			!(options.body instanceof FormData)
		) {
			options.headers["Content-Type"] = "application/json";
		}
	}

	const res = await fetch(url, options);
	return res;
};
