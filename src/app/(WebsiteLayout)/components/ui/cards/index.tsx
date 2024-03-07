import React from "react";

import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import BlankCard from "../../shared/BlankCard";

const Cards = ({ cards, title = "" ,pt=0}) => {
  return (
    <Box
    pt={pt}
      pb={2}
      px={{ lg: 12, xs: 4 }}
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      {title !== "" && (
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          sx={{
            fontSize: {
              lg: "36px",
              xs: "25px",
            },
            lineHeight: {
              lg: "43px",
              xs: "30px",
            },
          }}
          mb={4}
          mx={24}
        >
          {title}
        </Typography>
      )}
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <BlankCard>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Typography variant="h6" pb={2} fontSize={25}>
                    {card.title}
                  </Typography>
                </Stack>
                <CardMedia
                  component="img"
                  image={card.avatar}
                  sx={{ height: 250, borderRadius: 2, backgroundSize: "cover" }}
                />
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
