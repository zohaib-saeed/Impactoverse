import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";

const Header = () => {
  // Search Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Desktop Menu Handler
  const [isOpen, setIsOpen] = useState(false);
  const desktopMenuClickHandler = () => {
    setIsOpen((state) => !state);
  };

  const ref = useRef(null);

  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);

  //Mobile menu handler
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
  const mobileMenuClickHandler = () => {
    setIsOpenOnMobile((state) => !state);
  };

  const mobRef = useRef(null);

  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (mobRef.current && !mobRef.current.contains(event.target)) {
        setIsOpenOnMobile(false);
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [mobRef]);

  //Logo's
  const Logo_Content = [
    { img: "/assets/pictures/hero_logo1.svg" },
    { img: "/assets/pictures/hero_logo2.svg" },
    { img: "/assets/pictures/hero_logo3.svg" },
    { img: "/assets/pictures/hero_logo4.svg" },
  ];

  //Bottom Links
  const Bottom_Links = [
    { title: "Browse Campaigns", link: "/" },
    { title: "Browse Brand & Agencies", link: "/" },
    { title: "Browse NPOs & Causes", link: "/" },
    { title: "Browse Influencers", link: "/" },
  ];
  return (
    <Box
      id="Hero"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        px: { xs: 1.5, md: 4 },
        pt: { xs: 19, md: 22 },
        pb: 4,
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
        {/* Hero => Main  Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Main Content ==> Text + Search bar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Main Content Text => Sub text */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "13px", sm: "15px" },
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "18px",
                color: "#7780A1",
                textTransform: "uppercase",
                mb: { xs: 1.5, md: 3 },
              }}
            >
              {" "}
              Non Fungible Tokens
            </Typography>

            {/* Main Content text => Heading */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* => Heading Top  */}
              <Fade left>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: {
                        xs: "35px",
                        xm: "50px",
                        sm: "70px",
                        md: "90px",
                      },
                      fontWeight: { xs: "700", lg: "600" },
                      fontStyle: "normal",
                      lineHeight: "100%",
                      letterSpacing: "0.2px",
                      color: "#060714",
                      transition: "all 0.3s ease",
                    }}
                  >
                    A new NFT
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "18px", md: "25px", lg: "40px" },
                      height: { xs: "32px", md: "50px", lg: "80px" },
                      position: "relative",
                      transition: "all  0.3s ease",
                    }}
                  >
                    <Image
                      src="/assets/pictures/Header_text_decor1.svg"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </Box>
                </Box>
              </Fade>
              {/* => Heading Bottom */}
              <Fade right>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: { xs: 3, xm: 6, md: 12 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { xs: "22px", md: "36px", lg: "62px" },
                      height: { xs: "22px", md: "36px", lg: "62px" },
                      position: "relative",
                      transition: "all  0.3s ease",
                    }}
                  >
                    <Image
                      src="/assets/pictures/Header_text_decor2.svg"
                      alt="Image"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: {
                        xs: "35px",
                        xm: "50px",
                        sm: "70px",
                        md: "90px",
                      },
                      fontWeight: { xs: "700", lg: "600" },
                      fontStyle: "normal",
                      lineHeight: "100%",
                      letterSpacing: "0.2px",
                      color: "#060714",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Experience
                  </Typography>
                </Box>
              </Fade>
            </Box>

            {/* Main Content Text => Paragraph */}

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: "18px", md: "21px", lg: "24px" },
                lineHeight: { xs: "140%", md: "150%" },
                fontWeight: "500",
                fontStyle: "normal",
                color: "#7780A1",
                textAlign: "center",
                mt: { xs: 2.5, md: 3 },
                maxWidth: "80%",
              }}
            >
              No Crypto? No Wallet? No Problem! Sign up and get an Impactoverse
              Wallet. Buy and sell with just your debit or credit card. We make
              Web 3 for Impact easy! Collab with brands, influencers and causes,
              all for impact!
            </Typography>
            {/* Main content => Search bar */}
            {/* => For Desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 0.6, md: 1.5 },
                py: { xs: 0.6, md: 1.2 },
                boxShadow: "0px 25px 75px rgba(6, 7, 20, 0.1)",
                borderRadius: "8px",
                mt: { xs: 4, md: 6, lg: 8 },

                "& input": {
                  border: "none",
                  borderRight: "2px solid #BBC0D0",
                  backgroundColor: "none",
                  width: "235px",
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
              {/* search bar => Search field */}

              <input
                type="text"
                placeholder="items, collections and creators"
              />
              {/* search bar => category button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
                ref={ref}
              >
                <Button
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "#BBC0D0",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: { xs: 0.6, md: 1.4 },
                    textTransform: "capitalize",
                  }}
                  onClick={() => {
                    desktopMenuClickHandler();
                  }}
                >
                  Category
                  <KeyboardArrowDownIcon
                    sx={{ pl: 1, color: "#BBC0D0", fontSize: "22px", ml: 0.5 }}
                  />
                </Button>
                {isOpen && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "stretch",
                      flexDirection: "column",
                      boxShadow: "3px 2px 11px -4px rgba(0,0,0,0.66)",
                      backgroundColor: "#fff",
                      position: "absolute",
                      zIndex: 1111,

                      top: "36px",
                      py: 0.7,
                      borderRadius: "6px",
                      "& p": {
                        textTransform: "capitalize",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        whiteSpace: "nowrap",
                        color: "#BBC0D0",
                        backgroundColor: "none",
                        py: 0.7,
                      },
                      "& a": {
                        textDecoration: "none",
                        px: 1.3,

                        "&:hover": {
                          backgroundColor: "#f6f7fb",
                        },
                      },
                    }}
                    onClick={() => {
                      desktopMenuClickHandler();
                    }}
                  >
                    <AnchorLink href="/">
                      <Typography>Photography</Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Art </Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Nature</Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Animated</Typography>
                    </AnchorLink>
                  </Box>
                )}
              </Box>
              {/* Search bar => search button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "22px",
                  height: "22px",
                  position: "relative",
                  transition: "all  0.3s ease",
                }}
              >
                <Image
                  src="/assets/pictures/Search.svg"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Box>
            </Box>
            {/* => For Mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 0.6, md: 1.5 },
                py: { xs: 0.6, md: 1.2 },
                boxShadow: "0px 25px 75px rgba(6, 7, 20, 0.1)",
                borderRadius: "8px",
                mt: { xs: 4, md: 6, lg: 8 },

                "& input": {
                  border: "none",
                  borderRight: "2px solid #BBC0D0",
                  backgroundColor: "none",
                  width: "120px",
                  background: "transparent",
                  m: 0,
                  pr: 1,
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
              {/* search bar => Search field */}

              <input type="text" placeholder="Search..." />
              {/* search bar => category button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
                ref={mobRef}
              >
                <Button
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    lineHeight: "22px",
                    fontWeight: 500,
                    fontStyle: "normal",
                    whiteSpace: "nowrap",
                    color: "#BBC0D0",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: { xs: 0.6, md: 1.4 },
                    textTransform: "capitalize",
                  }}
                  onClick={() => {
                    mobileMenuClickHandler();
                  }}
                >
                  Category
                  <KeyboardArrowDownIcon
                    sx={{ pl: 1, color: "#BBC0D0", fontSize: "22px", ml: 0.5 }}
                  />
                </Button>
                {isOpenOnMobile && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "stretch",
                      flexDirection: "column",
                      boxShadow: "3px 2px 11px -4px rgba(0,0,0,0.66)",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "36px",
                      py: 0.7,
                      borderRadius: "6px",
                      zIndex: 111,
                      "& p": {
                        textTransform: "capitalize",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        whiteSpace: "nowrap",
                        color: "#BBC0D0",
                        backgroundColor: "none",
                        py: 0.7,
                      },
                      "& a": {
                        textDecoration: "none",
                        px: 1.3,

                        "&:hover": {
                          backgroundColor: "#f6f7fb",
                        },
                      },
                    }}
                    onClick={() => {
                      mobileMenuClickHandler();
                    }}
                  >
                    <AnchorLink href="/">
                      <Typography>Photography</Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Art</Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Nature</Typography>
                    </AnchorLink>
                    <AnchorLink href="/">
                      <Typography>Animated</Typography>
                    </AnchorLink>
                  </Box>
                )}
              </Box>
              {/* Search bar => search button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "22px",
                  height: "22px",
                  position: "relative",
                  transition: "all  0.3s ease",
                }}
              >
                <Image
                  src="/assets/pictures/Search.svg"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </Box>
            </Box>
          </Box>
          {/* Main Content ==> Logo's + Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: { xs: 7, md: 16 },
            }}
          >
            {/* Mapping all logo's*/}
            <Box
              id="header_logos"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container spacing={1}>
                {Logo_Content.map((item, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "85px",
                        height: "42px",
                        position: "relative",
                        transition: "all  0.3s ease",
                        mx: { xs: 1, md: 2.5, lg: 4 },
                        mt: 1.5,
                      }}
                    >
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="contain"
                        alt="image"
                        priority
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* Mapping bottom links for hero section */}
            <Box
              id="homepage_linksItem"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",

                "& a ": {
                  textDecoration: "none",
                  cursor: "pointer",
                  mt: 1,
                  mb: 1,
                },
                mt: { xs: 6, md: 8 },
              }}
            >
              <Grid container spacing={1} id="homepage_links">
                {Bottom_Links.map((item, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Link href={item.link}>
                      <AnchorLink>
                        <Typography
                          sx={{
                            fontFamliy: "Inter",
                            fontStyle: "normal",
                            fontWeight: "500",
                            textAlign: "center",
                            fontSize: { xs: "16px", md: "18px", lg: "22px" },
                            lineHeight: { xs: "105%", md: "115%", lg: "130%" },
                            transition: "all 0.3s ease",
                            color: " #060714",
                            "&:hover": {
                              color: "#060714a1",
                            },
                          }}
                        >
                          {item.title}
                        </Typography>
                      </AnchorLink>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
