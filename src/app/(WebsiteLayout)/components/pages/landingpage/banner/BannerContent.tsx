import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const BannerContent = () => {
  return (
    <>
      <Stack justifyContent="center" spacing={1} gap={2}>
        <Typography
          variant="h1"
          fontWeight={800}
          textAlign="center"
          sx={{
            fontSize: {
              md: "52px",
            },
            lineHeight: {
              md: "62px",
            },
          }}
        >
          Révolutionnez votre transport avec Carvoy7
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight={500} textAlign="center">
            Connectez sans effort les conducteurs et les clients pour des solutions de convoyage plus intelligentes
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2} mt={6}
        alignItems="center"
        justifyContent="center"
      >
        {/* Ajouter du contenu supplémentaire ici si nécessaire */}
      </Stack>
    </>
  );
};

export default BannerContent;
