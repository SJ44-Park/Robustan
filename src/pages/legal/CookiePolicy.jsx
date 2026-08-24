import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

export default function CookiePolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
        Cookie Policy
      </Typography>
      <Typography variant="body2" color="#ffffff" gutterBottom>
        Last Updated: August 2026
      </Typography>
      <Divider sx={{ my: 3 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>1. What are Cookies?</Typography>
          <Typography variant="body1">
            Cookies are small text files stored on your device to enhance your browsing experience, 
            remember your preferences, and analyze website traffic.
          </Typography>
        </section>

        <section>
          <Typography variant="h6" fontWeight="bold" gutterBottom>2. Managing Cookies</Typography>
          <Typography variant="body1">
            You can choose to accept or decline cookies through your browser settings. However, disabling 
            cookies may prevent you from taking full advantage of the website.
          </Typography>
        </section>
      </Box>
    </Container>
  );
}
