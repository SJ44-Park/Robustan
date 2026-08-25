import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({ 
    plugins: [react()] ,
    base: '/https://github.com/SJ44-Park/Robustan/',
     server: {    // !!psj  로컬 ip주소로 접속 가능하게 함
    host: true, // 👈 이 부분을 추가  !!psj  로컬 ip주소로 접속 가능하게 함
    port: 3000, // (선택사항) 포트 번호를 고정하고 싶다면 추가 (기본값은 5173)
  }

});
