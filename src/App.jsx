import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";

import Page from "./components/Layout/Page";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/FooterMain";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetailPage from "./pages/ProductDetailPage";

import Services from "./pages/Services";
import Supports from "./pages/Supports";

import NpcVerification from "./pages/legal/NpcVerification";
import PrivacyNotice from "./pages/legal/PrivacyNotice";
import TermsOfUse from "./pages/legal/TermsOfUse";
import CookiePolicy from "./pages/legal/CookiePolicy";

export default function App() {
  const [selection, setSelection] = useState({ cat: null, sub: null });
  return (
    <BrowserRouter>

{/* ------------- Header 컴포넌트  ----- */}
      <Header onSelect={(cat, sub) => setSelection({ cat, sub })} />
    

{/* -------------route Pages 컴포넌트  ----- */}    
      <Routes>
        {/* ---------- product pages --------------- */}

        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productSlug" element={<ProductPage />} />
        <Route path="/products/:productCode" element={<ProductDetailPage />} />

        {/* ------------ robustan home--------------------------------- */}

        <Route path="/" element={<HomePage />} />

        <Route
          path="/about"
          element={
            <Page>
              <Typography variant="h4">About Us (회사 소개)</Typography>
            </Page>
          }
        />

        <Route
          path="/map"
          element={
            <Page>
              <Typography variant="h4">Branch Location (오시는 길)</Typography>
            </Page>
          }
        />

        <Route
          path="/history"
          element={
            <Page>
              <Typography variant="h4">Brands & History (브랜드)</Typography>
            </Page>
          }
        />

        <Route path="/contact" element={<Contact />} />



        {/* --------------------------- */}
        <Route path="/supports" element={<Supports />} />
        <Route
          path="/new-op-room"
          element={
            <Page>
              <Typography variant="h4">new-op-room Page</Typography>
            </Page>
          }
        />
        <Route
          path="/upgrade-oldsystem"
          element={
            <Page>
              <Typography variant="h4">upgrade-oldsystem Page</Typography>
            </Page>
          }
        />
        <Route
          path="/consulting"
          element={
            <Page>
              <Typography variant="h4">consulting Page</Typography>
            </Page>
          }
        />
        <Route
          path="/technical-support"
          element={
            <Page>
              <Typography variant="h4">technical-support Page</Typography>
            </Page>
          }
        />

        {/* ------------------------------- */}
        <Route path="/services/" element={<Services />} />
        <Route
          path="services/maintenance"
          element={
            <Page>
              <Typography variant="h4">maintenance Page</Typography>
            </Page>
          }
        />
        <Route
          path="/services/repair"
          element={
            <Page>
              <Typography variant="h4">repair Page</Typography>
            </Page>
          }
        />
        <Route
          path="/services/custom-service"
          element={
            <Page>
              <Typography variant="h4">service Page</Typography>
            </Page>
          }
        />

        {/* ================== footer 페이지들 =========================== */}
        <Route path="/npc-verification" element={<NpcVerification />} />
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
 
 
         {/*---------- 404 페이지 (위에 정의되지 않은 모든  주소 처리) ----------*/}

        <Route
          path="*"
          element={
            <Page>
              <Typography variant="h4">404 Page Not Found</Typography>
            </Page>
          }
        />

      </Routes>

{/* ------------- Footer 컴포넌트  ----- */}
      <Footer />  


    </BrowserRouter>
  );
}
