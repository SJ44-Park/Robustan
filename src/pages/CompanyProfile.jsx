import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Divider, 
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';

// 매거진 감성의 세리프(Serif) 서체와 모던한 무드를 융합한 테마 설정
const magazineTheme = createTheme({
  typography: {
    fontFamily: '"Noto Serif KR", "Georgia", "Times New Roman", serif',
    h1: { fontWeight: 900, letterSpacing: '-0.05em' },
    h2: { fontFamily: '"Noto Sans KR", sans-serif', fontWeight: 800 },
    h5: { fontWeight: 700 },
    body1: { fontFamily: '"Noto Sans KR", sans-serif', lineHeight: 1.7, color: '#333' }
  },
  palette: {
    background: {
      default: '#fcfbf7', // 클래식한 종이 질감의 웜화이트 배경
    },
    primary: {
      main: '#111111', // 매거진 특유의 강렬한 블랙 컬러 스타일링
    }
  }
});

export default function CompanyProfile() {
  return (
    <ThemeProvider theme={magazineTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 12 }}>
        
        {/* 매거진 헤더 (로고 & 서브타이틀) */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5.5rem' }, textTransform: 'uppercase', mb: 1 }}>
            Robustan News
          </Typography>
          <Divider sx={{ borderBottomWidth: 3, borderColor: '#111', mb: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>ISSUE NO. 42</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, letterSpacing: '0.1em' }}>AUGUST 2026</Typography>
          </Box>
          <Divider sx={{ borderBottomWidth: 1, borderColor: '#111', mt: 2 }} />
        </Box>

        {/* 메인 매거진 레이아웃 (세 섹션 분할 구조) */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'stretch' }}>
          
          {/* 하이라이트 섹션 (좌측 레터 블록) */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: { md: '1px solid #ddd' }, pr: { md: 4 } }}>
            <Box>
              <Typography variant="overline" sx={{ color: 'red', fontWeight: 900, letterSpacing: '0.1em' }}>
                HOT TREND
              </Typography>
              <Typography variant="h4" sx={{ my: 2, lineHeight: 1.2, fontWeight: 800 }}>
                지속 가능한 테크가 이끄는 디자인 혁명
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                기술이 아름다움을 만났을 때 생기는 변화. 100% 해양 재생 플라스틱으로 직조된 프리미엄 비즈니스 기어가 현대 오피스 워커들의 마음을 사로잡은 비결을 집중 분석합니다. 디자인과 환경 보호는 더 이상 타협의 대상이 아닙니다.
              </Typography>
            </Box>
            <Button variant="text" sx={{ alignSelf: 'flex-start', mt: 4, fontWeight: 900, color: '#111', p: 0 }}>
              READ MORE →
            </Button>
          </Box>

          {/* 메인 메인 커버 스토리 (중앙 큰 이미지 & 타이틀) */}
          <Box sx={{ flex: 2 }}>
            <Box 
              component="img" 
              src="https://unsplash.com" 
              alt="Main Product"
              sx={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(20%)', mb: 3 }}
            />
            <Typography variant="overline" sx={{ letterSpacing: '0.2em', fontWeight: 700 }}>
              COVER STORY
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, my: 2, lineHeight: 1.1 }}>
              사운드의 신기원, <br />"에어웨이브 X" 무선 오디오 시장을 뒤흔들다
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2 }}>
              오랫동안 베일에 싸여있던 차세대 플래그십 무선 이어폰이 마침내 공개되었습니다. 독자적인 하이브리드 노이즈 캔슬링 2.0 칩셋과 장치 간 끊김 없는 스마트 스위칭 기술을 결합하여, 유저가 마주하는 모든 음향적 순간을 경이로움으로 가득 채웁니다.
            </Typography>
          </Box>

          {/* 사이드 뉴스 바 (우측 간결한 리스트) */}
          <Box sx={{ flex: 1, borderLeft: { md: '1px solid #ddd' }, pl: { md: 4 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>PRODUCT UPDATE</Typography>
              <Typography variant="h5" sx={{ mb: 1, fontFamily: '"Noto Sans KR", sans-serif' }}>AI 싱크 홈 가전 대규모 OS 업데이트 완료</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                공간 학습 인공지능이 탑재되어 사용자가 머무는 방의 온도와 조도를 스스로 제어하는 새로운 홈 OS 생태계가 펼쳐집니다.
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>

            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>MARKET LEADER</Typography>
              <Typography variant="h5" sx={{ mb: 1, fontFamily: '"Noto Sans KR", sans-serif' }}>초경량 마우스 ‘플래시 프리’ 판매량 1위</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                단 49g의 무게로 완성해 낸 압도적인 그립감과 반응 속도. 게이머들의 피드백을 수렴하여 만든 궁극의 하드웨어가 증명해 낸 판매 지표를 소개합니다.
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </Box>

          </Box>

        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
