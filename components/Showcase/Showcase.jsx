import React, { useState, useRef } from "react";
import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import Photography from "./Categories/Photography";
import Games from "./Categories/Games";
import Architecture from "./Categories/Architecture";
import Music from "./Categories/Music";
import Grid from "@mui/material/Grid";

const Showcase = () => {
  //Showing Categories
  const [selectedCategory, setSelectedCategory] = useState(<Architecture />);
  const [photographyClass, setPhotographyClass] = useState(false);
  const [architectureClass, setArchitectureClass] = useState(false);
  const [gamesClass, setGamesClass] = useState(false);
  const [musicClass, setMusicClass] = useState(false);

  const switchCategoryHandler = (category) => {
    switch (category) {
      case "photography":
        setSelectedCategory(<Photography />);
        setPhotographyClass(true);
        setArchitectureClass(false);
        setGamesClass(false);
        setMusicClass(false);
        break;
      case "music":
        setSelectedCategory(<Music />);
        setPhotographyClass(false);
        setArchitectureClass(false);
        setGamesClass(false);
        setMusicClass(true);
        break;
      case "architecture":
        setSelectedCategory(<Architecture />);
        setPhotographyClass(false);
        setArchitectureClass(true);
        setGamesClass(false);
        setMusicClass(false);
        break;
      case "games":
        setSelectedCategory(<Games />);
        setPhotographyClass(false);
        setArchitectureClass(false);
        setGamesClass(true);
        setMusicClass(false);
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
        px: { xs: 4, md: 8 },
        py: { xs: 3, md: 5, lg: 8 },
      }}
    >
      <Container
        id="showcase"
        sx={{
          maxWidth: "lg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "all 0.3s ease",
          width: "100%",
        }}
      >
        {/*=> Main Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              mb: 1,
            }}
          >
            Overline
          </Typography>
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
            Gallery Showcase
          </Typography>
        </Box>
        {/*=> Catergories */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mt: { xs: 3, md: 6 },
            "& button": {
              mx: 1.5,
              px: { xs: 1, md: 0.6 },
              mt: { xs: 1, mdl: 0 },
            },
            width: { xs: "90%", md: "50%" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #E2E2ED",
              backgroundColor: `${architectureClass ? "#7780a121" : "none"}`,
              borderRadius: "12px",
              px: 1.4,
              py: 1,
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              fontFamily: "Sora",
              whiteSpace: "nowrap",
              borderRadius: " 8px",
              color: "#7780A1",
              transition: "all 0.3s ease",
              "&:hover": {
                border: "2px solid #E2E2ED",
                backgroundColor: "#7780a121",
              },
              textTransform: "capitalize",
            }}
            onClick={() => switchCategoryHandler("architecture")}
          >
            Architecture
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #E2E2ED",
              backgroundColor: `${photographyClass ? "#7780a121" : "none"}`,
              borderRadius: "12px",
              px: 1.4,
              py: 1,
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              fontFamily: "Sora",
              whiteSpace: "nowrap",
              borderRadius: " 8px",
              color: "#7780A1",
              transition: "all 0.3s ease",
              "&:hover": {
                border: "2px solid #E2E2ED",
                backgroundColor: "#7780a121",
              },
              textTransform: "capitalize",
            }}
            onClick={() => switchCategoryHandler("photography")}
          >
            Photography
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #E2E2ED",
              backgroundColor: `${gamesClass ? "#7780a121" : "none"}`,
              borderRadius: "12px",
              px: 1.4,
              py: 1,
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              fontFamily: "Sora",
              whiteSpace: "nowrap",
              borderRadius: " 8px",
              color: "#7780A1",
              transition: "all 0.3s ease",
              "&:hover": {
                border: "2px solid #E2E2ED",
                backgroundColor: "#7780a121",
              },
              textTransform: "capitalize",
            }}
            onClick={() => switchCategoryHandler("games")}
          >
            Games
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #E2E2ED",
              backgroundColor: `${musicClass ? "#7780a121" : "none"}`,
              borderRadius: "12px",
              px: 1.4,
              py: 1,
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 500,
              fontFamily: "Sora",
              whiteSpace: "nowrap",
              borderRadius: " 8px",
              color: "#7780A1",
              transition: "all 0.3s ease",
              "&:hover": {
                border: "2px solid #E2E2ED",
                backgroundColor: "#7780a121",
              },
              textTransform: "capitalize",
            }}
            onClick={() => switchCategoryHandler("music")}
          >
            Music
          </Button>
          {/* <Grid container spacing={1}>
            <Grid item lg={3}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #E2E2ED",
                  backgroundColor: `${
                    architectureClass ? "#7780a121" : "none"
                  }`,
                  borderRadius: "12px",
                  px: 1.4,
                  py: 1,
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  fontFamily: "Sora",
                  whiteSpace: "nowrap",
                  borderRadius: " 8px",
                  color: "#7780A1",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "2px solid #E2E2ED",
                    backgroundColor: "#7780a121",
                  },
                  textTransform: "capitalize",
                }}
                onClick={() => switchCategoryHandler("architecture")}
              >
                Architecture
              </Button>
            </Grid>
            <Grid item lg={3}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #E2E2ED",
                  backgroundColor: `${photographyClass ? "#7780a121" : "none"}`,
                  borderRadius: "12px",
                  px: 1.4,
                  py: 1,
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  fontFamily: "Sora",
                  whiteSpace: "nowrap",
                  borderRadius: " 8px",
                  color: "#7780A1",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "2px solid #E2E2ED",
                    backgroundColor: "#7780a121",
                  },
                  textTransform: "capitalize",
                }}
                onClick={() => switchCategoryHandler("photography")}
              >
                Photography
              </Button>
            </Grid>
            <Grid item lg={3}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #E2E2ED",
                  backgroundColor: `${gamesClass ? "#7780a121" : "none"}`,
                  borderRadius: "12px",
                  px: 1.4,
                  py: 1,
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  fontFamily: "Sora",
                  whiteSpace: "nowrap",
                  borderRadius: " 8px",
                  color: "#7780A1",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "2px solid #E2E2ED",
                    backgroundColor: "#7780a121",
                  },
                  textTransform: "capitalize",
                }}
                onClick={() => switchCategoryHandler("games")}
              >
                Games
              </Button>
            </Grid>
            <Grid item lg={3}>
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid #E2E2ED",
                  backgroundColor: `${musicClass ? "#7780a121" : "none"}`,
                  borderRadius: "12px",
                  px: 1.4,
                  py: 1,
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  fontFamily: "Sora",
                  whiteSpace: "nowrap",
                  borderRadius: " 8px",
                  color: "#7780A1",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "2px solid #E2E2ED",
                    backgroundColor: "#7780a121",
                  },
                  textTransform: "capitalize",
                }}
                onClick={() => switchCategoryHandler("music")}
              >
                Music
              </Button>
            </Grid>
          </Grid> */}
        </Box>
        {/* => Category */}
        {selectedCategory}
        <Button
          variant="outlined"
          sx={{
            border: "2px solid #E2E2ED",
            backgroundColor: "none",
            borderRadius: "12px",
            px: 1.4,
            py: 1,
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 500,
            fontFamily: "Sora",
            whiteSpace: "nowrap",
            borderRadius: " 8px",
            color: "#7780A1",
            transition: "all 0.3s ease",
            "&:hover": {
              border: "2px solid #E2E2ED",
              backgroundColor: "#7780a121",
            },
            textTransform: "capitalize",
            mt: { xs: 4, md: 8 },
          }}
        >
          Show More
        </Button>
      </Container>
    </Box>
  );
};

export default Showcase;
