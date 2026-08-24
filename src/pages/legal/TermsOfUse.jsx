import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function TermsOfUse() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Terms of Use
      </Typography>
      <Typography variant="body2" color="#ffffff" gutterBottom>
        Last Updated: August 2026
      </Typography>
      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>1. Acceptance of Terms</Typography>
          <Typography variant="body1">
            By accessing this website, you agree to be bound by these Terms of Use and all applicable laws 
            and regulations in the Philippines.
          </Typography>
        </section>

        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>2. Governing Law</Typography>
          <Typography variant="body1">
            Any claim relating to this website shall be governed by the laws of the <strong>Republic of the Philippines</strong>, 
            without regard to its conflict of law provisions. Any legal action shall be filed in the competent courts of Makati City, Metro Manila.
          </Typography>
        </section>
      </Box>
    </Container>
  );
}
