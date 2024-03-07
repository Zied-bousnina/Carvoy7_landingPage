"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Image
          src={"/images/error/error.svg"}
          alt="error"
          width={500}
          height={500}
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            maxWidth: "500px",
            maxHeight: "500px",
          }}
        />
        <Typography align="center" variant="h1" mb={4}>
          Opps!!
        </Typography>
        <Typography align="center" variant="h4" mb={4}>
          {error.message}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={() => reset()}
          disableElevation
        >
          Try again
        </Button>
      </Container>
    </Box>
  );
};
export default ErrorBoundary;
