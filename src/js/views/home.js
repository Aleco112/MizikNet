import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="top">
		<h1>Login your account</h1>
		<div>
			<h2>E-mail</h2>
			<input type="text" placeholder="your E-mail">
			</input>
		</div>

		<div>
			<h2>Password</h2>
			<input type="text" placeholder="password">
			</input>
		</div>

		<div>Register</div>
		<div className="middle">
			<div>remember me</div>
			<div>forgot password</div>
		</div>
	</div>
		

		<script src="https://kit.fontawesome.com/cd172e63fa.js" crossorigin="anonymous"></script>
	</>
);
