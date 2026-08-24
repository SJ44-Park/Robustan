import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, 
  Card, CardContent, CardActions, TextField, Box,
  CssBaseline, createTheme, ThemeProvider 
} from '@mui/material';


// MUI 테마 설정
const theme = createTheme({
  palette: {
    primary: { main: '#0288d1' },
    secondary: { main: '#26a69a' },
    background: { default: '#f4f6f8' },
  },
});



// [컴포넌트 1] 홈 페이지 컴포넌트
export default function Supports() {
  const [form, setForm] = useState({ name: '', date: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (

       <>
      {/* 히어로 섹션 */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white',mt:4, py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom fontWeight="bold">Your Partner for <br></br>a Healthier Tomorrow,<br></br> Robustan</Typography>
          <Typography variant="h6" paragraph>We provide advanced medical solutions with highly experienced specialists.</Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>Get Free Consultation</Button>
        </Container>
      </Box>

      {/* 예약 신청 폼 섹션 */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">Quick Appointment</Typography>
          {submitted ? (
            <Typography variant="h6" align="center" color="secondary" sx={{ mt: 4 }}>
              Your appointment request has been submitted successfully!
            </Typography>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField label="Full Name" fullWidth required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} />
              <TextField label="Phone Number" fullWidth required value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} />
              <TextField label="Preferred Date" type="date" InputLabelProps={{ shrink: true }} fullWidth required value={form.date} onChange={(e)=>setForm({...form, date: e.target.value})} />
              <Button type="submit" variant="contained" color="primary" size="large">Book Now</Button>
            </Box>
          )}
        </Container>
      </Box>
</>
  );
}
