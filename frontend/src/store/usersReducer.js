import { csrfFetch } from "./csrf";

// ACTION TYPES
const RECEIVE_USER = "users/RECEIVE_USER";
const REMOVE_USER = "users/REMOVE_USER";

// ACTION CREATORS
export const receiveUser = (user) => ({
	type: RECEIVE_USER,
	user,
});

export const removeUser = () => ({
	type: REMOVE_USER,
});

export const getActiveUser = () => (state) => {
	if (state && state.session) {
		return state.session.user;
	}

	return null;
};

export const loginUser = (userCredentials) => async (dispatch) => {
	let res = await csrfFetch("/api/session", {
		method: "POST",
		body: JSON.stringify(userCredentials),
	});

	if (res.ok) {
		const  user  = await res.json();
		sessionStorage.setItem("currentUser", JSON.stringify(user));

		dispatch(receiveUser(user));
	} else {
		const { errors } = await res.json();
		throw new Error(errors);
	}
};

export const logoutUser = () => async (dispatch) => {
	await csrfFetch("/api/session", {
		method: "DELETE",
	});
	sessionStorage.setItem("currentUser", null);
	dispatch(removeUser());
};

export const createUser = (user) => async (dispatch) => {
	let res = await csrfFetch("/api/users", {
		method: "POST",
		body: JSON.stringify(user),
	});

	if (res.ok) {
		let data = await res.json();
		sessionStorage.setItem("currentUser", JSON.stringify(data.user));
		dispatch(receiveUser(data.user));
	} else {
		const { errors } = await res.json();
		throw new Error(errors);
	}
};

export const fetchCurrentUser = () => async (dispatch) => {
	const res = await csrfFetch("/api/session");

	if (res.ok) {
		const user = await res.json();
		dispatch(receiveUser(user));
	}
};

// REDUCER
const userReducer = (state = {}, action) => {
	const nextState = { ...state };

	switch (action.type) {
		case RECEIVE_USER:
			nextState.user = action.user;
			return nextState;
		case REMOVE_USER:
			delete nextState["user"];
			return nextState;
		default:
			return state;
	}
};

export default userReducer;
