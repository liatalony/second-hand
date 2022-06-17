import React from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "../../components/forms/Forms";
import LogoW from "../../assets/icons/wrinkle-logo-w.svg";
import ShopIcon from "../../assets/icons/bi_shop.svg";
import "./signup.scss";

const Signup = () => {
	return (
		<div className="Signup">
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
			<div className="signup-container">
				<SignupForm />
			</div>
		</div>
	);
};

export default Signup;
