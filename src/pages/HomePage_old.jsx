import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Page from "../components/Layout/Page";
import ProductGrid from "../components/Product/ProductGrid";
// import { products } from "../data";
import { business } from "../data";

export default function HomePage({ selection }) {
  const nav = useNavigate(),
    items =
      selection.cat && selection.sub
        // ? products[selection.cat].subCategories[selection.sub]
           ? business[selection.cat].subCategories[selection.sub]
        : [],
    // go = (p) => nav(`/products/${p.slug}`, { state: { productName: p.name } });
  go = (p) => nav(`/business/${p.slug}`, { state: { productName: p.name } });
  return (
    <Page>
      {items.length ? (
        <>
          <Typography variant="overline">
            {/* {products[selection.cat].label} */}
        {business[selection.cat].label}
          </Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 5 }}>
            {selection.sub}
          </Typography>
          {/* <ProductGrid products={items} onProductClick={go} /> */}
      <ProductGrid business={items} onProductClick={go} />
        </>
      ) : (
        <>
          <Typography variant="h3">Product Introduction</Typography>
          <Typography color="text.secondary">
            상단에서 카테고리와 서브 카테고리를 선택하세요.
          </Typography>
        </>
      )}
    </Page>
  );
}
