export const restoreSession = async () => {
  let res = await csrfFetch("/api/session");

  let token = res.headers.get("X-CSRF-Token");
  if (token) {
    localStorage.setItem("X-CSRF-Token", token);
  }
  let data = await res.json();
  if (data && data.user) {
    localStorage.setItem("currentUser", JSON.stringify(data.user));
  }
};

export const csrfFetch = async (url, options = {}) => {
  url = process.env.REACT_APP_BACKEND_URL + url;
  options.method ||= "GET";
  options.headers ||= {};

  // Modified to accept formData type
  options.headers["X-CSRF-Token"] = localStorage.getItem("X-CSRF-Token");
  options.credentials = "include"; // This line is added to include cookies

  if (options.method.toUpperCase() !== "GET") {
    if (
      !options.headers["Content-Type"] &&
      !(options.body instanceof FormData)
    ) {
      options.headers["Content-Type"] = "application/json";
    }
  }

console.log("Options: ", options)
  const res = await fetch(url, options);
  return res;
};
