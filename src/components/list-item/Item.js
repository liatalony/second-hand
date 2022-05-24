import {React, useState} from "react";
import Heart from "../../assets/heart.svg";
import { ReactSVG } from "react-svg";
import Jacket from "../../assets/jacket.jpg";
import "./item.scss";

const Item =() => {
  const [liked, setLiked] = useState(false);

  function handleLike(){
    setLiked((prev)=> !prev)
  }

  return (
    <div className="Item">
      <div className="item-image" style={{ backgroundImage: `url(${Jacket})`, backgroundPosition: "center", backgroundSize: "cover"}}>
        <button onClick={handleLike} className={liked ? "item-heart-liked" : "item-heart"}>
          <ReactSVG src={Heart}/>
        </button>
      </div>
      <div className='item-detail'>
        <h3>Item name</h3>
        <p>kr. 100</p>
      </div>
    </div>
  );
}
  
export default Item;