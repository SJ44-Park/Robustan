import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";

import Page from "./components/Layout/Page";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/FooterMain";

import HomePage from "./pages/HomePage";
import CompanyProfile from "./pages/CompanyProfile";


import BranchOfficeMapPage from "./pages/BranchOfficeMapPage";
import BrandsPage from "./pages/BrandsPage";
import Contact from "./pages/Contact";

import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetailPage";

import Supports from "./pages/Supports";

import Services from "./pages/Services";
import RepairPage from "./pages/RepairPage";
import BuyBack from "./pages/BuyBack";


import AfterServicePage from "./pages/AfterServicePage";

import NpcVerification from "./pages/legal/NpcVerification";
import PrivacyNotice from "./pages/legal/PrivacyNotice";
import TermsOfUse from "./pages/legal/TermsOfUse";
import CookiePolicy from "./pages/legal/CookiePolicy";


import ScrollToTop from './components/ScrollToTop';  // 페이지 이동시 항상 맨 위로 가기

export default function App() {
  const [selection, setSelection] = useState({ cat: null, sub: null });
  return (
    <BrowserRouter>
     <ScrollToTop /> 
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
          element={<CompanyProfile/>      }
          // element={
          //   <Page>
          //     <Typography variant="h4">About Us (회사 소개)</Typography>
          //   </Page>
          // }
        />

        <Route path="/map" element={<BranchOfficeMapPage />} />

        <Route path="/brands" element={<BrandsPage />} />

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

        {/* --------------services----------------- */}
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

        {/* --------------after_service----------------- */}
        <Route path="/after_service" element={<AfterServicePage />} />

        <Route
          path="/afterservices/repair"
          element={<RepairPage /> }
        />

             <Route
          path="/afterservices/buyback"
          element={<BuyBack/>      }
          
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
