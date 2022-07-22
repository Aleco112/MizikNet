import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () =>(
	<>
	<main>
	<div className="top">
		<div className="bridge">
		<h1 className="login">Login your account</h1>
		<div className="fontuser">
			<div>E-mail</div>
			<input className="m-2 rounded-pill fontAwesome" type="text" placeholder="Your E-mail">
			</input>
		</div>
			<img className="icon" src="https://img.icons8.com/fluency-systems-regular/48/000000/filled-message.png"/>
		
		<div>
			<div>Password</div>
			<input className="m-2 rounded-pill key eye" 
			type="text," 
			placeholder=' Your password'>
			</input>
		</div>
			<img className="masterkey" src="https://img.icons8.com/material-two-tone/24/000000/password1.png"/>
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
		
			<footer className="footer mt-auto py-3 text-center">
		<p>
		By login, you agree to ther <a className="text-primary">Terms of service</a> and <a className="text-primary">Privacy Policy</a>
		</p>
	</footer>
	</div>
	<section className="music">
		<div className="theapp">
		<img className="musiknet" src="https://www.miziknet.com/assets/img/mn_logo.png?h=4cb6ba35b284d5710e8a2a2f5a850cc1"></img>
		<p> The app for music lovers</p>
		</div>
		<div className="app">
		<p>Get the app</p>
		<div  className="logo">
			<div>
				<img className="android" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2a7qwMKNWIfBw93jECC6ltygSCHcSOIQ0jw:https://data.ibtimes.sg/en/full/12247/google-play-store-8-1-73-apk.png&usqp=CAU"></img>
			</div>
			<div>
			<img className="apple" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dbqmTtwP_rrhP1hSmblWbMXFQbQDr993_-WofMG1l0b8yALnnKiSwWvRGrXZjnOT0g:https://thumbs.dreamstime.com/b/available-app-store-140090958.jpg&usqp=CAU"></img>
			</div>
		</div>
		</div>


	
	</section>
	</main>



	</>
);
