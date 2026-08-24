import React from "react";
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5  }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Contact
      </Typography>

      <Typography color="#ffffff" sx={{ mb: 4 }}>
        궁금한 점이 있으면 문의해 주세요.
      </Typography>

      <Stack spacing={2}>
        <TextField label="이름" fullWidth />
        <TextField label="이메일" type="email" fullWidth />
        <TextField label="문의 내용" multiline rows={6} fullWidth />

        <Button variant="contained" size="large">
          문의 보내기
        </Button>
      </Stack>
    </Container>
  );
};

export default Contact;