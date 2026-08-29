import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  Divider,
  Box,
  ListSubheader,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  DirectionsCar,
  PedalBike,
  FolderOpen,
  Circle,
  Close,
} from "@mui/icons-material";

import { business, products, company } from "../../data/data";

const DRAWER_WIDTH = 280;

export default function NewSideMenu({ open, onClose, onProductClick }) {
  // 각 카테고리의 열림/닫힘 상태를 관리하는 State
  const [openCategories, setOpenCategories] = useState({
    cardiology: true, // 기본값으로 Car는 열려있도록 설정
    Emergency: false,
    uncategorized: false,
  });

  // 클릭 시 열림/닫힘 토글 함수
  const handleCategoryClick = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // 카테고리별 매칭 아이콘 반환 함수
  // const getCategoryIcon = (category) => {
  //   switch (category) {
  //     case "Car":
  //       return <DirectionsCar />;
  //     case "Bike":
  //       return <PedalBike />;
  //     default:
  //       return <FolderOpen />;
  //   }
  // };

  return (
    <Drawer
      // variant="permanent"
      // anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: "70vw", sm: 300 } } } }}

      // sx={{
      //   width: DRAWER_WIDTH,
      //   flexShrink: 0,
      //   [`& .MuiDrawer-paper`]: {
      //     width: DRAWER_WIDTH,
      //     boxSizing: 'border-box'
      //   },
      // }}
    >
      {/* 상단 여백 보정 (AppBar가 있을 경우 매칭) */}
      <Toolbar>
        <Typography
          sx={{ fontWeight: 700, letterSpacing: 2, color: "rgb(215, 36, 255)" }}
        >
          ROBUSTAN4
        </Typography>
        <IconButton onClick={onClose} aria-label="닫기">
          <Close />
        </IconButton>
      </Toolbar>

      <Divider />
      <List sx={{ width: 250 }} component="nav">
        {Object.entries(business)
          // 1. 'products' 키를 가진 데이터는 제외합니다.
          .filter(([key]) => key !== 'products')
          // 2. 남은 Supports와 Services를 .map으로 순회합니다.
          .map(([mainKey, mainValue]) => (
            <React.Fragment key={mainKey}>
              {/* 메인 카테고리 헤더 (Supports, Services) */}
              <ListSubheader 
                sx={{ 
                  color: mainValue.color, 
                  fontWeight: 'bold', 
                  fontSize: '1.1rem',
                  marginTop: 1 
                }}
              >
                {mainValue.label}
              </ListSubheader>

              {/* 하위 subCategories 객체의 키들을 .map으로 순회합니다. */}
              {Object.keys(mainValue.subCategories).map((subKey) => (
                <ListItem button key={subKey} sx={{ pl: 4 }}>
                  <ListItemText 
                    primary={subKey.replace('_', ' ')} // 언더바(_)를 공백으로 치환하여 보기 좋게 표시
                  />
                </ListItem>
              ))}
              
              {/* <Divider sx={{ my: 1 }} /> */}
            </React.Fragment>
          ))}
      </List>


      <Divider />


      <List component="nav" aria-labelledby="nested-list-subheader">
        <Typography sx={{ px: 2.5, pt: 2, color: "#999", fontSize: 16 }}>
          Products
        </Typography>
        {Object.entries(products.subCategories).map(([categoryName, items]) => {
          const isCategoryOpen = openCategories[categoryName];

          return (
            <React.Fragment key={categoryName}>
              {/* 메인 카테고리 버튼 (Car, Bike 등) */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => handleCategoryClick(categoryName)}
                >
                  {/* <ListItemIcon>{getCategoryIcon(categoryName)}</ListItemIcon> */}
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Circle sx={{ fontSize: 8, color: "text.secondary" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={categoryName}
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                  {isCategoryOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>

              {/* 하위 아이템 리스트 (Sports, Wagon 등) */}
              <Collapse in={isCategoryOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {items.map((item, index) => (
                    <ListItemButton
                      key={index}
                      sx={{ pl: 4, my: 0, py: 0.5, minHeight: "auto" }}
                      onClick={() => {
                        alert(`${item.name} (${item.brand}) 선택됨`)

                            onProductClick(item);
                            onClose();
                      }}
                    >
                      {/* <ListItemIcon sx={{ minWidth: 32 }}>
                        <Circle sx={{ fontSize: 8, color: "text.secondary" }} />
                      </ListItemIcon> */}
                      <ListItemText
                        sx={{
                          my: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%", // 공간을 꽉 채우도록 설정
                        }}
                        primary={item.name}
                        secondary={item.brand}
                        secondaryTypographyProps={{
                          fontSize: "0.6rem",
                          pl: 2,
                          color: "#f86e38",
                        }}
                  
                        primaryTypographyProps={{
                          fontSize: "0.85rem", // 📐 크기 조절 (원하는 px, rem, em 값 입력)
                          fontWeight: "bold", // 🔤 글자 굵기 (필요 시 추가)
                          color: "primary.main", // 🎨 색상 변경 (테마 컬러 또는 일반 색상 코드)
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
}
