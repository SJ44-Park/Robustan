import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function MegaMenu3({
  category,
  subCategory,
  productData,
  onProductClick,
  onClose, // !!psj 💡 부모로부터 닫기 함수를 받습니다.
}) {

  const nav = useNavigate();

  // 2. 카테고리별로 데이터 그룹화 (Reduce 함수 사용)
  const groupedProducts = productData.reduce((items, product) => {
    const { category } = product;
    if (!items[category]) {
      items[category] = [];
    }
    items[category].push(product);
    return items;
  }, {});

  // 3. 버튼 클릭 시 실행될 핸들러 함수
  // const handleButtonClick = (code, name) => {
  //   alert(`선택한 상품: [${code}] ${name}`);
  // };

  console.log("MegaMenu3 category:", category);
  console.log("MegaMenu3 subCategory:", subCategory);
  console.log("MegaMenu3 productData:", productData);
  console.log("MegaMenu3 groupedProducts:", groupedProducts);

  return (
    <Box
      sx={{
        display: "block",
        borderTop: "1px solid rgb(207, 207, 207)",
        p: 3,
        background: "rgb(222, 245, 255)",
        color: "#00459fff",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 2, sm: 3 }}>
          <Typography variant="overline">캐테고리:{category?.label}</Typography>
          <Typography>서브카테고리:{subCategory}</Typography>
        </Grid>

        <Grid size={{ xs: 10, sm: 9 }}>
          <Grid container>

            {/* {Object.keys(groupedProducts).map((category) => ( */}
               {groupedProducts[category].map((p) => (
              <Grid size={{ xs: 4, sm: 3 }} key={p.productCode}>
                <Button
                  fullWidth
                  onClick={() => {
                    // console.log("slug:", p.slug, "name:", p.name);
                // onProductClick(p);
                //  nav(`/product/${p.productCode}`);

                 console.log("p:", p);
                    //      onProductClick(p, subCategory);
  onClose(); // !!psj 💡 클릭 시 메뉴만 닫히도록 호출
       
    // nav(`/product/${p.productCode}`);
 

                  
                  }}
                  sx={{ justifyContent: "flex-start" }}
                >
               
                  {p.productName}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
