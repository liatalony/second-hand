import React from "react";
import Item from "../../components/list-item/Item";

const Home = () => {
  return (
    <div className="Home">
      <h1 data-testid="header">Home</h1>
      <div className="new-products">
        <Item />
      </div>
    </div>
  );
};

export default Home;
