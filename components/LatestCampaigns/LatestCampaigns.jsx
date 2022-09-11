import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestCampaigns = () => {
  // Slider Function
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider_ref = useRef();
  // User Images for slider cards
  const User_Portraits = [
    { img: "/assets/pictures/portrait/p1.jpg" },
    { img: "/assets/pictures/portrait/p4.jpg" },
    { img: "/assets/pictures/portrait/p5.jpg" },
  ];
  //Campaign Cards content
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: { xs: 4, md: 8 },
        py: 8,
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/*=> Main Heading */}
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: "30px",
            lineHeight: "38px",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#060714",
            textTransform: "capitalize",
          }}
        >
          Latest Impact Campaigns
        </Typography>
        {/* => Slider */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: 8,
          }}
        >
          <Slider ref={(c) => (slider_ref.current = c)} {...settings}>
            {Campaign_Content.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                {/* => Slider Card */}
                <Box
                  sx={{
                    maxWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  {/* Slider Card => Top Image */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "300px",
                      height: "390px",
                      position: "relative",
                      transition: "all  0.3s ease",
                      "& img ": {
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <Image
                      src={item.card_image}
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
                      py: { xs: 1, md: 2 },
                      borderBottom: "1px solid #E2E2ED",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamliy: "Sora",
                          fontStyle: "normal",
                          fontWeight: "600",
                          textAlign: "left",
                          fontSize: { xs: "18px", md: "20px", lg: "22px" },
                          lineHeight: { xs: "23", md: "25px", lg: "27px" },
                          transition: "all 0.3s ease",
                          color: " #060714",
                          maxWidth: "80%",
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
                          {item.likes}
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
              background: "white",
              width: "70px",
              height: "70px",
              color: "black",
              "&:hover": { background: "white" },
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
              background: "white",
              width: "70px",
              height: "70px",
              color: "black",
              "&:hover": { background: "white" },
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

export default LatestCampaigns;
