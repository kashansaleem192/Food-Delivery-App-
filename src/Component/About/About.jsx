import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
      <Container>
        <Grid container spacing={5} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/banner.jpg"
              alt="About Dine Dash"
              sx={{
                width: "100%",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              About <span style={{ color: "#ff6a00" }}>DineDash</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "#555" }}>
              At <b>DineDash</b>, we believe great food brings people
              together. That’s why we serve freshly made dishes with top-quality
              ingredients — every single time.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
              From sizzling burgers to spicy biryanis, our menu has something
              for everyone. Fast delivery, great taste, and 100% satisfaction —
              that’s our promise.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff6a00",
                "&:hover": { backgroundColor: "#e55d00" },
                borderRadius: "8px",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
