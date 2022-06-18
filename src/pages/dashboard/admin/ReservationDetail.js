import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosPrivate } from "../../../api/axios";
import Item from "../../../components/list-item/Item";

function ReservationDetails() {
	const [itemList, setItemList] = useState(false);
	const {id} = useParams();
	const navigate = useNavigate();
	useEffect(()=>{
		axiosPrivate.get(`/products/reservations/${id}`).then(res=> setItemList(res.data));
	},[])

	const handleStatus = (status) => {
		axiosPrivate.get(`/products/reservations/${id}/${status}`).then(res=> setItemList(res.data)).then(()=>{navigate("/dashboard/reservations");});
		
	}

	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservation Details</h1>
			<div className="item-list-container">
				<ul className="item-list">
					{!itemList ? <p>No items in the bag</p> : (
						itemList.map(item => {
							return <Item key={"item" + item.product_id} details={item} />
						})
					)}
				</ul>
			</div>
			<div className="container--buy--desktop">
				<div className="button">
					<button className="btn btn--primary" onClick={()=>handleStatus("approved")}>Approve</button>
				</div>
				<div className="button">
					<button className="btn btn--primary" onClick={()=>handleStatus("cancelled")}>Cancel</button>
				</div>
			</div>
			<section className="container--buy">
				<div className="buy">
					<div className="name-price">
						<h1 className="title">Totale</h1>
						<h1 className="price">kr. 100</h1>
					</div>
					<div className="button">
						<button className="btn btn--primary"  onClick={()=>handleStatus("approved")}>Approve</button>
					</div>
					<div className="button">
						<button className="btn btn--primary" onClick={()=>handleStatus("cancelled")}>Cancel</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ReservationDetails;
