import { Route, Routes } from "react-router-dom";

import { HeroUpdatePage } from "../Pages/UpdateHero";
import { Home } from "../Pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/updatehero" element={<HeroUpdatePage />} />
    </Routes>
  );
};
