import { React } from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "../Navbar/DashboardNavbar";
// import LogoFull from "../../assets/icons/wrinkle-logo-full.svg";
import LogoW from "../../assets/icons/wrinkle-logo-w.svg";
import ShopIcon from "../../assets/icons/bi_shop.svg";


import "./header.scss";

const DashboardHeader = () => {
	return (
		<header>
			<HeaderNavbar />
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
	);
};

export default DashboardHeader;
