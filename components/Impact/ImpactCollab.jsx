import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const ImpactCollab = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: { xs: 2, sm: 3, md: 8 },

        py: { xs: 3, md: 5, lg: 8 },
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        {/* => Section Left */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transition: "all  0.3s ease",
              width: { xs: "270px", sm: "400px", md: "450px", lg: "500px" },
              height: { xs: "320px", sm: "450px", md: "500px", lg: "550px" },
              maxWidth: "500px",
              maxHeight: "422px",
              zIndex: 111,
              mr: 1.2,
            }}
          >
            <Image
              src="/assets/pictures/collab_impact.jpg"
              alt="image"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        {/* => Section Right */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            flex: { xs: 1, md: 0.5 },
            width: { xs: "100% ", xm: "80%", lg: "50%" },
          }}
        >
          {/*  Section Right => Top part */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "12px",
                  lineHeight: "16px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#BBC0D0",
                  textTransform: "uppercase",
                }}
              >
                Overline
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { xs: "32px", lg: "40px" },
                  lineHeight: { xs: "40px", lg: "48px" },
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#060714",
                  textTransform: "capitalize",
                  mt: 2,
                }}
              >
                <Fade right>Featured Impact Collab</Fade>
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "14px", lg: "16px" },
                lineHeight: { xs: "22px", lg: "24px" },
                fontWeight: "400",
                fontStyle: "normal",
                color: "#7780A1",
                letterSpacing: "0.2px",
                mt: { xs: 1.5, md: 3 },
              }}
            >
              <Fade bottom>
                Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
                pulvinar ultricies dolor feugiat aliquam commodo.
              </Fade>
            </Typography>
          </Box>
          {/*  Section Right => Bottom part */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              mt: { xs: 4, md: 8 },
            }}
          >
            {/*  Section Right => Bottom part >>> Buttons*/}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "row",
              }}
            >
              {/* Left Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    transition: "all  0.3s ease",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <Image
                    src="/assets/pictures/paint_vector.svg"
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    mt: { xs: 1.5, md: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: { sm: "16px", md: "20px" },
                      lineHeight: { sm: "21px", md: "25px" },
                      letterSpacing: "0.2px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: " #060714",
                    }}
                  >
                    <Fade bottom>Sollicitudin sapien</Fade>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "16px",
                      lineHeight: "150%",
                      fontWeight: "400",
                      fontStyle: "normal",
                      color: "#7780A1",
                      mt: { xs: 0.3, md: 0.5 },
                    }}
                  >
                    <Fade bottom>Cursus fermentum</Fade>
                  </Typography>
                </Box>
              </Box>
              {/* Right Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  ml: { xs: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    transition: "all  0.3s ease",
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <Image
                    src="/assets/pictures/number_vector.svg"
                    alt="image"
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    mt: { xs: 1.5, md: 3 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: { sm: "16px", md: "20px" },
                      lineHeight: { sm: "21px", md: "25px" },
                      letterSpacing: "0.2px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: " #060714",
                      mt: { xs: 0.3, md: 0.5 },
                    }}
                  >
                    <Fade bottom>Pulvinar metus</Fade>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "16px",
                      lineHeight: "150%",
                      fontWeight: "400",
                      fontStyle: "normal",
                      color: "#7780A1",
                    }}
                  >
                    <Fade bottom>Nunc sed</Fade>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: 2, md: 4 },
                transition: "all 0.3s ease",
                flexDirection: { xs: "column", sm: "row" },
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
                  mr: { xs: 0, sm: 2 },
                  mt: { xs: 2, sm: 0 },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImpactCollab;
