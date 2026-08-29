import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  Box,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { afterservices } from "../data/afterservicedata";

// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

// import ChildCareIcon from '@mui/icons-material/ChildCare';
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

// // MUI 테마 설정
// const theme = createTheme({
//   palette: {
//     primary: { main: "#0288d1" },
//     secondary: { main: "#26a69a" },
//     background: { default: "#f4f6f8" },
//   },
// });

// [컴포넌트 2] 독립된 서비스 페이지 컴포넌트
export default function AfterServicePage() {
    const nav = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        Our After Services
      </Typography>
      <Grid container spacing={4} justifyContent="center" >
        {afterservices.map((s, idx) => (
          <Grid item key={idx} xs={12} md={6} lg={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                maxWidth: 500,        
                flexDirection: "column",
                p: 2,
                textAlign: "center",
                 mx: "auto",
              }}
            >
              <Box
                component="img"
                src={s.image}
                alt={s.title}
                // sx={{ display: "flex", justifyContent: "center", my: 2,  flexGrow: 1 ,objectFit: "cover" }}
                sx={{ display: "flex", justifyContent: "center", my: 2 ,
                              // maxWidth: 800,        
               maxHeight: 300, 
                }}
              />
              {/* <CardContent sx={{  display: "flex", flexDirection: "column", }}> */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {s.title}
                </Typography>
                <Typography color="#808080">{s.desc}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary"
                onClick={() => nav(s.path)}>
                  
                  Go To Page
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",

          mt: 8,
          mb: 2,
          color: "#808080",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          fontWeight="bold"
          sx={{ color: "#277cc2" }}
        >
          After Service Business for you
        </Typography>
        <Typography color="#8dbb29">
          Comprehensive, high-precision health checkups using top-tier
          diagnostic equipment.
        </Typography>
      </Box>
    </Container>
  );
}
