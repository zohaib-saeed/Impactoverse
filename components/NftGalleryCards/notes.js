<Slider {...settings} ref={(c) => (slider_ref.current = c)}>
    {Left_Slider.map((item, index) => (
        <Box
            key={index}
            sx={{
                display: "flex",
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
                            borderRadius: "8px",
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
        </Box>
    ))}
</Slider>