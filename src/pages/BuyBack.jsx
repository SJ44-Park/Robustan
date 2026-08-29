import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Button, 
  Box, 
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

// MUI 테마 커스텀 설정
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 메인 브랜드 컬러 블루
    },
    secondary: {
      main: '#9c27b0',
    },
  },
});

// 더미 뉴스 데이터 생성
const newsData = [
  {
    id: 1,
    title: '혁신적인 차세대 무선 이어폰 "에어웨이브 X" 전격 출시',
    category: '신제품',
    date: '2026-08-28',
    summary: '독자적인 노이즈 캔슬링 알고리즘과 최대 40시간 재생 가능한 배터리를 탑재한 에어웨이브 X가 드디어 시장에 공개되었습니다.',
    image: 'https://unsplash.com'
  },
  {
    id: 2,
    title: '스마트 가전의 미래, "AI 싱크 홈" 대규모 소프트웨어 업데이트',
    category: '업데이트',
    date: '2026-08-25',
    summary: '사용자의 수면 패턴과 생활 습관을 자동으로 학습하여 온습도를 제어하는 대대적인 가전 연동 업데이트가 진행됩니다.',
    image: 'https://unsplash.com'
  },
  {
    id: 3,
    title: '친환경 소재로 완성한 프리미엄 백팩 라인업 사전 예약 완판',
    category: '이벤트',
    date: '2026-08-20',
    summary: '100% 리사이클 해양 플라스틱을 활용한 세련된 비즈니스 백팩 시리즈가 사전 예약 시작 3시간 만에 매진을 기록했습니다.',
    image: 'https://unsplash.com'
  },
  {
    id: 4,
    title: '초경량 고성능 게이밍 마우스 "플래시 프리" 마켓 1위 달성',
    category: '성과',
    date: '2026-08-15',
    summary: '무게 49g의 초경량 설계와 30,000 DPI 센서를 장착하여 전 세계 게이머들의 호평을 받으며 판매량 1위를 달성했습니다.',
    image: 'https://unsplash.com'
  }
];

export default function BuyBack() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '신제품', '업데이트', '이벤트', '성과'];

  // 카테고리 필터링 로직
  const filteredNews = selectedCategory === '전체' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* 상단 네비게이션 바 */}
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <NewReleasesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            TechTrend 제품 소식통
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 메인 콘텐츠 영역 */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        
        {/* 히어로 섹션 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
            새로운 제품 뉴스를 만나보세요
          </Typography>
          <Typography variant="h6" color="text.secondary">
            가장 빠르게 업데이트되는 혁신적인 테크 제품 정보와 브랜드 소식
          </Typography>
        </Box>

        {/* 카테고리 필터 버튼 칩 그룹 */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              color={selectedCategory === category ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category)}
              sx={{ fontSize: '1rem', padding: '18px 10px', borderRadius: '20px' }}
            />
          ))}
        </Box>

        {/* 뉴스 카드 그리드 레이아웃 */}
        <Grid container spacing={4}>
          {filteredNews.map((news) => (
            <Grid item key={news.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: 3 }}>
                {/* 제품 이미지 */}
                <CardMedia
                  component="img"
                  height="200"
                  image={news.image}
                  alt={news.title}
                />
                
                {/* 카드 내용 */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 1 }}>
                    <Chip label={news.category} color="secondary" size="small" sx={{ mr: 1, fontWeight: 'bold' }} />
                    <Typography variant="caption" color="text.secondary">
                      {news.date}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold', lineHeight: 1.3 }}>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {news.summary}
                  </Typography>
                </CardContent>

                {/* 카드 하단 액션 버튼 */}
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" variant="outlined" fullWidth sx={{ borderRadius: 2 }}>
                    자세히 보기
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
