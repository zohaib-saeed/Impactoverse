import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import CountUp from "react-countup";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Fade from "react-reveal/Fade";

const Counter = () => {
  //Counter data
  const Counter_Data = [
    {
      img: "/assets/pictures/counter/user.svg",
      count: 300000,
      title: "Users Active",
    },
    {
      img: "/assets/pictures/counter/artwork.svg",
      count: 5250,
      title: "Users Active",
    },
    {
      img: "/assets/pictures/counter/artists.svg",
      count: 175000,
      title: "Users Active",
    },
    {
      img: "/assets/pictures/counter/wallet.svg",
      spentCount: 35.5,
      title: "Users Active",
    },
  ];

  //Format function
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      <Container
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "all 0.3s ease",
          width: "100%",
          borderTop: "1px solid #E2E2ED",
          px: { xs: 4, md: 8 },
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            {Counter_Data.map((item, index) => (
              <Grid item md={3} xs={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mx: { xs: 0, md: 2 },
                  }}
                >
                  {/* => Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "32px",
                      height: "32px",
                      position: "relative",
                      transition: "all  0.3s ease",
                    }}
                  >
                    <Image
                      src={item.img}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      my: 1.3,
                    }}
                  ></Box>
                  {/* => Count */}
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "30px",
                      lineHeight: "38px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#060714",
                      letterSpacing: "0.2px",
                      textTransform: "capitalize",
                      mb: { xs: 0.3, md: 0.5 },
                    }}
                  >
                    {/* <CountUp end={`${nFormatter(355000, 3)}`} duration={3} /> */}
                    {item.count && nFormatter(item.count, 3)}
                    {item.spentCount && `${nFormatter(item.spentCount, 3)}ETH`}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "14px",
                      lineHeight: "19px",
                      fontWeight: "400",
                      fontStyle: "normal",
                      color: "#7780A1",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
