import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FinalCampaign = () => {
  //Slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  // User Images for slider cards
  const User_Portraits = [
    { img: "/assets/pictures/portrait/p1.jpg" },
    { img: "/assets/pictures/portrait/p4.jpg" },
    { img: "/assets/pictures/portrait/p5.jpg" },
  ];
  //Campaign Content
  const Campaign_Content = [
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card1.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card2.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card3.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card4.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card5.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card1.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "3.19ETH",
      time: "2:41 min left",
      bids: 35,
      likes: 120,
      card_image: "/assets/pictures/campaign_card/card2.jpg",
      User_Portraits: [
        { img: "/assets/pictures/portrait/p1.jpg" },
        { img: "/assets/pictures/portrait/p4.jpg" },
        { img: "/assets/pictures/portrait/p5.jpg" },
      ],
    },
  ];

  const slider_ref = useRef();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: { xs: 2, sm: 3, md: 8 },

        py: 8,
        borderRadius: "8px",
        width: "100%",
        // overflow: "hidden",
      }}
    >
      <Container
        sx={{
          // maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* =>  Main Heading */}
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "30px",
            lineHeight: "38px",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#060714",
            textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          <Fade bottom>Latest Impact Campaigns</Fade>
        </Typography>
        {/* => Slider */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: 8,
          }}
        >
          <Slider {...settings} ref={(c) => (slider_ref.current = c)}>
            {Campaign_Content.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  transition: "all 0.3s ease",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* Slider Card => Top Image */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "270px",
                      height: "400px",
                      position: "relative",
                      transition: "all  0.3s ease",
                      "& img ": {
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <Image
                      src={item.card_image}
                      alt="nft"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  {/* Slider Card => (Middle Text + Eth btn) + Timer */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      maxWidth: "270px",
                      py: { xs: 1, md: 2 },
                      borderBottom: "1px solid #E2E2ED",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        flexDirection: "row",
                      }}
                    >
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
                          mb: { xs: 0.7, md: 1.4 },
                        }}
                      >
                        {`${item.title}`}
                      </Typography>
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
                          px: 3,
                          py: 1.5,
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
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        mt: 2,
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
                  </Box>
                  {/* Slider Card =>Bottom Line*/}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "270px",

                      py: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          ml: 0.5,
                        }}
                      >
                        {item.User_Portraits.map((user, index) => (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "35px",
                              height: "35px",
                              position: "relative",
                              transition: "all  0.3s ease",
                              borderRadius: "50px",
                              border: "5px solid white",
                              ml: -1.2,
                              "& img": {
                                borderRadius: "50px",
                              },
                            }}
                            key={index}
                          >
                            <Image
                              src={user.img}
                              alt="image"
                              layout="fill"
                              objectFit="cover"
                              priority
                            />
                          </Box>
                        ))}
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
                            ml: 1.5,
                          }}
                        >
                          {`${item.bids} people are bidding`}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "20px",
                            height: "20px",
                            position: "relative",
                            transition: "all  0.3s ease",
                            mr: 1.2,
                          }}
                        >
                          <Image
                            src="/assets/pictures/FavoriteIcon.svg"
                            alt="image"
                            layout="fill"
                            objectFit="contain"
                          />
                        </Box>
                        <Typography
                          sx={{
                            fontFamliy: "Inter",
                            fontStyle: "normal",
                            fontWeight: "400",
                            textAlign: "right",
                            fontSize: "14px",
                            lineHeight: "19px",
                            transition: "all 0.3s ease",
                            color: " #7780A1",
                          }}
                        >
                          ${item.likes}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
          <IconButton
            onClick={() => slider_ref.current.slickPrev()}
            sx={{
              border: "1px solid #0000001c",

              background: "#ffffffb0",
              width: "60px",
              height: "60px",
              color: "black",
              "&:hover": { background: "#ffffffb0" },
              position: "absolute",
              top: "32%",
              left: "-28px",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={() => slider_ref.current.slickNext()}
            sx={{
              border: "1px solid #0000001c",
              background: "#ffffffb0",
              width: "60px",
              height: "60px",
              color: "black",
              "&:hover": { background: "#ffffffb0" },
              position: "absolute",
              top: "32%",
              right: "-28px",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        {/* Bottom Button */}
        <Button
          variant="contained"
          sx={{
            fontFamily: "Sora",
            background:
              "linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)",
            boxShadow:
              "inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1)",
            px: 2.5,
            py: 1.2,
            fontWeight: 500,
            whiteSpace: "nowrap",
            borderRadius: "12px",
            color: "white",
            "&:hover": {
              backgroundColor:
                " linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)",
            },
            mt: { xs: 4, md: 8 },
            transition: "all 0.3s ease",
            textTransform: "uppercase",
          }}
        >
          Create A Campaign
        </Button>
      </Container>
    </Box>
  );
};

export default FinalCampaign;
