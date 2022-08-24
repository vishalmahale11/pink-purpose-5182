import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "./Articles";
import Directory from "./Directory";
import Help from "./Help";
import Home from "./Home";
import Hotpicks from "./Hotpicks";
import KindMoments from "./KindMoments";
import MealDeals from "./MealDeals";
import Recipes from "./Recipes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/mealdeals" element={<MealDeals />}></Route>
      <Route path="/kindmoments" element={<KindMoments />}></Route>
      <Route path="/hotpicks" element={<Hotpicks />}></Route>
      <Route path="/recipes" element={<Recipes />}></Route>
      <Route path="/directory" element={<Directory />}></Route>
      <Route path="/articles" element={<Articles />}></Route>
      <Route path="/help" element={<Help />}></Route>
    </Routes>
  );
};

export default AllRoutes;
