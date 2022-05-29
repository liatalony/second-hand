import {React, useState} from "react";
import Heart from "../../assets/heart.svg";
import { ReactSVG } from "react-svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, EffectCards } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/zoom";
import "./slider.scss";

const Slider =() => {
    const [liked, setLiked] = useState(false);
  
    function handleLike(){
      setLiked((prev)=> !prev)
    }
  
    let slides = [];
  
    for (let i = 0; i < 5; i++) {
       slides.push(
          <SwiperSlide key={`slide-${i+1}`} tag={"li"} style={{height: "500px", listStyle:"none"}}>
              <div className='swiper-zoom-target' style={{backgroundImage:`url(http://picsum.photos/id/${i+1}/1000/600)`, backgroundSize:"cover", backgroundPosition:"center", width:"100%", height:"500px"}}>
                  {/* <img src={`http://picsum.photos/id/${i+1}/500/300`}/> */}
              </div>
          </SwiperSlide>
       )
        
    }
  
      return (
          <>
          <Swiper 
          grabCursor={true} 
          pagination={{
              el:".custom-swiper-pagination",
              clickable:true, 
          }} 
          modules={[Zoom, Pagination]} 
          tag={"section"} 
          wrapperTag={"ul"} 
          zoom={true}>
              {slides}
          </Swiper>
          <div className={"custom-swiper-pagination swiper-pagination"}></div>
          </>
      );
    }

    export default Slider;