import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const ImpactFeature = () => {
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
            alignItems: "flex-start",
            flexDirection: "column",
            flex: { xs: 1, md: 0.5 },
            width: { xs: "100% ", xm: "80%", lg: "50%" },
          }}
        >
          {/* Section Left => Top */}
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
              <Fade left>Featured Influencer for Impact</Fade>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 4, md: 8 },
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
        {/* Section Right  */}
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
              width: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
              height: { xs: "300px", sm: "350px", md: "400px", lg: "450px" },
              maxWidth: "500px",
              maxHeight: "422px",
              zIndex: 111,
              mr: 1.2,
            }}
          >
            <Image
              src="/assets/pictures/influencer_impact.jpg"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImpactFeature;
