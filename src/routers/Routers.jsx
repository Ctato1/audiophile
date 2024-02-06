import React, {lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Headphones = lazy(() => import("../pages/Headphones"));
const Speakers = lazy(() => import("../pages/Speakers"));
const Earphones = lazy(() => import("../pages/Earphones"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Checkout = lazy(() => import("../pages/Checkout"));

const Routers = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<Loading/>}>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
