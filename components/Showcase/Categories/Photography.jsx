import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import { Scale } from "@mui/icons-material";

const Photography = () => {
  //Showcase Cards content
  const Showcase_Content = [
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "1.11ETH",
      time: "2:41 min left",
      bids: 76,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card1.jpg",
    },
    {
      title: "Diam purus sagittis nisl erat mauris",
      price: "0.08ETH",
      time: "2:45 min left",
      bids: 132,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card2.jpg",
    },
    {
      title: "Nascetur mauris viverra vel id id sem leo",
      price: "1.22ETH",
      time: "3:12 min left",
      bids: 12,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card3.jpg",
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "2.34ETH",
      time: "1:54 min left",
      bids: 45,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card4.jpg",
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "4:23 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card5.jpg",
    },
    {
      title: "Odio lacus neque ultrices purus eget",
      price: "1.19ETH",
      time: "3:43 min left",
      bids: 12,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card6.jpg",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 4, md: 8 },
      }}
    >
      <Grid container spacing={4}>
        {Showcase_Content.map((item, index) => (
          <Grid item md={4} lg={3} xl={2} key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                transition: "all  0.3s ease",
                width: { xs: "250px", sm: "212px" },
                mx: 1.5,
              }}
            >
              {/* => Card Image */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "250px", sm: "212px" },
                  height: "355px",
                  position: "relative",
                  transition: "all  0.3s ease",
                  "& img ": {
                    borderRadius: "8px",
                  },
                }}
              >
                <Image src={item.card_image} layout="fill" objectFit="cover" />
              </Box>
              {/* => Card Title + Eth Btn */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  py: { xs: 1, md: 2 },
                  borderBottom: "1px solid #E2E2ED",
                }}
              >
                {/*=>  Card Title */}
                <Typography
                  sx={{
                    fontFamliy: "Sora",
                    fontStyle: "normal",
                    fontWeight: "600",
                    textAlign: "left",
                    fontSize: { xs: "15px", md: "16px" },
                    lineHeight: { xs: "20px", md: "21px" },
                    transition: "all 0.3s ease",
                    color: " #060714",
                    letterSpacing: "0.2px",
                    mb: { xs: 1.3, md: 2 },
                  }}
                >
                  {`${item.title}`}
                </Typography>
                {/*=>  Card Timer + Eth btn */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* => Timer */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <AlarmOutlinedIcon sx={{ fontSize: "20px" }} />

                    <Typography
                      sx={{
                        fontFamliy: "Inter",
                        fontStyle: "normal",
                        fontWeight: "400",
                        textAlign: "left",
                        fontSize: "14px",
                        lineHeight: "19px",
                        transition: "all 0.3s ease",
                        color: " #060714",
                        mt: 0.1,
                        ml: 1,
                      }}
                    >
                      {item.time}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "Sora",
                      fontSize: "13px",
                      lineHeight: "17px",
                      fontWeight: 700,
                      fontStyle: "normal",
                      color: "#2A27C9",
                      borderRadius: "4px",
                      textTransform: "capitalize",
                      backgroundColor: "rgba(42, 39, 201, 0.1)",
                      outline: "none",
                      border: "none",
                      px: 2,
                      py: 0.7,
                      "&:hover": {
                        backgroundColor: "rgba(42, 39, 201, 0.1)",
                        color: "#2a27c9c2",
                        outline: "none",
                        border: "none",
                      },
                    }}
                  >
                    {item.price}
                  </Button>
                </Box>
              </Box>
              {/*=>  Peopple Bidding + Favorite Icon */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: { xs: 1, md: 2 },

                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamliy: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    textAlign: "left",
                    fontSize: "12px",
                    lineHeight: "19px",
                    transition: "all 0.3s ease",
                    color: " #7780A1",
                  }}
                >
                  {`${item.bids} people are bidding`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20px",
                    height: "20px",
                    position: "relative",
                    transition: "all  0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/assets/pictures/FavoriteIcon.svg"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Photography;
