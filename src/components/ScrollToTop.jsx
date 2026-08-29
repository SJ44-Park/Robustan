// ScrollToTop.jsx (또는 .tsx)
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 바뀔 때마다 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);
    
    // 만약 부드러운 스크롤을 원한다면 아래 주석을 해제하세요
    // window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }, [pathname]);

  return null;
}
