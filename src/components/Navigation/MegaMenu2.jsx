import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function MegaMenu2({
  category,
  subCategory,
  products,
  items,
  onProductClick,
   onClose, // !!psj 💡 부모로부터 닫기 함수를 받습니다.
}) {

      const nav = useNavigate();

 console.log("MegaMenu2 category:", category);
  console.log("MegaMenu2 subCategory:", subCategory);
  console.log("MegaMenu2 products:", products);
 console.log("MegaMenu2 items:", items);

  return (
    <Box
      sx={{
        display: "block",
        borderTop: "2px solid #82ff39ff",
        p: 3,
        // background: "rgb(255, 250, 200)",
        color: "rgb(14, 69, 139)",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 2, sm: 3 }}>
          <Typography variant="overline">{category?.label}</Typography>
          <Typography>{subCategory}</Typography>
        </Grid>

        <Grid size={{ xs: 10, sm: 9 }}>
          <Grid container>
            {items.map((p) => (
              <Grid size={{ xs: 3, sm: 3 }} key={p.slug}>
                <Button
                  fullWidth
                  onClick={() => {
                    // console.log("slug:", p.slug, "name:", p.name);
                   console.log("p:", p);
              //      onProductClick(p, subCategory);
   
              nav(`/products/${p.productCode}`);

                    onClose(); // !!psj 💡 클릭 시 메뉴만 닫히도록 호출
              
                  }}
                  sx={{ justifyContent: "flex-start",
            //           background: "rgb(92, 133, 255)",
            // color: "rgb(255, 255, 255)",
            // margin: 0,
            // height: 24,
                    
                  }}
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
