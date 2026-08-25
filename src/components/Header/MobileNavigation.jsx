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
import { business, products, company } from "../../data/data";

export default function MobileNavigation({ open, onClose, onProductClick }) {
  const nav = useNavigate(),
    [cats, setCats] = useState({}),
    [subs, setSubs] = useState({}),
    // toggle = (set, k) => set((x) => ({ ...x, [k]: !x[k] }));
    toggle = (set, k) => set((x) => ({ ...x, [k]: !x[k] }));

  const itemsP = subs ? products.subCategories[subs] : [];
    //  const isCategoryOpen = openCategories[subCategory];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: { xs: "88vw", sm: 380 },
     } }}
    >
      <Box>
        <Box
        
          sx={{
          height: '56px',
            p: 2.5,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
              background: "#e4ffdd",
          }}
        >
          <Typography sx={{ fontWeight: 700, letterSpacing: 2, 
             color: "#6363ea"
           }}>
            PRODUCTS
          </Typography>
          <IconButton onClick={onClose} aria-label="닫기">
            <Close />
          </IconButton>
        </Box>


        {/* <List>
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
        <Divider /> */}



        <List>
          {/* <Typography sx={{ px: 2.5, pt: 2, color: "#999", fontSize: 11 }}>
            PRODUCTS LIST
          </Typography> */}
          {/* {Object.entries(business).map(([subCategory, c]) => ( */}
          {Object.entries(products.subCategories).map(([subCategory, items]) => (
            <React.Fragment key={subCategory}>
              <ListItemButton
                onClick={() => {
                  console.log(`setCats:${setCats} subCategory:${subCategory}`);
                  toggle(setCats, subCategory);
                }}
              >
                <ListItemText primary={subCategory} />
                {cats[subCategory] ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

              <Collapse in={cats[subCategory]} unmountOnExit>


                <List disablePadding>
                
               { items.map((item, index) => {
                    const key = item + index;
                    return (
                      <React.Fragment key={item}>
                        <ListItemButton
                          sx={{ pl: 5 }}
                          onClick={() => {
                          
                              console.log(`item.name:${item.name} brand:${item.brand}`);
      onProductClick(item ,subCategory);
                          }}
                        >
                          <ListItemText primary={item.name} secondary={item.brand} />
                          {subs[key] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                      </React.Fragment>
                    );
                  })}
                </List>


              </Collapse>
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
