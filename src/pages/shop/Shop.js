import Item from "../../components/list-item/Item";
import './shop.scss';
import Banner from '../../assets/banner.jpg';
import { Link, useParams } from "react-router-dom";

const Shop = () => {
    let {gender, subCategory} = useParams();
    console.log(subCategory);
    return (
      <div className="Shop">
            <h1 className="title">{gender}</h1>
          <div className="products">
            <div className="sub-categories">
              <Link to={`/shop/${gender}/clothes`} className={subCategory=="clothes" ? "active" : ""}>Clothes</Link> 
              <Link to={`/shop/${gender}/shoes`} className={subCategory=="shoes" ? "active" : ""}>Shoes</Link> 
              <Link to={`/shop/${gender}/accessories`} className={subCategory=="accessories" ? "active" : ""}>Accessories</Link> 
            </div>
            <div className="filters">
                <button>Categories</button>
                <button>Filter &#38; sort</button>
            </div>  
            <div className="item-list">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
          </div>
      </div>
    );
  }
  
  export default Shop;