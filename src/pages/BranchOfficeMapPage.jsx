import React from "react";
import {
  Box,
  Container,
  Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import branchOffices from "../data/branchOffices";
import BranchOfficeCard from "../components/BranchOfficeCard";

export default function BranchOfficeMapPage () {
  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 1
          }}
        >
          Branch Offices
        </Typography>

        <Typography color="text.secondary">
          Robustan Branch Offices
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {branchOffices.map((branch) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            key={branch.id}
          >
            <BranchOfficeCard branch={branch} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

