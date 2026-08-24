import React from "react";
import { Box, Container } from "@mui/material";
export default function Page({ children }) {
  return (
    <Box
      sx={{ pt: { xs: 10, md: 10 }, px: { xs: 2, md: 6 }, minHeight: "100vh" }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}
