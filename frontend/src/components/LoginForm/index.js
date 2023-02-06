import React, { useState } from "react";
// import * as sessionActions from '../../store/session';
import { loginUser, logoutUser, createuser } from "../../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@chakra-ui/react";

const LoginForm = ({ closeModalFunc }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => {
		const valueArray = Object.values(state.user);

		if (valueArray.length > 0) {
			return true;
		}

		return false;
	});


	const [username, setCredential] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);


	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		debugger
		return dispatch(loginUser({ username, password }), closeModalFunc()).catch(
			async (res) => {
				let data;
				try {
					// .clone() essentially allows you to read the response body twice
					data = await res.json();
				} catch {
					data = await res.text(); // Will hit this case if the server is down
				}
				if (data?.errors) setErrors(data.errors);
				else if (data) setErrors([data]);
				else setErrors([res.statusText]);
			}
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			<ul>
				{errors.map((error) => (
					<li key={error}>{error}</li>
				))}
			</ul>
			<label>
				Email
				<Input
					type="text"
					value={username}
					onChange={(e) =>
						setCredential(e.target.value)
					}
					required
				/>
			</label>
			<label>
				Password
				<Input
					type="password"
					value={password}
					onChange={(e) =>
						setPassword(e.target.value)
					}
					required
				/>
			</label>
			<Button bgColor={"#0061FF"} color="rgb(255 255 255)"  type="submit">Sign In</Button>
		</form>
	);
};

export default LoginForm;
