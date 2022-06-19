import { React, useState, useEffect } from "react";
// import Heart from "../../assets/heart.svg";
// import { ReactSVG } from "react-svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/zoom";
import "./slider.scss";

const Slider = (props) => {
	const [images, setImges] = useState(false);
	// const [liked, setLiked] = useState(false);

	// function handleLike() {
	// 	setLiked((prev) => !prev);
	// }
	useEffect(()=>{
		setImges(props.images)
	},[])

	let slides = [];

	for (let i = 0; i < images.length; i++) {
		slides.push(
			<SwiperSlide
				key={`slide-${i + 1}`}
				tag={"li"}
				style={{ height: "500px", listStyle: "none" }}
			>
				<div
					className="swiper-zoom-container"
					style={{
						backgroundImage: `url(${images[i].image_name})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						width: "100%",
						height: "500px",
					}}
				>
					{/* <img src={`${images[i].image_name}`} alt={"shop item for sale"} style={{maxWidth: "100%"}} /> */}
				</div>
			</SwiperSlide>
		);
	}

	return (
		<>
			<Swiper
				grabCursor={true}
				pagination={{
					el: ".custom-swiper-pagination",
					clickable: true,
				}}
				modules={[Zoom, Pagination]}
				tag={"section"}
				wrapperTag={"ul"}
				zoom={true}
			>
				{slides}
			</Swiper>
			<div className={"custom-swiper-pagination swiper-pagination"}></div>
		</>
	);
};

export default Slider;
