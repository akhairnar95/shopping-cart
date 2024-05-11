//CustomButtons.jsx

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Badge, Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

import { DataContext } from "../../context/DataProvider";

//components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  '& > *': {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",

  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  }
}))
const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    display: "block"
  }
}))

const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text - transform: none;
padding: 5px 40px;
border - radius: 2px;
box - shadow: none;
font - weight: 600;
height: 32px;
margin-left: 15px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);

  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} /> :
          <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
      }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartTwoToneIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
