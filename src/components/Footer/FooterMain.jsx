import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:  "#0a2b6d",
        color: "#ffffff",
        py: 6,
        px: 2,
        mt: "auto",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* 1. 필리핀 현지 법인 정보 및 주소 양식 */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="#01a0c6"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Robustan Inc.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, maxWidth: 340, lineHeight: 1.6 }}
            >
              Providing top-tier digital transformation and corporate solutions
              across the Philippines.
            </Typography>
            {/* 필리핀 특유의 건물/바랑가이(Barangay) 포함 주소 체계 */}
            <Typography variant="caption" display="block" sx={{ mb: 0.5 }}>
              <strong>Address:</strong> 24th Floor, Tech Tower, 6789 Ayala
              Avenue, Barangay San Lorenzo, Makati City, 1226 Metro Manila,
              Philippines
            </Typography>

            {/* 필리핀 법적 증명 번호 필수 기재 영역 */}
            <Box
              sx={{ mt: 2, bgcolor: "action.hover", p: 1.5, borderRadius: 1 }}
            >
              <Typography
                variant="caption"
                display="block"
                sx={{ fontWeight: "bold", color: "#01a0c6", mb: 0.5 }}
              >
                Regulatory Compliance
              </Typography>
              <Typography variant="caption" display="block">
                <strong>SEC Registration No:</strong> CS202XXXXXX
              </Typography>
              <Typography variant="caption" display="block">
                <strong>BIR TIN:</strong> 009-XXX-XXX-000
              </Typography>
            </Box>
          </Grid>

          {/* 2. 내비게이션 링크 */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle2"
              color="#01a0c6"
              sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase" }}
            >
              Company
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <li>
                <Link
                  href="/about"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Contact Us
                </Link>
              </li>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle2"
              color="#01a0c6"
              sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase" }}
            >
              Services
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
              <li>
                <Link
                  href="/solutions"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  color="inherit"
                  variant="body2"
                  display="block"
                  sx={{ mb: 1 }}
                >
                  Help & Support
                </Link>
              </li>
            </Box>
          </Grid>

          {/* 3. 소셜 미디어 및 NPC 데이터 프라이버시 컴플라이언스 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              color="#01a0c6"
              sx={{ fontWeight: 700, mb: 2, textTransform: "uppercase" }}
            >
              Connect with Us
            </Typography>
            <Box sx={{ mb: 2, ml: -1 }}>
              <IconButton
                aria-label="Facebook"
                color="inherit"
                href="https://facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                href="https://twitter.com"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                href="https://instagram.com"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Box>

            {/* 필리핀 필수: NPC(National Privacy Commission) 규정 준수 안내 및 링크 고지 */}
            <Box sx={{ borderLeft: "3px solid #0038a8", pl: 1.5, py: 0.5 }}>
              <Typography
                variant="caption"
                display="block"
                sx={{ fontWeight: "bold", color: "#01a0c6" }}
              >
                Data Privacy Act (DPA) Compliant
              </Typography>
              <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                Registered with the National Privacy Commission of the
                Philippines.
              </Typography>
              {/* 실제 운영 시 NPC Seal 이미지나 전용 페이지 링크 연동 필수 */}
              <Link
                href="/npc-verification"
                variant="caption"
                sx={{
                  fontWeight: "bold",
                  underline: "always",
                  color: "primary.main",
                }}
              >
                View NPC Seal & Privacy Notice →
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 ,borderColor: '#6bb2fa' }} />

        {/* 4. 최하단 저작권 및 표준 법적 링크 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" align="center">
            &copy; {currentYear} Robustan Inc. All rights reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              href="/privacy-notice"
              color="inherit"
              variant="caption"
              underline="hover"
            >
              Privacy Notice
            </Link>
            <Link
              href="/terms-of-use"
              color="inherit"
              variant="caption"
              underline="hover"
            >
              Terms of Use
            </Link>
            <Link
              href="/cookie-policy"
              color="inherit"
              variant="caption"
              underline="hover"
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
