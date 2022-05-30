import React from "react";
import Item from "../../components/list-item/Item";
import './home.scss';
import Banner from '../../assets/banner.jpg';

const Home = () => {
    return (
      <div className="Home">
          <div className="banner" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Banner})`}}>
            <h1 className="title">No planet b</h1>
            <h4 className="sub-title">Browse and reserve our second hand items before you come to our shop</h4>
            <div className="buttons">
            <button>Shop Women</button>
            <button>Shop Men</button>
            </div>
          </div>
          <div className="new-products">
            <div className="title">
              <h3>New products</h3>
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
  
  export default Home;
