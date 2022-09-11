import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

const Footer = () => {
  //Social Icons data
  const Social_Icons = [
    { img: "/assets/pictures/social/fb.svg", link: "https://facebook.com" },
    { img: "/assets/pictures/social/in.svg", link: "https://social.com" },
    { img: "/assets/pictures/social/git.svg", link: "https://github.com" },
    { img: "/assets/pictures/social/twitter.svg", link: "https://twitter.com" },
    { img: "/assets/pictures/social/insta.svg", link: "https://instagram.com" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
        px: { xs: 0, sm: 4, md: 8 },
        py: { xs: 3, md: 5, lg: 8 },
      }}
    >
      <Container
        id="footer_gridItem"
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            border: { xs: "1px solid #E2E2ED", mdl: " 1px solid #E2E2ED" },
            borderRadius: "15px",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} mdl={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "center", md: "flex-start" },

                  flexDirection: "column",
                  height: "100%",
                  p: { xs: 2, md: 3 },
                  border: { xs: "none", mdl: "none" },
                  borderRight: { mdl: "1px solid #E2E2ED" },
                  mt: { xs: 3, md: 0 },
                }}
              >
                {/* => Card Top */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      transition: "all  0.3s ease",
                      width: "26px",
                      height: "26px",
                    }}
                  >
                    <Image
                      src="/assets/pictures/footer_decor.svg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      transition: "all  0.3s ease",
                      width: "112px",
                      height: "16px",
                      ml: 0.6,
                    }}
                  >
                    <Image
                      src="/assets/pictures/logo.svg"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Box>
                </Box>
                {/* => Card Bottom */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    "& a ": {
                      textDecoration: "none",
                      cursor: "pointer",
                    },
                    mt: { xs: 4, sm: 0 },
                  }}
                >
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "13px",
                          lineHeight: "18px",
                          fontWeight: "400",
                          fontStyle: "normal",
                          color: "#7780A1",
                          textTransform: "capitalize",
                          mr: { xs: 2, md: 4 },
                        }}
                      >
                        Support
                      </Typography>
                    </AnchorLink>
                  </Link>
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "13px",
                          lineHeight: "18px",
                          fontWeight: "400",
                          fontStyle: "normal",
                          color: "#7780A1",
                          textTransform: "capitalize",
                          mr: { xs: 2, md: 4 },
                        }}
                      >
                        Terms of Service
                      </Typography>
                    </AnchorLink>
                  </Link>
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "13px",
                          lineHeight: "18px",
                          fontWeight: "400",
                          fontStyle: "normal",
                          color: "#7780A1",
                          textTransform: "capitalize",
                          mr: { xs: 2, md: 4 },
                        }}
                      >
                        License
                      </Typography>
                    </AnchorLink>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} mdl={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                  flexDirection: "column",
                  width: "100%",
                  p: { xs: 2, md: 3 },
                  border: { xs: "none", mdl: "none" },
                  borderRight: { mdl: "1px solid #E2E2ED" },
                  mt: { xs: 3, md: 0 },
                }}
              >
                {/* => Heading */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    "& a": {
                      textDecoration: "none",
                      cursor: "pointer",
                      mb: { xs: 1.5, md: 2 },
                    },
                  }}
                >
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: "16px",
                          lineHeight: "21px",
                          fontWeight: "600",
                          fontStyle: "normal",
                          color: "#060714",
                          textTransform: "capitalize",
                          textAlign: "left",
                        }}
                      >
                        Auctions
                      </Typography>
                    </AnchorLink>
                  </Link>
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: "16px",
                          lineHeight: "21px",
                          fontWeight: "600",
                          fontStyle: "normal",
                          color: "#060714",
                          textTransform: "capitalize",
                          textAlign: "left",
                        }}
                      >
                        Roadmap
                      </Typography>
                    </AnchorLink>
                  </Link>
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: "16px",
                          lineHeight: "21px",
                          fontWeight: "600",
                          fontStyle: "normal",
                          color: "#060714",
                          textTransform: "capitalize",
                          textAlign: "left",
                        }}
                      >
                        Discover
                      </Typography>
                    </AnchorLink>
                  </Link>
                  <Link href="/">
                    <AnchorLink>
                      <Typography
                        sx={{
                          fontFamily: "Sora",
                          fontSize: "16px",
                          lineHeight: "21px",
                          fontWeight: "600",
                          fontStyle: "normal",
                          color: "#060714",
                          textTransform: "capitalize",
                          textAlign: "left",
                        }}
                      >
                        Community
                      </Typography>
                    </AnchorLink>
                  </Link>
                </Box>
                {/* => Button */}
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
                    my: { xs: 4, md: 8 },
                  }}
                >
                  My Account
                </Button>
                {/* => Social Media Icons */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    "& a": {
                      mr: { xs: 1.6, md: 2.3 },
                      cursor: "pointer",
                    },
                  }}
                >
                  {Social_Icons.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <AnchorLink>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            transition: "all  0.3s ease",
                            width: "26px",
                            height: "26px",
                          }}
                        >
                          <Image
                            src={item.img}
                            layout="fill"
                            objectFit="contain"
                          />
                        </Box>
                      </AnchorLink>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} mdl={4} item>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: { xs: "center", md: "flex-start" },
                  border: { xs: "none", mdl: "none" },
                  borderRight: { mdl: "1px solid #E2E2ED" },
                  p: { xs: 2, md: 3 },
                  borderRight: { xs: "0px", mdl: "15px" },
                  mt: { xs: 3, md: 0 },
                  pb: { xs: 6, md: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "15px",
                    lineHeight: { xs: "22px", sm: "24px" },
                    letterSpacing: "0.3px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "#7780A1",
                    textTransform: "capitalize",
                    textAlign: { xs: "center", md: "left" },
                    // textAlign: "left",
                    maxWidth: { xs: "400px", md: "100%" },
                  }}
                >
                  Nibh volutpat, aliquam id sagittis elementum. Pellentesque
                  laoreet velit, sed egestas in. Id nam semper dolor tellus
                  vulputate eget turpis.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: 0.6, md: 1.5 },
                    py: { xs: 0.6, md: 1.2 },
                    boxShadow: "0px 25px 75px rgba(6, 7, 20, 0.1)",
                    borderRadius: "8px",
                    mt: { xs: 4, md: 6, lg: 8 },

                    "& input": {
                      border: "none",
                      backgroundColor: "none",
                      width: { xs: "150px", md: "170px", lg: "200px" },
                      background: "transparent",
                      m: 0,
                      pr: 2,
                      "::placeholder": {
                        textTransform: "capitalize",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        whiteSpace: "nowrap",
                        color: "#BBC0D0",
                        backgroundColor: "none",
                      },
                    },
                    "& input:focus": {
                      outline: "none",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "22px",
                      fontWeight: 500,
                      fontStyle: "normal",
                      whiteSpace: "nowrap",
                      color: "#BBC0D0",
                      backgroundColor: "none",
                    },
                  }}
                >
                  <input type="email" placeholder="Newsletter" />
                  <Button
                    variant="outlined"
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "16px",
                      lineHeight: "21px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#2A27C9",
                      textTransform: "capitalize",
                      textAlign: "center",
                      background: "none",
                      outline: "none",
                      border: "none",
                      "&:hover": {
                        background: "none",
                        color: "#2A27C9",
                        outline: "none",
                        border: "none",
                      },
                      px: { xs: 0, sm: 0.4 },
                    }}
                  >
                    Sign in
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
