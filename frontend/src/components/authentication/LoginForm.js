import React, { useState } from "react";
import { loginUser } from "../../store/usersReducer";
import { useDispatch } from "react-redux";
import { Input, Button } from "@chakra-ui/react";
import FollowButtonLinks from "./FollowButtonLinks";
import { useHistory } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = ({ closeModalFunc }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);

		dispatch(loginUser({ email, password }, closeModalFunc)).catch(
			async (res) => {
				let data;

				if (res.ok) {
					data = await res.json();
				}

				if (data?.errors) setErrors(data.errors);
				else if (data) setErrors([data]);
				else setErrors([res.statusText]);
			}
		);
	};

	const demoUserHandleOnClick = () => {
		setPassword("Ilmangel123!");
		setEmail("mlkz@gmail.com");
		history.push("/")
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="login_form">
				{/* <ul>
					{errors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul> */}
				<br />
				<label className="login_form__label form_first_element">
					Email
					<Input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Email"
						required
					/>
				</label>
				<label className="login_form__label">
					Password
					<Input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter Password"
						required
					/>
				</label>
				<div className="button_group">
					<Button
						bgColor={"#0061FF"}
						color="rgb(255 255 255)"
						_hover={{ bg: "#204698" }}
						border="1px"
						borderColor="rgb(0 160 255)"
						margin="10px 0px 0px 0px"
						type="submit"
						height="44px"
					>
						Sign in
					</Button>
					<Button
						bgColor={"#0061FF"}
						color="rgb(255 255 255)"
						_hover={{ bg: "#204698" }}
						border="1px"
						borderColor="rgb(0 160 255)"
						margin="10px 0px 0px 0px"
						type="submit"
						height="44px"
						onClick={demoUserHandleOnClick}
					>
						Demo User
					</Button>

					<Button
						variant={"none"}
						color={"#004494"}
						marginTop="0px"
						_hover={{
							color: "#74ACF1",
							textDecoration: "underline",
						}}
					>
						Forgot your password?
					</Button>
					<FollowButtonLinks />
				</div>
			</form>
		</>
	);
};

export default LoginForm;
