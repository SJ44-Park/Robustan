import React, { useState } from "react";
import { Box, Button, IconButton, MobileStepper, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
export default function ProductSlider({ images, productName }) {
  const [step, setStep] = useState(0),
    max = images.length,
    next = () => setStep((x) => (x + 1) % max),
    back = () => setStep((x) => (x + max - 1) % max);
  return (
    <Box>
      <Box sx={{ position: "relative", aspectRatio: 1, overflow: "hidden" }}>
        <Box
          component="img"
          src={images[step]}
          alt={productName}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <IconButton
          onClick={back}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            background: "#fff",
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            background: "#fff",
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
      {/* <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
        {images.map((x, i) => (
          <Box
            key={x}
            component="img"
            src={x}
            onClick={() => setStep(i)}
            sx={{
              width: "25%",
              aspectRatio: 1,
              objectFit: "cover",
              cursor: "pointer",
              opacity: step === i ? 1 : 0.5,
            }}
          />
        ))}
      </Stack> */}
      <MobileStepper
        steps={max}
        activeStep={step}
        position="static"
        sx={{ display: { xs: "flex", md: "flex" } }}
        nextButton={<Button onClick={next}>Prev</Button>}
        backButton={<Button onClick={back}>Next</Button>}
      />
    </Box>
  );
}
