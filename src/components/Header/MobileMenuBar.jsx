import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";

import { business, company } from "../../data/data";

export default function MobileMenuBar({ open, onClose, onBussinessClick }) {
  const nav = useNavigate(),
    [cats, setCats] = useState({}),
    [subs, setSubs] = useState({}),
    toggle = (set, k) => set((x) => ({ ...x, [k]: !x[k] }));

  const menuKeys = Object.keys(business).filter((key) => key !== "Product");
  const [openStates, setOpenStates] = useState({
    Support: false,
    Service: false,
  });

  // 2. 클릭 시 상태를 반전시키는 토글 함수
  const handleToggle = (key) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: "70vw", sm: 300 } } } }}
    >
      <Box>
        <Box
          sx={{
            //  height: '56px',
            p: 2.5,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, letterSpacing: 2, color: "#ffc124ff" }}
          >
            ROBUSTAN BUSINESS
          </Typography>
          <IconButton onClick={onClose} aria-label="닫기">
            <Close />
          </IconButton>
        </Box>
        <List>
          <Typography sx={{ px: 2.5, pt: 2, color: "#a3a3a3", fontSize: 11 }}>
            COMPANY
          </Typography>
          {company.map((x) => (
            <ListItemButton
              key={x.label}
              onClick={() => {
                nav(x.path);
                onClose();
              }}
            >
              <ListItemText primary={x.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
  <Typography sx={{ px: 2.5, pt: 2, color: "#a3a3a3", fontSize: 11 }}>
            BUSINESS
          </Typography>
        <List sx={{ width: 250 }} component="nav">
          {menuKeys.map((key) => {
            const currentMenu = business[key];
            const isOpen = openStates[key]; // 현재 카테고리의 열림 상태

            return (
              <React.Fragment key={key}>
                {/* 대분류 클릭 버튼 (상단 서브헤더 대신 클릭 가능한 버튼으로 변경) */}
                <ListItemButton onClick={() => handleToggle(key)}>
                  <ListItemText
                    primary={currentMenu.label}
                    primaryTypographyProps={{
                      style: { color: currentMenu.color, fontWeight: "bold" },
                    }}
                  />
                  {/* 열림 상태에 따라 화살표 방향 변경 */}
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* 3. Collapse 컴포넌트로 하위 subCategories 감싸기 */}
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {currentMenu.subCategories.map((sub, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={sub.path}
                          onClick={onClose} // 하위 메뉴 클릭 시 Drawer 닫기
                          sx={{ pl: 4 }} // 하위 메뉴 들여쓰기 시각 효과
                        >
                          <ListItemText primary={sub.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          })}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
