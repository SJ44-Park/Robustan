import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  MenuItem,
  Stack
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import HomeFixIcon from '@mui/icons-material/Home';

// 제공하는 수리 서비스 데이터
const services = [
  {
    title: '스마트폰 수리',
    description: '액정 교체, 배터리 교환, 침수 세척 등 모든 기종 당일 수리 가능합니다.',
    icon: <PhoneAndroidIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: '/afterservices/repair1.png',
  },
  {
    title: '노트북 & PC 수리',
    description: '부품 업그레이드, OS 설치, 메인보드 수리 및 데이터 복구를 지원합니다.',
    icon: <ComputerIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: '/afterservices/repair2.png',
  },
  {
    title: '가전제품 수리',
    description: '에어컨 청소, 냉장고 및 소형 가전의 고장 원인을 정확히 진단하고 해결합니다.',
    icon: <HomeFixIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: '/afterservices/repair3.jpg',
  },
];

export default function RepairPage() {
  // 예약 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`예약이 완료되었습니다!\n신청자: ${formData.name}\n서비스: ${formData.serviceType}`);
    // 실제 개발 시 이곳에 API 요청 코드를 작성합니다.
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      
      {/* 1. 상단 내비게이션 바 (Navigation Bar) */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <BuildIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            QuickFix 수리센터
          </Typography>
          <Button color="inherit" href="#services">서비스 안내</Button>
          <Button color="primary" variant="contained" href="#booking" sx={{ ml: 2 }}>
            예약하기
          </Button>
        </Toolbar>
      </AppBar>

      {/* 2. 히어로 섹션 (Hero Section) */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            고장 난 모든 것, 완벽하게 고쳐드립니다
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
            스마트폰부터 가전제품까지, 전문 엔지니어가 신속하고 정확하게 방문 및 수리해 드립니다.
          </Typography>
          <Button variant="contained" color="secondary" size="large" href="#booking">
            지금 수리 예약하기
          </Button>
        </Container>
      </Box>

      {/* 3. 서비스 소개 섹션 (Services Section) */}
      <Container id="services" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          우리의 수리 서비스
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 1, fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 4. 수리 예약 폼 섹션 (Booking Form Section) */}
      <Box id="booking" sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
            간편 수리 예약
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              <TextField
                required
                label="이름"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                label="연락처"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                required
                label="수리 필요 항목"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                fullWidth
              >
                {services.map((option) => (
                  <MenuItem key={option.title} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
                <MenuItem value="기타">기타 수리 문의</MenuItem>
              </TextField>
              <TextField
                label="고장 증상 및 요청사항"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                예약 신청 제출
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* 5. 푸터 (Footer) */}
      <Box sx={{ bgcolor: '#333', color: 'gray', py: 4, textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="white" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} QuickFix Repair Inc. All rights reserved.
          </Typography>
          <Typography variant="body2">
            고객센터: 1588-0000 | 이메일: support@quickfix.com
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
