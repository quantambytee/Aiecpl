import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeEight from "./pages/homePages/HomeEight";
import ServicesDetails from "./pages/servicesPages/ServicesDetails";
import ItalyServiceDetails from "./pages/servicesPages/ItalyServiceDetails";
import GermanyServicesDetails from "./pages/servicesPages/GermanyServiceDetails";
import JapanServiceDetails from "./pages/servicesPages/JapanServiceDetails";
import NewZealandServiceDetails from "./pages/servicesPages/NewZealandServiceDetails";
import BulgariaServiceDetails from "./pages/servicesPages/BulgariaServiceDetails";
import BangaladeshServiceDetails from "./pages/servicesPages/BangaladeshServiceDetails";
import NepalServiceDetails from "./pages/servicesPages/NepalServiceDetails";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Error404 from "./pages/error/Error404";
import WhyChooseUsV1 from "./components/WhyChooseUs/WhyChooseUsV1";
import KazakhstanServiceDetails from "./pages/servicesPages/KazakstanServiceDetails";
import BelgiumServiceDetails from "./pages/servicesPages/BelgiumServiceDetails";
import PolandServiceDetails from "./pages/servicesPages/PolandServiceDetails";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeEight />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service-details" element={<ServicesDetails />}></Route>
        <Route path="/italy-details" element={<ItalyServiceDetails />}></Route>
        <Route
          path="/germany-details"
          element={<GermanyServicesDetails />}
        ></Route>
        <Route path="/japan-details" element={<JapanServiceDetails />}></Route>
        <Route
          path="/newZealand-details"
          element={<NewZealandServiceDetails />}
        ></Route>
        <Route
          path="/bulgaria-details"
          element={<BulgariaServiceDetails />}
        ></Route>
        <Route
          path="/bangaladesh-details"
          element={<BangaladeshServiceDetails />}
        ></Route>
        <Route path="/nepal-details" element={<NepalServiceDetails />}></Route>
        <Route
          path="/kazakhstan-details"
          element={<KazakhstanServiceDetails />}
        ></Route>
        <Route
          path="/belgium-details"
          element={<BelgiumServiceDetails />}
        ></Route>
        <Route
          path="/poland-details"
          element={<PolandServiceDetails />}
        ></Route>
        <Route path="/college-finder" element={<Blog />}></Route>
        <Route path="/discover-more" element={<WhyChooseUsV1 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
