import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import HealingIcon from "@mui/icons-material/Healing";
// import SecurityIcon from "@mui/icons-material/Security";
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

// MUI 테마 설정
const theme = createTheme({
  palette: {
    primary: { main: "#0288d1" },
    secondary: { main: "#26a69a" },
    background: { default: "#f4f6f8" },
  },
});

// 제공 서비스 데이터
const services = [
  {
    title: "Internal Medicine",
    desc: "Expert medical care specialized in digestive, respiratory, and cardiovascular health.",
    icon: <LocalHospitalIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Medical Service",
    desc: "Comprehensive, high-precision health checkups using top-tier diagnostic equipment.",
    icon: <MedicalServicesIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: "Children Care",
    desc: "Fast recovery programs tailored 1:1 by our dedicated physical therapists.",
    icon: <ChildCareIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

// [컴포넌트 2] 독립된 서비스 페이지 컴포넌트
export default function Services() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        fontWeight="bold"
        sx={{ mb: 6 }}
      >
        Our Medical Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((s, idx) => (
          <Grid item key={idx} xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 2,
                textAlign: "center",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                {s.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {s.title}
                </Typography>
                <Typography color="#ffffff">{s.desc}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
