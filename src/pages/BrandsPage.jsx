import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

// /src/brands 폴더 안의 모든 이미지 파일 import
const brandImages = import.meta.glob(
  "../brands/*.{png,jpg,jpeg,svg,webp,gif}",
  {
    eager: true,
    import: "default",
  },
);

export default function BrandsPage() {
  // import.meta.glob 결과 변환
  const brandList = Object.entries(brandImages).map(([path, url]) => {
    // "../brands/apple.png" -> "apple"
    const filename = path
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|svg|webp|gif)$/i, "");

    return {
      filename,
      url,
    };
  });

  return (
    <Container maxWidth="xl" sx={{ py: 5, backgroundColor: "#ffffff" }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          color="text.primary"
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: {
              xs: "1.75rem", // 모바일(xs) 환경에서는 작게 (약 28px)
              sm: "3rem", // 태블릿(sm) 이상 환경에서는 기존 h3 크기로
            },
          }}
        >
          Our Brands
        </Typography>

        <Typography color="text.secondary">
          Robustan Products Partners
        </Typography>
      </Box>

  {/* rowSpacing을 통해 상하 간격만 0.5(4px)로 더 좁힙니다. 0을 주면 완전히 붙습니다. */}

      <Grid container >
        {brandList.map((brand) => (
          <Grid item xs={10} sm={6} md={4} lg={3} xl={2} key={brand.filename}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "none",

                // borderRadius: 3,
                // transition: "transform 0.2s, box-shadow 0.2s",
                // "&:hover": {
                //   transform: "translateY(-4px)",
                //   boxShadow: 6
                // }
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  //   p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  //   gap: 2
                }}
              >
                {/* 브랜드 로고 이미지 */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    //    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "#a49a9a",
                    // borderRadius: 2,
                    p: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={brand.url}
                    alt={`${brand.filename} logo`}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                {/* 파일명 (확장자 제거) */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    wordBreak: "break-word",
                    color: "#818181",
                    textShadow: "2px 2px 4px rgba(94, 126, 241, 0.6)",
                  }}
                >
                  {brand.filename}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {brandList.length === 0 && (
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Typography color="text.secondary">
            brands 폴더에 이미지가 없습니다.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
