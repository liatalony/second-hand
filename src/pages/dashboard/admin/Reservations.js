import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import axiosPrivate from "../../../api/axios";
import Check from "../../../assets/icons/check-outline.svg";
import Dots from "../../../assets/icons/dots-pending-filled.svg";
import Cross from "../../../assets/icons/cross-cancel.svg";
import "./reservationsAdmin.scss";

const ReservationsList = () => {
	const [reservation, setReservation] = useState(false);
	// const orderNumber = 2123123;
	// const orderStatus = "accepted";

	useEffect(()=>{
		try {
			axiosPrivate.get("/products/reservations").then(res=> setReservation(res.data));
		} catch (error) {
			console.log(error.message);
		}
	},[])

	return (
		<div className="Dashboard all-items">
			<h1 className="title">Admin - Reservations</h1>
			<div className="item-list-container">
				<ul className="item-list">
					{!reservation ? <p>No reservations yet...</p> : (
						reservation.map(res =>{
							return (
								<li  key={res.reservation_id}>
									<Link to={"/dashboard/reservations/" +res.reservation_id} className="order">
										<div className="order-contents">
											<div className="order-icon">
												<ReactSVG src={res.status=="approved" ? Check : res.status=="pending" ? Dots : Cross} />
											</div>
											<div className="order-text">
												<h2>#{res.reservation_id}</h2>
												<h3>{res.user_email}</h3>
												<p>{res.status}</p>
											</div>
										</div>
									</Link>
								</li>

							)
						})
					)}
				</ul>
			</div>
		</div>
	);
}

export default ReservationsList;
