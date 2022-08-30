import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState } from "react";
import IMAGES from "../../img";
export const Home = () => {
	const [state , setstate]=useState(false)
	const toggleBtn =()=> {
		setstate(prevState =>!prevState);
	}
	return(
	<>
		<main>
			<div className="top">
				<div className="bridge">
					<h1 className="login">Login your account</h1>
					<div className="fontuser">
						<div>E-mail</div>
						<input className="m-2 rounded-pill fontAwesome background-img" type="text" placeholder="Your E-mail">
						</input>
					</div>
					

					<div>
						<div>Password</div>
						<input className="m-2 rounded-pill key"
							type={state ? "text": "password"}
							placeholder=' Your password'>
						</input>
						<button className="see" onClick={toggleBtn}>
							{ state?
								<img src={IMAGES.eye} alt=""/>: <img src={IMAGES.eye2} alt="" />}
						</button>
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

				<footer className="footer mt-auto py-3 text-center">
					<p>
						By login, you agree to ther <a className="text-primary">Terms of service</a> and <a className="text-primary">Privacy Policy</a>
					</p>
				</footer>
			</div>
			<section className="music">
				<div className="theapp">
					<img className="musiknet" src={IMAGES.miziknet}></img>
					<p> The app for music lovers</p>
				</div>
				<div className="app">
					<p>Get the app</p>
					<div className="logo">
						<div>
							<img className="android" src={IMAGES.googlePlay}></img>
						</div>
						<div>
							<img className="apple" src={IMAGES.appleStore}></img>
						</div>
					</div>
				</div>



			</section>
		</main>



	</>
	)
};
