import React from "react";
import { Box, Button,  Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function MegaMenu({
  category,
  subCategory,
  products,
  // business,
  onProductClick,
  onClose
}) {
  return (
    <Box sx={{ display: "block", borderTop: "1px solid #eee", p: 3 }}>
      <Grid container>
        <Grid   size={{ xs: 2, sm: 3 }}>
          <Typography variant="overline">{category?.label}</Typography>
          <Typography>{subCategory}</Typography>
        </Grid>
        <Grid   size="grow">
          <Grid container>
            {products.map((p) => (
             
              <Grid  xs={4} key={p.slug}>
                
                <Button
                  fullWidth
                  onClick={() => {
                    // console.log("slug:", p.slug, "name:", p.name); 
                    console.log("p:", p); 
                    onProductClick(p, subCategory);

                     onClose();
                  }}
                  sx={{ justifyContent: "flex-start" }}
                >
                  {p.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
