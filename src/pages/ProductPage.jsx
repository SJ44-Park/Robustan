import React from "react";
import { Box ,Breadcrumbs , Link , Typography } from "@mui/material";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Page from "../components/Layout/Page";
import ProductSlider from "../components/Product/ProductSlider";
import ProductDetail from "../components/Product/ProductDetail";
import RelatedProducts from "../components/Product/RelatedProducts";
import { detail } from "../data/data";

export default function ProductPage() {
  const nav = useNavigate(),
    loc = useLocation(),
    { productSlug } = useParams(),
    p = detail(loc.state?.productName, productSlug),
subCat=loc.state?.subCategory,
    go = (x) => {
      nav(`/products/${x.slug}`, { state: { productName: x.name } });
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

                    // console.log("productName={productName}:", productName);
            // console.log("subCategory={sub}:", sub);
  return (
    <Page  >
  
  {/* 상단 브레드크럼 영역 */}
  <Breadcrumbs 
    separator="/" // 구분자를 슬래시(/)로 지정
    aria-label="breadcrumb" 
    sx={{ mt:0 , mb: 4, fontSize: '0.875rem', color: 'text.secondary' }} // 아래 요소와 간격(mb) 및 스타일 조절
  >
    {/* 1단계: 메인 루트 (클릭 시 이동 가능) */}
    <Link underline="hover" color="inherit" href="/product">
      Product
    </Link>
    
    {/* 2단계: 카테고리 (클릭 시 이동 가능, p.category 데이터 활용) */}
    <Link underline="hover" color="inherit" href={`/products/${p.category}`}>
      {subCat}
    </Link>
    
    {/* 3단계: 서브 카테고리 (현재 페이지이므로 텍스트로만 표시, p.subCategory 데이터 활용) */}
    <Typography color="text.primary" sx={{ fontWeight: 500 }}>
      {p.name}
    </Typography>
  </Breadcrumbs>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr .85fr" },
          gap: 6,
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <ProductSlider images={p.images} productName={p.name} />
        </Box>
        <Box sx={{ order: { xs: 1, md: 2 } }}>
          <ProductDetail product={p} />
        </Box>
      </Box>

      <RelatedProducts products={p.relatedProducts} onProductClick={go} />
    </Page>
  );
}
