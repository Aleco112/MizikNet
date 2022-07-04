import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="top m-auto">
		<div className="bridge">
		<h1 className="login">Login your account</h1>
		<div>
			<div>E-mail</div>
			<input className="m-2 rounded-pill " type="text" placeholder=" Your E-mail">
			</input>
		</div>

		<div>
			<div>Password</div>
			<input className="m-2 rounded-pill" type="text" image placeholder=" Your password ">
			</input>
		</div>
		</div>
		<div className="drop">
		<div className="regis">Register</div>
		<div className="sign">Sign In</div>
		</div> 
		<div className="middle">
			<div className="remember">
			<div className="box"></div>
			<div>Remember me</div>
			</div>
			<div>Forgot password?</div>
		</div>
	</div>
	
		

		<script src="https://kit.fontawesome.com/cd172e63fa.js" crossorigin="anonymous"></script>
	</>
);
