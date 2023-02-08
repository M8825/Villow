import React, { useState } from "react";
import { loginUser } from "../../store/usersReducer";
import { useDispatch } from "react-redux";
import { Input, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngellist,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const LoginForm = ({ closeModalFunc }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(
			loginUser({ username: email, password }),
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

	return (
		<>
			<form onSubmit={handleSubmit} id="login_form">
				<ul>
					{errors.map((error) => (
						<li key={error}>{error}</li>
					))}
				</ul>
					<label className="login_form__label form_first_element">
						Email
						<Input
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
				{/* </div> */}
				<label class="login_form__label">
					Password
					<Input
						type="password"
						value={password}
						onChange={(e) =>
							setPassword(
								e.target.value
							)
						}
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
					>
						Demo User
					</Button>

					<Button
						variant={"none"}
						color={"#004494"}
						marginTop="0px"
						_hover={{
							color: "#74ACF1",
							textDecoration:
								"underline",
						}}
					>
						Forgot your password?
					</Button>
					<hr className="line-separator" />
					<div className="personal-links">
						<div className="personal-links__title">
							<p>Or connect with:</p>
						</div>
						<div className="personal-links__buttons">
							{/* TODO: separate all styling */}
							<Button
								style={{
									display: "flex",
									justifyContent:
										"space-between",
									paddingRight:
										"11vh",
									paddingLeft:
										"3.7vh",
								}}
								color="white"
								bgColor="black"
								leftIcon={
									<FontAwesomeIcon
										icon={
											faGithub
										}
									/>
								}
								_hover={{
									bgColor: "white",
									border: "1px solid black",
									color: "black",
								}}
							>
								Follow me on
								Github
							</Button>

							<Button
								bgColor="rgb(44 104 246)"
								color="white"
								style={{
									display: "flex",
									justifyContent:
										"space-between",
									paddingRight:
										"10vh",
									paddingLeft:
										"3.7vh",
								}}
								leftIcon={
									<FontAwesomeIcon
										icon={faLinkedin}
									/>
								}
								_hover={{
									bgColor: "white",
									border: "1px solid",
									borderColor:
										"#1F4494",
									color: "#1F4494",
								}}
							>
								Follow me on
								LinkedIn
							</Button>
							<Button
								style={{
									display: "flex",
									justifyContent:
										"space-between",
									paddingRight:
										"10vh",
									paddingLeft:
										"3.7vh",
								}}
								leftIcon={
									<FontAwesomeIcon
										icon={
											faAngellist
										}
									/>
								}
								variant="outline"
								_hover={{
									bgColor: "white",
									borderColor:
										"black",
								}}
							>
								Follow me on
								AngelList
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
