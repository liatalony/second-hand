import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/Forms";
import LogoW from "../../assets/icons/wrinkle-logo-w.svg";
import ShopIcon from "../../assets/icons/bi_shop.svg";
import "./login.scss";

const Login = () => {
	return (
		<div className="Login">
			<header>
				<Link to={"/"}>
					<div className={"logo"}>
						<img src={LogoW} alt="Secont hand shop name" />
					</div>
				</Link>
				<div className="Icons">
					<Link to={"/"}>
						<div className={"reservations"}>
							<img src={ShopIcon} alt="Back to shop" />
						</div>
					</Link>
				</div>
			</header>
			<div className="login-container">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
