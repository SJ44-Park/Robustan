import React, { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import DesktopHeader from "./DesktopHeader";
import MobileNavigation from "./MobileNavigation";

import MobileMenuBar from "./MobileMenuBar";  // !!psj
import NewSideMenu from "./NewSideMenu"; // !!psj

import robustanLogo from "/assets/logo.png";

import MoreVertIcon from "@mui/icons-material/MoreVert";   // !!psj

export default function Header({ onSelect }) {

  const nav = useNavigate(),
    theme = useTheme(),
    mobile = useMediaQuery(theme.breakpoints.down("md")),
    [open, setOpen] = useState(false),

      [openMenu, setOpenMenu] = useState(false),

    // go = (p ,subCategory) => {
    //   setOpen(false);
    //   nav(`/product/${p.slug}`, { state: { productName: p.name , subCategory: subCategory} });  // nav 기능으로 /product/제품페이지 이동하며, 
    //   //리액트 라우터의 useLocation Hook을 사용하여 ProductPage()에서 데이터를 꺼낼 수 있습니다.
    // };

    go = (p,subCat) => {
      console.log("p:", p);
      // console.log("Category=", Cat);
      console.log("subCategory=", subCat);
      setOpen(false);
      nav(`/product/${p.slug}`, {
        state: { productName: p.name,  subCategory: subCat },
      }); // nav 기능으로 /product/제품페이지 이동하며,
      //리액트 라우터의 useLocation Hook을 사용하여 ProductPage()에서 데이터를 꺼낼 수 있습니다.
    };

    if (mobile)
    return (
      <>
        <AppBar
          // position="fixed"
             position="sticky"
          color="inherit"
          elevation={0}
          sx={{
            background: "#fff",
            color: "#111",
            borderBottom: "1px solid #ddd",
            zIndex: 1200,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton onClick={() => setOpen(true)} aria-label="메뉴 열기">
              <MenuIcon />
            </IconButton>

             <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            cursor: "pointer",
          }}
        >
                     <img src={robustanLogo} width="120" alt="" />
            <Typography
              onClick={() => nav("/")}
              sx={{ fontWeight: 700, letterSpacing: 3,   color: "#a3a3a3ff" }}
            >
              ROBUSTAN 2
            </Typography>
            </Box>

            <Box sx={{ width: 40 }} />

 {/* 오른쪽 메뉴bar 아이콘 */}
 <IconButton onClick={() => setOpenMenu(true)} aria-label="홈 메뉴">
               <MoreVertIcon /> 
            </IconButton>

          </Toolbar>
        </AppBar>

 {/* 왼쪽 메뉴bar */}
        <MobileNavigation
          open={open}
          onClose={() => setOpen(false)}
          onProductClick={go}
        />


        {/* <NewSideMenu
          open={open}
          onClose={() => setOpen(false)}
          onProductClick={go}
        /> */}


 {/* 오른쪽 메뉴bar */}
           <MobileMenuBar
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          onBussinessClick={go}
        />

      </>
    );
  return <DesktopHeader onSelect={onSelect} onProductClick={go} />;
}
