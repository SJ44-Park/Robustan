import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Stack, Divider } from "@mui/material";

// const businessColors = [
//   { name: "products", color: "#33a76e" },
//   { name: "Supports", color: "#109adfff" },
//   { name: "Services", color: "#7b3886" },
// ];

export default function SubCategoryBar({
  business,
  barColor,
  subCategories,
  activeSubCategory,
  onSubCategoryClick,
}) {
  // const matchedBusiness = businessColors.find((item) => item.name === business);
  const nav = useNavigate();

  // // 2. 일치하는 색상이 있으면 사용하고, 없으면 기본값(예: 투명 또는 흰색) 설정
  // const barColor = matchedBusiness ? matchedBusiness.color : "transparent";

  return (
    <Box
      sx={{
        minHeight: 52,
        borderTop: "1px solid #eee",
        // borderBottom: "1px solid #eee",
        borderBottom: "1px solid  ${barColor}", // !!psj
        background: barColor, // !!psj ,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: 6,
          minHeight: 52,
          display: "flex",
          justifyContent: "center", // !!psj  서브카테고리메뉴 화면 가운데 디바이더와 함꼐 정렬
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(255, 255, 255, 0.5)" }} // 완벽한 흰색은 "white" 또는 투명도 있는 흰색 사용
            />
          }
        >
          {subCategories.map((sc) => (
            <Button
              key={sc.path}
              color="inherit"
              onClick={() => {
                console.log("onSubCategoryClick:", sc.path);
                onSubCategoryClick(sc.label); // 기존 부모 상태 변경 함수 호출
                if (sc.path) nav(sc.path); // 3. 해당 path로 페이지 이동 추가
              }}
              sx={{
                borderRadius: 0,
                fontSize: 12,
                // color: activeSubCategory === sc ? "#111" : "#777",
                color: "#ffffffff",
                borderBottom:
                  activeSubCategory === sc
                    ? "2px solid #e1e1e1ff"
                    : "2px solid transparent",
              }}
            >
               {sc.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
