import React, { useState } from "react";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { Close, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { business, company } from "../../data/data";

export default function MobileMenuBar({ open, onClose, onBussinessClick }) {
  const nav = useNavigate(),
    [cats, setCats] = useState({}),
    [subs, setSubs] = useState({}),
    toggle = (set, k) => set((x) => ({ ...x, [k]: !x[k] }));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: "70vw", sm: 300 } } } }}
    >
      <Box>
        <Box
          sx={{
            p: 2.5,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, letterSpacing: 2, color: "#ffc124ff" }}
          >
            ROBUSTAN
          </Typography>
          <IconButton onClick={onClose} aria-label="닫기">
            <Close />
          </IconButton>
        </Box>

        <List>
          <Typography sx={{ px: 2.5, pt: 2, color: "#999", fontSize: 11 }}>
            COMPANY
          </Typography>
          {company.map((x) => (
            <ListItemButton
              key={x.label}
              onClick={() => {
                nav(x.path);
                onClose();
              }}
            >
              <ListItemText primary={x.label} />
            </ListItemButton>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
}
