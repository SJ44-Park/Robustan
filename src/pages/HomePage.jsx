import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 혹은 next/navigation 등 환경에 맞춰 변경 가능
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slideData = [
  {
    id: 1,
    image: '/images/image-slide01.png',
    title: 'Bexen Cardio',
    description: "We, Bexen Cardio, are a cooperative specialising in defibrillators, and concern for caring for people and their welfare, together with continuous development and innovation, are our guiding principles. We’ve been saving lives for 40 years, and we’re still Spain’s only defibrillator manufacturer with a major presence in the international market.",
    link: '/services/analytics'
  },
  {
    id: 2,
    image: '/images/customed_cpet_copy.png',
    title: 'Custo Med',
    description: "For many years now, Custo med GmbH has been one of the leading suppliers of cardiopulmonary diagnostics. The company has established itself as a market leader in Germany, for example with computer-aided diagnosis systems, leaving considerably behind its competitors. Our name stands for innovation, quality and reliability, also on an international basis",
    link: '/services/collaboration'
  },
  {
    id: 3,
    image: '/images/dr.-mach-mach-led-5-3-edited.png',
    title: 'Dr.Mach',
    description: "From the simple examination lamp to sophisticated operating theatre lights, also with integrated video transmitting systems where required, every one of our products naturally meets all the relevant quality and EU safety standards applicable to medical products.It goes without saying that constant innovation and improvement of our products are a vital part of our company's philosophy",
    link: '/services/security'
  },
  {
    id: 4,
    image: '/images/heinen-lowenstein-leon-plus.png',
    title: 'Heinen+Lowenstein',
    description: '"Our commitment to outstanding service, our policy of working closely with our customers and the innovative drive to develop new technologies in the field of medical technology are the decisive factors that have made Heinen + Löwenstein one of the leading companies in the field of medical technology".',
    link: '/services/growth'
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // 자동 재생 상태 관리
  const navigate = useNavigate(); // react-router-dom 이동 함수

  // 수동 조작 시 자동 재생 정지 처리 함수
  const stopAutoPlay = () => {
    setIsAutoPlay(false);
  };

  const handlePrev = (e) => {
    e.stopPropagation(); // 슬라이드 클릭 이벤트 전파 방지
    stopAutoPlay();
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation(); // 슬라이드 클릭 이벤트 전파 방지
    stopAutoPlay();
    setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index, e) => {
    e.stopPropagation();
    stopAutoPlay();
    setCurrentIndex(index);
  };

  const handleSlideClick = (link) => {
    navigate(link); // 해당 슬라이드 링크로 이동
  };

  // 자동 재생 로직 (isAutoPlay 상태가 true일 때만 작동)
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [isAutoPlay]); 

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* 왼쪽 화살표 버튼 */}
        <IconButton 
          onClick={handlePrev} 
          sx={{ 
            position: 'absolute', left: 20, zIndex: 3, color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* 클릭 가능한 슬라이드 프레임 */}
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: 900, 
            height: { xs: 400, md: 500 },
            borderRadius: 4, 
            overflow: 'hidden',
            position: 'relative',
            boxShadow: 3,
            cursor: 'pointer', // 클릭 가능하다는 시각적 힌트 제공
            '&:hover img': { transform: 'scale(1.03)' } // 호버 시 부드러운 확대 효과
          }}
        >
          {slideData.map((slide, index) => (
            <Box
              key={slide.id}
              onClick={() => handleSlideClick(slide.link)}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentIndex === index ? 1 : 0,
                visibility: currentIndex === index ? 'visible' : 'hidden',
                transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
                zIndex: currentIndex === index ? 1 : 0,
              }}
            >
              {/* 배경 이미지 */}
              <Box 
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease' // 호버 줌 효과용 트랜지션
                }}
              />

              {/* 하단 글씨 영역 그라데이션 오버레이 */}
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  padding: { xs: '60px 24px 24px', md: '80px 48px 48px' },
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
                  color: 'white',
                  boxSizing: 'border-box'
                }}
              >
                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                  {slide.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '700px' }}>
                  {slide.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* 오른쪽 화살표 버튼 */}
        <IconButton 
          onClick={handleNext} 
          sx={{ 
            position: 'absolute', right: 20, zIndex: 3, color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* 인디케이터 (점) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
        {slideData.map((_, index) => (
          <Box
            key={index}
            onClick={(e) => handleIndicatorClick(index, e)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </Box>
    </Container>
  );
}
