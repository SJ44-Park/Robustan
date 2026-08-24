import React from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useParams } from "react-router-dom";
import {
  getProductByCode,
  getRelatedProducts
} from "../data/Productdata";

import ProductSlider from "../components/Product/ProductSlider";
import ProductCard from "../components/Product/ProductCard";

const ProductDetailPage = () => {
  const { productCode } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const product = getProductByCode(productCode);

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error">
          제품 코드 <strong>{productCode}</strong>에 해당하는 제품을 찾을 수 없습니다.
        </Alert>

        <Button
          component={Link}
          to="/product"
          variant="contained"
          sx={{ mt: 3 }}
          startIcon={<ArrowBackIcon />}
        >
          제품 목록으로 돌아가기
        </Button>
      </Container>
    );
  }

  const relatedProducts = getRelatedProducts(
    product.relatedProductCodes
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        component={Link}
        to="/product"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        제품 목록
      </Button>

      <Paper elevation={0}>
        <Grid container spacing={5}>
          {/* 제품 이미지 영역 */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                bgcolor: "#f5f5f5"
              }}
            >
              <ProductSlider images={product.images} productName={product.name} />

            </Box> 
    

          </Grid>

          {/* 기본 제품 정보 */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Box>
                <Chip
                  label={product.category}
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <Typography
                  variant={isMobile ? "h4" : "h3"}
                  component="h1"
                  sx={{ fontWeight: "bold" }}
                >
                  {product.productName}
                </Typography>
              </Box>

              <Typography color="#ffffff">
                제조사: {product.manufacturer}
              </Typography>

              <Typography color="#ffffff">
                제품코드: {product.productCode}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Rating
                  value={product.rating}
                  precision={0.1}
                  readOnly
                />
                <Typography color="#ffffff">
                  {product.rating}
                </Typography>
              </Box>

              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                {product.price.toLocaleString()}원
              </Typography>

              <Typography
                color={product.stock > 0 ? "success.main" : "error.main"}
              >
                {product.stock > 0
                  ? `재고 ${product.stock}개`
                  : "품절"}
              </Typography>

              <Divider />

              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.9,
                  color: "#424242"
                }}
              >
                {product.description}
              </Typography>

              <Button
                variant="contained"
                size="large"
                disabled={product.stock === 0}
              >
                장바구니 담기
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* 제품 스펙 */}
        <Box sx={{ mt: 7 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            제품 스펙
          </Typography>

          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableBody>
                {Object.entries(product.specifications).map(
                  ([key, value]) => (
                    <TableRow key={key}>
                      <TableCell
                        sx={{
                          width: isMobile ? "35%" : "25%",
                          fontWeight: "bold",
                          bgcolor: "#fafafa"
                        }}
                      >
                        {key}
                      </TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* 관련 제품 */}
        <Box sx={{ mt: 7 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            관련 제품
          </Typography>

          <Typography color="#ffffff" sx={{ mb: 3 }}>
            함께 확인하면 좋은 제품입니다.
          </Typography>

          <Grid container spacing={3}>
            {relatedProducts.map((relatedProduct) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={relatedProduct.productCode}
              >
                <ProductCard product={relatedProduct} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetailPage;