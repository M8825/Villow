export const restoreSession = async () => {
  // Check if a CSRF token is stored before attempting to restore the session
  const storedToken = sessionStorage.getItem("X-CSRF-Token");
  if (!storedToken) {
    return; // Exit the function as there is no token to validate
  }

  try {
    let res = await csrfFetch("/api/session");

    if (res.ok) {
      let token = res.headers.get("X-CSRF-Token");
      sessionStorage.setItem("X-CSRF-Token", token);

      let data = await res.json();
      sessionStorage.setItem("currentUser", JSON.stringify(data.user));
    } else {
      // The user is not authorized or the session cannot be restored
      console.log("User is not signed in or session cannot be restored.");
      sessionStorage.removeItem("X-CSRF-Token");
      sessionStorage.removeItem("currentUser");
      // Redirect to login or perform other appropriate action
    }
  } catch (error) {
    // Handle fetch errors
    console.error("Error in restoreSession:", error);
  }
};

export const csrfFetch = async (url, options = {}) => {
	options.method ||= "GET";
	options.headers ||= {};

	// Modified to accept formData type
	if (options.method.toUpperCase() !== "GET") {
		options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");

		if (
			!options.headers["Content-Type"] &&
			!(options.body instanceof FormData)
		) {
			options.headers["Content-Type"] = "application/json";
		}
	}

  try {
    const res = await fetch(url, options);
	  return res;
  } catch (error) {
  }
};
