import { React } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Navbar from "../Navbar/Navbar";
// import LogoFull from "../../assets/icons/wrinkle-logo-full.svg";
import LogoW from "../../assets/icons/wrinkle-logo-w.svg";
import Heart from "../../assets/heart.svg";
import Bag from "../../assets/icons/shopping-bag.svg";
import Avatar from "../../assets/icons/avatar.svg";

import "./header.scss";

const Header = (props) => {
	// console.log(props.pages);
	return (
		<header>
			<Navbar pages={props.pages} />
			<Link to={"/"}>
				<div className={"logo"}>
					<img src={LogoW} alt="Secont hand shop name" />
				</div>
			</Link>
			<div className="Icons">
				<Link to={"/favourites"}>
					<div className={"favourites"}>
						<ReactSVG src={Heart} />
					</div>
				</Link>
				<Link to={"/reservations"}>
					<div className={"reservations"}>
						{/* <img src={Bag} alt="My reservations" /> */}
						<ReactSVG src={Bag} />
					</div>
				</Link>
				<Link to={"/dashboard"}>
					<div className={"profile"}>
						<ReactSVG src={Avatar} />
						{/* <img src={Avatar} alt="My account" /> */}
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
