import React from 'react';
import Home from '../components/mainpage/home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import TopCate from '../components/top/TopCate';
import NewArrivals from '../components/newArrivals/NewArrivals';
import Discount from '../components/discount/Discount';
import Shop from '../components/Shop/Shop';
import Announcement from '../components/announcements/Announcement';
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart} />
        <Announcement />
        <Wrapper />
    </>
  )
}

export default Pages;