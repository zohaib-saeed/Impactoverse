import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const NftBlock = () => {
  //NFT Blocks data
  const Blocks_Content = [
    { img: "/assets/pictures/blocks/1.jpg", price: "3.32ETH" },
    { img: "/assets/pictures/blocks/4.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/10.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/11.jpg", price: "5.23ETH" },
    { img: "/assets/pictures/blocks/12.jpg", price: "9.34ETH" },
    { img: "/assets/pictures/blocks/13.jpg", price: "1.20ETH" },
    { img: "/assets/pictures/blocks/14.jpg", price: "0.81ETH" },
    { img: "/assets/pictures/blocks/15.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/16.jpg", price: "8.90ETH" },
    { img: "/assets/pictures/blocks/1.jpg", price: "3.32ETH" },
    { img: "/assets/pictures/blocks/4.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/10.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/11.jpg", price: "5.23ETH" },
    { img: "/assets/pictures/blocks/12.jpg", price: "9.34ETH" },
    { img: "/assets/pictures/blocks/13.jpg", price: "1.20ETH" },
    { img: "/assets/pictures/blocks/14.jpg", price: "0.81ETH" },
    { img: "/assets/pictures/blocks/15.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/16.jpg", price: "8.90ETH" },
    { img: "/assets/pictures/blocks/1.jpg", price: "3.32ETH" },
    { img: "/assets/pictures/blocks/4.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/10.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/11.jpg", price: "5.23ETH" },
    { img: "/assets/pictures/blocks/12.jpg", price: "9.34ETH" },
    { img: "/assets/pictures/blocks/13.jpg", price: "1.20ETH" },
    { img: "/assets/pictures/blocks/14.jpg", price: "0.81ETH" },
    { img: "/assets/pictures/blocks/15.jpg", price: "4.23ETH" },
    { img: "/assets/pictures/blocks/16.jpg", price: "8.90ETH" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        py: 8,
      }}
    >
      <Marquee
        play={true}
        pauseOnHover={true}
        speed={30}
        direction={"left"}
        gradient={false}
      >
        {Blocks_Content.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mx: 2,
            }}
            key={index}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70px",
                height: "70px",
                borderRadius: "14px",
                position: "relative",
                transition: "all  0.3s ease",
              }}
            >
              <Image
                src={item.img}
                alt="image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "14px",
                lineHeight: "19px",
                fontWeight: "400",
                fontStyle: "normal",
                color: "#7780A1",
                textTransform: "uppercase",
                mt: 1,
              }}
            >
              {item.price}
            </Typography>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default NftBlock;
