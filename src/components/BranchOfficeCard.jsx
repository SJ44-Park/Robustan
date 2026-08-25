import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Link,
  Stack,
  Typography
} from "@mui/material";

const BranchOfficeCard = ({ branch }) => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    branch.mapQuery
  )}`;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6
        }
      }}
    >
      {/* 지도 영역 */}
      <Box
        sx={{
          width: "100%",
          height: {
            xs: 250,
            sm: 280,
            md: 300
          },
          backgroundColor: "#eeeeee"
        }}
      >
        <iframe
          title={`${branch.name} Map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            branch.mapQuery
          )}&output=embed`}
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: "block"
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      {/* 지사 정보 */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            borderLeft: `5px solid ${branch.color}`,
            pl: 1.5,
            mb: 2
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {branch.name}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.7
          }}
        >
          {branch.description}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.2}>
          <Box>
            <Typography
              // component="span"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              Address:
            </Typography>

            <Typography component="span" color="text.secondary" 
              sx={{ whiteSpace: 'pre-line', display: 'inline-block', verticalAlign: 'top' }}
              >
              {branch.address}
            </Typography>
          </Box>


          <Box>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              Trunklines:
            </Typography>

            <Link
              href={`tel:${branch.phone}`}
              underline="hover"
            >
              {branch.phone}
            </Link>
          </Box>



          <Box>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              TeleFax: 
            </Typography>

            <Typography component="span" color="text.secondary">
              {branch.Telefax}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="span"
              sx={{ fontWeight: "bold", mr: 1 }}
            >
              Email: 
            </Typography>

            <Link
              href={`mailto:${branch.email}`}
              underline="hover"
            >
              {branch.email}
            </Link>
          </Box>
        </Stack>
      </CardContent>

      <Box sx={{ px: 3, pb: 3 }}>
        <Link
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontWeight: "bold",
            color: branch.color
          }}
        >
          Google Maps →
        </Link>
      </Box>
    </Card>
  );
};

export default BranchOfficeCard;