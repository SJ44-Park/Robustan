import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box
} from "@mui/material";
import ProductCard from "../components/Product/ProductCard";
import productData from "../data/Productdata";

const Product = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Product
        </Typography>

        <Typography color="#ffffff" sx={{ mt: 1 }}>
          다양한 의류와 패션 상품을 확인해 보세요.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {productData.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.productCode}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Product;