import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser } from "../../store/usersReducer";
import "./index.scss";
import ListItem from "./ListItem";

const NewAccountForm = ({ closeModalFunc }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState({
		password: "",
		1: false,
		2: false,
		3: false,
		4: false,
	});
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(
			createUser({ username: email, password }),
			closeModalFunc()
		).catch(async (res) => {
			let data;
			try {
				data = await res.json();
			} catch {
				data = await res.text(); // Will hit this case if the server is down
			}
			if (data?.errors) setErrors(data.errors);
			else if (data) setErrors([data]);
			else setErrors([res.statusText]);
		});
	};

	const mixOfLettersAndNumbers = (password) => {
        const regex = /^(?=.*[A-Za-z0-9])(?=.*\d)/;
		return regex.test(password);
	};

	const atLeastOneSpecialCharacter = (password) => {
		const regex = /[^a-zA-Z0-9]/;
		return regex.test(password);
	};

	const atLeastOneUppercaseAndLowerCaseLetter = (password) => {
		const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
		return regex.test(password);
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();

		const changedPassword = e.target.value;

		let newPass = {
			password: changedPassword,
			1: false,
			2: false,
			3: false,
			4: false,
		};

		if (changedPassword.length >= 8) {
			newPass[1] = true;
		}
		if (mixOfLettersAndNumbers(changedPassword)) {
			newPass[2] = true;
		}
		if (atLeastOneSpecialCharacter(changedPassword)) {
			newPass[3] = true;
		}
		if (atLeastOneUppercaseAndLowerCaseLetter(changedPassword)) {
			newPass[4] = true;
		}

		setPassword(newPass);
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="login_form">
				<ul>
					{errors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
				<div className="account_inputs_container">
					<label className="form_first_element account_inputs__label">
						Email
						<input
							type="text"
							value={email}
							onChange={(e) =>
								setEmail(
									e.target
										.value
								)
							}
							placeholder="Enter Email"
							required
						/>
					</label>

					<label className="account_inputs__label">
						Password
						<input
							type="password"
							value={
								password.password
							}
							onChange={
								handlePasswordChange
							}
							placeholder="Enter Password"
						/>
					</label>

					<ul className="validation_list">
						<ListItem
							text={
								"At least 8 characters "
							}
							valid={password[1]}
						/>
						<ListItem
							text={
								"Mix of letters and numbers"
							}
							valid={password[2]}
						/>
						<ListItem
							text={
								"Contains a special character"
							}
                            valid={password[3]}
						/>
						<ListItem
							text={
								"Mix of uppercase and lowercase letters"
							}
                            valid={password[4]}
						/>
					</ul>

					<div>
						<button>Sign in</button>
						<button>Demo User</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default NewAccountForm;
