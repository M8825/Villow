import React, { useState } from "react";
import { loginUser } from "../../store/usersReducer";
import { useDispatch } from "react-redux";
import { Input, Button, Icon, color } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Github, LinkedIn } from "./icons";
// import {  } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const LoginForm = ({ closeModalFunc }) => {
	const dispatch = useDispatch();
	// const sessionUser = useSelector((state) => {
	// 	const valueArray = Object.values(state.user);

	// 	if (valueArray.length > 0) {
	// 		return true;
	// 	}

	// 	return false;
	// });

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [isHovered, setIsHovered] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(
			loginUser({ username: email, password }),
			closeModalFunc()
		).catch(async (res) => {
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
				<label class="login_form__label">
					Email
					<Input
						type="text"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}
						placeholder="Enter Email"
						required
					/>
				</label>
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
						margin={"10px 0px 0px 0px"}
						type="submit"
					>
						Sign In
					</Button>

					<Button
						variant={"none"}
						color={"#004494"}
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
									paddingRight: "30%",
									paddingLeft: "10%",
								}}
								color="white"
								bgColor="black"
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								leftIcon={
									<Github isHovered={isHovered} />
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
									paddingRight: "30%",
									paddingLeft: "10%",
								}}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								leftIcon={
									<LinkedIn isHovered={isHovered}/>
								}
								_hover={{
									bgColor: "white",
									border: "1px solid",
									borderColor: "#1F4494",
									color: "#1F4494",
								}}
							>
								Follow me on
								Github
							</Button>
							<Button
								bgColor="white"
								color="black"
								variant="outline"
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
