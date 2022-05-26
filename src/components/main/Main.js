import React from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "../../pages/favourites/Favourites";
import Home from "../../pages/home/Home";
import Reservations from "../../pages/reservations/Reservations";
import Dashboard from "../../pages/dashboard/Dashboard";
import SingleItem from "../../pages/single-item/SingleItem";

const Main = () => {
    return (
      <main>
          <Routes>
          <Route exact path={"/"} element={<Home />} />
                <Route path={"/favourites"} element={<Favourites />} />
                <Route path={"/reservations"} element={<Reservations />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/id"} element={<SingleItem/>}/>
          </Routes>

      </main>
    );
  }
  
  export default Main;