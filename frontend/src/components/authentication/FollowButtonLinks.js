import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@chakra-ui/react";

const FollowButtonLinks = () => {
	return (
		<>
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
							paddingRight: "11vh",
							paddingLeft: "3.7vh",
						}}
						color="white"
						bgColor="black"
						leftIcon={
							<FontAwesomeIcon
								icon={faGithub}
							/>
						}
						_hover={{
							bgColor: "white",
							border: "1px solid black",
							color: "black",
						}}
					>
						Follow me on Github
					</Button>

					<Button
						bgColor="rgb(44 104 246)"
						color="white"
						style={{
							display: "flex",
							justifyContent:
								"space-between",
							paddingRight: "10vh",
							paddingLeft: "3.7vh",
						}}
						leftIcon={
							<FontAwesomeIcon
								icon={
									faLinkedin
								}
							/>
						}
						_hover={{
							bgColor: "white",
							border: "1px solid",
							borderColor: "#1F4494",
							color: "#1F4494",
						}}
					>
						Follow me on LinkedIn
					</Button>
					<Button
						style={{
							display: "flex",
							justifyContent:
								"space-between",
							paddingRight: "10vh",
							paddingLeft: "3.7vh",
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
							borderColor: "black",
						}}
					>
						Follow me on AngelList
					</Button>
				</div>
			</div>
		</>
	);
};

export default FollowButtonLinks;
