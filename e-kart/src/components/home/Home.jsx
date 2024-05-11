//Home.jsx
import React, { useEffect } from "react";

import NavBar from "./NavBar";
import Banner from "./Banners";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { sbiCardImage } from "../../constants/data";

import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";

import { useSelector, useDispatch } from "react-redux";

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2;
`


const Home = () => {

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  const sbiCardImage = () => {

    return (
      <Box>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/140/image/606a19936b528d9d.jpg?q=20" alt="sbi card" />
      </Box>
    )
  }



  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deals of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top Picks" timer={false} />
        <Slide products={products} title="Top Deals on Accseries" timer={false} />
      </Component>
    </>
  )
};

export default Home;
