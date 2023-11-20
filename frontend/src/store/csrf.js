export const restoreSession = async () => {
  let res = await csrfFetch("/api/session");

	console.log("VALUE OF res: ", res)
	console.log("VALUE OF res-headers: ", res.headers.get("X-CSRF-Token"))
  if (res.ok) {
    let token = res.headers.get("X-CSRF-Token");
    sessionStorage.setItem("X-CSRF-Token", token);
    let data = await res.json();
    sessionStorage.setItem("currentUser", JSON.stringify(data.user));
  }
};

export const csrfFetch = async (url, options = {}) => {
  url = process.env.REACT_APP_BACKEND_URL + url;
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

  const res = await fetch(url, options);
  return res;
};
