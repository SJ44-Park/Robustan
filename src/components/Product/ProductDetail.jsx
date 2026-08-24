import React from "react";
import { Box, Divider, Typography } from "@mui/material";
export default function ProductDetail({ product }) {
  return (
    <Box>
      <Typography variant="overline">{product.brand}</Typography>
      <Typography
        variant="h3"
        sx={{ mt: 1, fontSize: { xs: 30, md: 42 }, fontWeight: 500 }}
      >
        {product.name}
      </Typography>
      <Typography sx={{ mt: 3, fontSize: 18 }}>{product.price}</Typography>
      <Divider sx={{ my: 3 }} />
      <Typography sx={{ color: "#555", lineHeight: 2 }}>
        {product.description}
      </Typography>
      <Typography
        sx={{
          mt: 4,
          mb: 1.5,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: ".08em",
        }}
      >
        PRODUCT FEATURES
      </Typography>
      {product.features.map((f) => (
        <Typography
          key={f}
          sx={{ color: "#666", fontSize: 14, lineHeight: 1.8 }}
        >
          — {f}
        </Typography>
      ))}
    </Box>
  );
}
