import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function PrivacyNotice() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Privacy Notice
      </Typography>
      <Typography variant="body2" color="#ffffff" gutterBottom>
        Last Updated: August 2026
      </Typography>
      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>1. Compliance Statement</Typography>
          <Typography variant="body1">
            In compliance with the <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of the Philippines, 
            we are committed to protecting and securing your personal information.
          </Typography>
        </section>

        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>2. Information We Collect</Typography>
          <Typography variant="body1">
            We collect personal data that you voluntarily provide to us, including your name, email address, 
            contact number, and business details when you inquire about our services.
          </Typography>
        </section>

        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>3. Your Rights as a Data Subject</Typography>
          <Typography variant="body1">
            Under the DPA, you have the right to be informed, object to processing, access, rectify, 
            and erase your personal data. For inquiries, contact our Data Protection Officer (DPO) at dpo@company.com.
          </Typography>
        </section>
      </Box>
    </Container>
  );
}
