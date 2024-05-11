//Header.jsx

import { useState } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, styled } from "@mui/material";

import { Menu } from '@mui/icons-material';

// COMPONENTS
import Search from "./Search";
import CustomButton from "./CustomButtons";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 60px;
`;

const Component = styled(Link)`
  margin-left: 10%;
  line-height: 0.8;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 16px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  marginLeft: '0 5% 0 auto',
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}))


const Header = () => {
  const logoURL = "https://ekartlogistics.com/assets/images/ekWhiteLogo.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose} >
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 60 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to='/'>
          <img src={logoURL} alt="logo" style={{ width: 90 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub" style={{ width: 10 }} />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
