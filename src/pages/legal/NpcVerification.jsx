import React from 'react';
import { Container, Typography, Box, Paper, Grid, Divider, Button, Link } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';
import ShieldIcon from '@mui/icons-material/Shield';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link as RouterLink } from 'react-router-dom';

export default function NpcVerification() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* 상단 타이틀 및 공식 인증 마크 인증 영역 */}
      <Paper elevation={0} sx={{ p: 4, bgcolor: 'action.hover', borderRadius: 2, textAlign: 'center', mb: 5, border: '1px solid', borderColor: 'divider' }}>
        <VerifiedUserIcon sx={{ fontSize: 60, color: '#0038a8', mb: 2 }} />
        <Typography variant="h5" component="h1" fontWeight="bold" color="#01a0c6" gutterBottom>
          NPC Seal of Registration
        </Typography>
        <Typography variant="body2" color="#ffffff" sx={{ maxWidt: 500, mx: 'auto', mb: 2 }}>
          This website is officially registered with the <strong>National Privacy Commission (NPC)</strong> of the Republic of the Philippines, in full compliance with the Data Privacy Act of 2012.
        </Typography>
        <Typography variant="caption" display="block" sx={{ fontStyle: 'italic', color: 'success.main', fontWeight: 'bold' }}>
          ● Status: ACTIVE & COMPLIANT (Registration No. REG-2026-XXXXX)
        </Typography>
      </Paper>

      {/* 공식 등록 세부 정보 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <BusinessIcon color="primary" /> Registration Details
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.disabled" display="block">REGISTERED ENTITY</Typography>
          <Typography variant="body1" fontWeight="medium">Robustan Inc.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.disabled" display="block">SEC REGISTRATION NUMBER</Typography>
          <Typography variant="body1" fontWeight="medium">CS202XXXXXX</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.disabled" display="block">DATE OF ISSUANCE</Typography>
          <Typography variant="body1" fontWeight="medium">January 15, 2026</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.disabled" display="block">VALID UNTIL</Typography>
          <Typography variant="body1" fontWeight="medium">January 14, 2027 (Annual Renewal Required)</Typography>
        </Grid>
      </Grid>

      {/* 데이터 권리 보호 선언 */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ShieldIcon color="primary" /> Our Data Privacy Commitment
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.7 }}>
        We adhere strictly to the general data privacy principles of <strong>Transparency, Legitimate Purpose, and Proportionality</strong>. 
        Any personal data collected through this platform is processed securely and retained only as long as necessary for the fulfillment of its declared purposes.
      </Typography>
      
      {/* DPO 연락처 (NPC 규정상 공개 의무) */}
      <Paper variant="outlined" sx={{ p: 3, bgcolor: "#0a2b6d", mb: 5, borderRadius: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#01a0c6' }}>
          <ContactMailIcon fontSize="small" /> Data Protection Officer (DPO)
        </Typography>
        <Typography variant="body2" color="#ffffff" paragraph>
          For any complaints, clarifications, or requests regarding your personal data rights under the Philippine DPA, you may contact our designated DPO:
        </Typography>
        <Typography variant="body2"><strong>Email:</strong> dpo@company.com</Typography>
        <Typography variant="body2"><strong>Landline:</strong> +63 (2) 8XXX-XXXX</Typography>
        <Typography variant="body2"><strong>Office Address:</strong> 24th Floor, Tech Tower, 6789 Ayala Avenue, Makati City</Typography>
      </Paper>

      {/* 하단 네비게이션 버튼 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Button 
          component={RouterLink} 
          to="/privacy-notice" 
          variant="contained" 
          color="primary"
          disableElevation
        >
          Read Full Privacy Notice
        </Button>
        <Link 
          href="https://privacy.gov.ph" 
          target="_blank" 
          rel="noopener" 
          variant="body2" 
          underline="always"
        >
          Visit National Privacy Commission Official Website ↗
        </Link>
      </Box>
    </Container>
  );
}
