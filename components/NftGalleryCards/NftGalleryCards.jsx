import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

const NftGalleryCards = () => {
  //Left Slider cards
  const Left_Slider = [
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "1.11ETH",
      time: "2:41 min left",
      bids: 76,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card2.jpg",
    },
    {
      title: "Diam purus sagittis nisl erat mauris",
      price: "0.08ETH",
      time: "2:45 min left",
      bids: 132,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card1.jpg",
    },
    {
      title: "Nascetur mauris viverra vel id id sem leo",
      price: "1.22ETH",
      time: "3:12 min left",
      bids: 12,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card4.jpg",
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: "2.34ETH",
      time: "1:54 min left",
      bids: 45,
      likes: 120,
      card_image: "/assets/pictures/showcase_card/card3.jpg",
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
  //Slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  //3rd sec data
  const Right_Sec = [
    {
      img: "/assets/pictures/3secImages/1.jpg",
      title: "Vulputate velit viverra volutpat volutpat tristique",
      time: "22:59",
      price: "1.25 ETH",
      bids: "101",
    },
    {
      img: "/assets/pictures/3secImages/2.jpg",
      title: "Egestas blandit sit egestas non sed. Purus semper",
      time: "22:59",
      price: "1.25 ETH",
      bids: "101",
    },
    {
      img: "/assets/pictures/3secImages/3.jpg",
      title: "Id ut consequat netus nec vel amet ut porta in augue",
      time: "22:59",
      price: "1.25 ETH",
      bids: "101",
    },
    {
      img: "/assets/pictures/3secImages/4.jpg",
      title: "Sed et nibh felis integer tellus turpin",
      time: "22:59",
      price: "1.25 ETH",
      bids: "101",
    },
  ];
  const slider_ref = useRef();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        id="dark_section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", sml: "row" },
          maxWidth: "lg",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sml={6} mdlx={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                flexDirection: "column",
                p: { xs: 1, sm: 2.5 },
                border: "2px solid #E2E2ED",
                height: "100%",
                mt: { xs: 3, sml: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: "30px",
                  lineHeight: "38px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#060714",
                  textTransform: "capitalize",
                  textAlign: { xs: "center", sml: "left" },
                  width: "100%",
                  mb: 2,
                }}
              >
                <Fade bottom>
                  Check Out Our hottest Brand for Impact campaign
                </Fade>
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  transition: "all 0.3s ease",
                  height: "472px",
                  overflow: "hidden",
                }}
              >
                <Slider {...settings} ref={(c) => (slider_ref.current = c)}>
                  {Left_Slider.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        width: "212px",

                        transition: "all 0.3s ease ",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          transition: "all  0.3s ease",
                          width: "212px",
                        }}
                      >
                        {/* => Card Image */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "212px",
                            height: "330px",
                            position: "relative",
                            transition: "all  0.3s ease",
                            "& img ": {
                              borderRadius: "14px",
                            },
                          }}
                        >
                          <Image
                            src={item.card_image}
                            layout="fill"
                            objectFit="cover"
                            alt="nft"
                          />
                        </Box>
                        {/* => Card Title + Eth Btn */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            py: 1,
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
                              mb: 0.7,
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
                            py: 0.7,

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
                    </Box>
                  ))}
                </Slider>

                <IconButton
                  onClick={() => slider_ref.current.slickPrev()}
                  sx={{
                    border: "1px solid #0000001c",
                    background: "#ffffffb0",
                    width: "45px",
                    height: "45px",
                    color: "black",
                    "&:hover": { background: "#ffffffb0" },
                    position: "absolute",
                    top: "32%",
                    left: "5px",
                  }}
                >
                  <ArrowBackIosNewIcon sx={{ fontSize: "18px" }} />
                </IconButton>
                <IconButton
                  onClick={() => slider_ref.current.slickNext()}
                  sx={{
                    border: "1px solid #0000001c",
                    background: "#ffffffb0",
                    width: "45px",
                    height: "45px",
                    color: "black",
                    "&:hover": { background: "#ffffffb0" },
                    position: "absolute",
                    top: "32%",
                    right: "5px",
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligntems: "center",
                  width: "100%",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #7780A1",
                    backgroundColor: "none",
                    borderRadius: "12px",
                    px: 2.5,
                    py: 1,
                    fontWeight: 500,
                    fontFamily: "Sora",
                    whiteSpace: "nowrap",
                    borderRadius: "12px",
                    color: "#7780A1",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "2px solid #7780A1",
                      backgroundColor: "#7780a121",
                    },
                    textTransform: "capitalize",
                    width: "90%",
                    mt: { xs: 0.5, md: 1 },
                  }}
                >
                  Show me more
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sml={6} mdlx={4}>
            <Box
              id="section_dark__bg"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "100%",
                p: { xs: 2, sm: 3 },
                minHeight: "550px",
                borderRadius: "12px",
                mt: { xs: 3, sml: 0 },

                // my: { xs: 1.2, md: 1.7 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  width: "80%",
                  mb: { xs: 3, sml: 8 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { xs: "22px", md: "24px" },
                    lineHeight: { xs: "28px", md: "32px" },
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    textShadow: "3px 3px 3px #B8CEC9",
                    textAlign: "left",
                    mb: 1,
                  }}
                >
                  <Fade top>{`Get started creating& selling your NFTs`}</Fade>
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "#7780A1",
                    textTransform: "capitalize",
                    textAlign: "left",
                  }}
                >
                  <Fade bottom>
                    {`Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mi est sit.`}
                  </Fade>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", sml: "center" },
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)",
                    boxShadow:
                      "inset -4px -4px 4px rgba(0, 0, 0, 0.1), inset 4px 4px 4px rgba(255, 255, 255, 0.1)",
                    px: 2.5,
                    py: 1.2,
                    fontWeight: 500,
                    fontFamily: "Sora",
                    width: "90%",
                    whiteSpace: "nowrap",
                    borderRadius: "12px",
                    color: "white",
                    "&:hover": {
                      backgroundColor:
                        " linear-gradient(104.42deg, #4745D0 0%, #2A27C9 60.23%)",
                    },
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                    mr: 2,
                    mr: { xs: 0, sm: 2 },
                    mt: { xs: 2, sm: 0 },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sml={6} mdlx={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                borderRadius: "12px",
                flexDirection: "column",
                p: { xs: 1, sm: 2.5 },
                border: "2px solid #E2E2ED",
                height: "100%",
                mt: { xs: 3, sml: 0 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: "30px",
                  lineHeight: "38px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#060714",
                  textTransform: "capitalize",
                  textAlign: { xs: "center", sml: "left" },
                  width: "100%",
                  mb: 2,
                }}
              >
                <Fade bottom>Campaigns ending soon</Fade>
              </Typography>
              {Right_Sec.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    my: { xs: 1.2, md: 1.5 },
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "105px",
                      height: "85px",
                      borderRadius: "14px",
                      position: "relative",
                      transition: "all  0.3s ease",
                      mr: { xs: 1.5, md: 2 },

                      "& img": {
                        borderRadius: "14px",
                      },
                    }}
                  >
                    <Image
                      src={item.img}
                      alt="nft"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "stretch",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamliy: "Sora",
                        fontStyle: "normal",
                        fontWeight: "600",
                        textAlign: "left",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" },
                        lineHeight: { xs: "20px", md: "21px" },
                        transition: "all 0.3s ease",
                        color: " #060714",
                        letterSpacing: "0.2px",
                        mb: 0.6,
                      }}
                    >
                      {`${item.title}`}
                    </Typography>
                    {/* Timer + ETH Btn */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        borderBottom: "1px solid #E2E2ED",
                        pb: 0.8,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "flex-start",
                        }}
                      >
                        <AlarmOutlinedIcon sx={{ fontSize: "18px" }} />

                        <Typography
                          sx={{
                            fontFamliy: "Inter",
                            fontStyle: "normal",
                            fontWeight: "400",
                            textAlign: "left",
                            fontSize: "12px",
                            lineHeight: "18px",
                            transition: "all 0.3s ease",
                            color: " #060714",
                            mt: 0.1,
                            ml: 0.5,
                          }}
                        >
                          {item.time} min left
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          fontFamily: "Sora",
                          fontSize: { xs: "11px", xm: "12px", sml: "13px" },
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

                    {/* Bids + Like Btn */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        pt: { xs: 0.5, sml: 1 },
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
                </Box>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  aligntems: "center",
                  width: "100%",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #7780A1",
                    backgroundColor: "none",
                    borderRadius: "12px",
                    px: 2.5,
                    py: 1,
                    fontWeight: 500,
                    fontFamily: "Sora",
                    whiteSpace: "nowrap",
                    borderRadius: "12px",
                    color: "#7780A1",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "2px solid #7780A1",
                      backgroundColor: "#7780a121",
                    },
                    textTransform: "capitalize",
                    width: "90%",
                    mt: { xs: 0.5, md: 1 },
                  }}
                >
                  Show me more
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NftGalleryCards;
