import React, { useState, useMemo } from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // 1. Link 불러오기  // !!psj

import SubCategoryBar from "../Navigation/SubCategoryBar";
import MegaMenu from "../Navigation/MegaMenu";
import MegaMenu2 from "../Navigation/MegaMenu2";
import MegaMenu3 from "../Navigation/MegaMenu3";

import robustanLogo from "/assets/logo.png";

import { products, company, business } from "../../data/data"; // !!psj

import productData from "../../data/Productdata";

export default function DesktopHeader({ onSelect, onProductClick }) {
  const nav = useNavigate(),
    [cat, setCat] = useState(null),
    [barColor, setBarColor] = useState(null),
    [sub, setSub] = useState(null),
    current = cat ? business[cat] : null,
    items = current && sub ? current.subCategories[sub] : [];

  // 💡 메뉴의 열림 상태를 관리할 새 상태 추가
  const [isMegaOpen, setIsMegaOpen] = useState(true);

  const subCategories = useMemo(() => {
    return business[cat]?.subCategories || [];
  }, [cat]);

  const firstCategory = subCategories ? subCategories[0] : [];

  // const subCategoryKeys = current && Object.keys(current.subCategories || {});
  // const firstCategory = subCategoryKeys ? subCategoryKeys[0] : [];

  const itemsP = sub ? products.subCategories[sub] : []; // Megamenu 용

  // 또는
  // const itemCodes = [];
  // const itemNames = [];

  // productData.forEach(({ productCode, productName }) => {
  //   itemCodes.push(productCode);
  //   itemNames.push(productName);
  // });

  // Megamenu2 용
  // 1. productCode만 추출하여 itemCodes 배열에 담기
  const itemCodes = productData.map((item) => item.productCode);
  // 2. productName만 추출하여 itemNames 배열에 담기
  const itemNames = productData.map((item) => item.productName);

  const itemPairs = productData.map(({ productCode, productName }) => ({
    productCode,
    productName,
  }));

  return (
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
      <Box
        sx={{
          height: 28, // !!psj
          minHeight: 20, // !!psj
          display: "flex",
          justifyContent: "flex-end",
          // justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          borderBottom: "1px solid #d0dbffff",
          background: "#c5e2ffff", // !!psj
          color: "#787878ff", // !!psj
        }}
      >
        {/* <Button
          key="debug"
          sx={{
            background: "#ffe15cff",
            color: "#00459fff",
            margin: 0,
            height: 24,
          }}
          onClick={() => {
            console.log("디버그cat:", cat);
            console.log("디버그sub:", sub);
            // console.log("디버그sub:", business[cat]);
            console.log("디버그current:", current);
            console.log("디버그items :", items);
            console.log("디버그itemsP :", itemsP);
          }}
        >
          debug
        </Button> */}

        <Stack direction="row" spacing={3}>
          {/* {company.map((x) => (
            <Button
              key={x.label}
              color="inherit"
              onClick={() => {
                nav(x.path);
              }}
            >
              {x.label}
            </Button>
          ))} */}
          {company.map((item, index) => {
            // 마지막 item 에게만 속성주는 방법 last one in the array
            const isLast = index === company.length - 1;

            return (
              <Button
                key={item.label}
                component={Link} // !!psj  2. MUI 버튼을 라우터 Link로 변경
                to={item.path} // !!psj  3. 이동할 경로 설정
                variant={isLast ? "contained" : "text"}
                size="small"
                // 💡 [여기에 추가] company 메뉴 클릭 시 비즈니스 메뉴 상태 초기화
                onClick={() => {
                  // !!psj 맨 위에 company 메뉴 누르면 아래 sub메뉴 접히도록 null ,null 주기위함
                  setCat(null); // 1. 대분류 메뉴 닫기
                  setSub(null); // 2. 중분류 메뉴 닫기
                  onSelect(null, null); // 3. 부모 컴포넌트(App.jsx)의 selection 상태도 초기화
                }}
                sx={{
                  color: isLast ? "#ffffffff" : "#7b7b92ff", // !!psj
                  background: isLast ? "#79acffff" : "transparent", // !!psj

                  borderRadius: isLast ? "30px" : "0px",

                  textTransform: "none",
                  // height: "80%",
                  mt: isLast ? "4px !important" : 0, // !!psj
                  // pt: isLast ? 1 : 1, // !!psj
                  // px: 2.5,
                  // 수정 및 추가된 부분
                  height: isLast ? "20px" : "default", // % 대신 구체적인 px 지정 (32px의 80%는 약 25px)
                  // minHeight: 0,                         // MUI 버튼의 기본 minHeight 제한을 해제
                  //   my: "auto",
                  // lineHeight: 1,                        // 텍스트 정렬을 위해 행간을 줄임
                  // py: isLast ? 0 : 1,
                  //  display: "inline-flex", // 버튼 자체를 flex로 지정
                  // alignItems: "center",  // 버튼 내부 글자 수직 중앙 정렬
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>
      </Box>

      <Toolbar
        sx={{
          background: "#f4f4f4ff", // !!psj
          color: "rgb(60, 57, 100)", // !!psj
          justifyContent: "space-between",
          height: 80,

          px: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            cursor: "pointer",
            // alignItems: 'stretch',
            // alignItems: 'center',
            //  height: '100%'
          }}
        >
          <img src={robustanLogo} width="160" alt="" />
          <Typography
            onClick={() => {
              // console.log("products데이터:",products);
              setCat(null); // 1. 대분류 메뉴 닫기
              setSub(null); // 2. 중분류 메뉴 닫기
              onSelect(null, null); // 3. 부모 컴포넌트(App.jsx)의 selection 상태도 초기화
              nav("/");
            }}
            sx={{
              fontWeight: 700,
              letterSpacing: 4,
              cursor: "pointer",
              // color: "#a3a3a3ff",
              alignSelf: "flex-end",
              color: barColor,

              height: "100%",
            }}
          >
            ROBUSTAN
          </Typography>
        </Box>

        <Stack direction="row" spacing={3}>
          {Object.entries(business).map(([k, c]) => (
            <Button
              key={k}
              color="inherit"
              onClick={() => {
                console.log("business click:", k);
                setCat(k);
                setBarColor(c.color);
                setSub(null);
                onSelect(null, null);

                nav(c.path);
              }}
              sx={{ "&:hover": { color: c.color }, fontWeight: 700 }}
            >
              {c.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
      {current && (
        <SubCategoryBar
          category={cat}
          barColor={barColor}
          subCategories={subCategories}
          activeSubCategory={sub}
          onSubCategoryClick={(s) => {
            console.log("SubCategoryBar click:", s);
            // console.log("activeSubCategory={sub}:", sub);
            // console.log("category={current}:", current);
            // console.log("subCategory={sub}:", sub);
            // console.log("business={items}:", items);
            setSub(s);

            setIsMegaOpen(true); // !!psj
            onSelect(cat, s);

            //  console.log("{cat}:", cat);
            // console.log("{sub}:", sub);
          }}
        />
      )}

      {/* {sub && cat === "Product" && isMegaOpen && (
        <MegaMenu
          category={current}
          subCategory={sub}
          products={itemsP}
          // business={items}
          onProductClick={onProductClick}
          onClose={() => setIsMegaOpen(false)}
        />
      )}

      {sub && cat === "Product" && isMegaOpen && (
        <MegaMenu2
          category={current}
          subCategory={sub}
          products={productData}
          // items={itemNames}
          items={itemPairs}
          onProductClick={onProductClick}
          onClose={() => setIsMegaOpen(false)} // !!psj
        />
      )} */}

      {sub && cat === "Product" && isMegaOpen && (
        <MegaMenu3
          category={current}
          subCategory={sub}
          productData={productData}
          //  products={itemsP}

          // business={items}
          onProductClick={onProductClick}
          onClose={() => setIsMegaOpen(false)}
        />
      )}


    </AppBar>
  );
}
