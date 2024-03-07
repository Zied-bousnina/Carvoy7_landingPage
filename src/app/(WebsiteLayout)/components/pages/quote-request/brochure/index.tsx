import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const QuoteRequestBrochure = () => {
  return (
    <Box
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        paddingRight: { lg: 46, xs: 4 },
        paddingLeft: { lg: 46, xs: 4 },
      }}
      mt={-4}
    >
      {" "}
      <Card
        elevation={2}
        sx={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardContent sx={{ p: "30px" }}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item sm={6} display="flex" alignItems="center">
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                  display: { lg: "block", sm: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h5" mb={1}>
                  Electronic Brochure
                </Typography>

                <Button variant="contained" color="secondary">
                  Download (PDF)
                </Button>
              </Box>
            </Grid>
            <Grid item sm={4}>
              <div className="hidden sm:block">
                <Box mb="-150px">
                  <Image
                    src={"/images/backgrounds/track-bg.png"}
                    alt={"trackBg"}
                    height={195}
                    width={168}
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuoteRequestBrochure;
