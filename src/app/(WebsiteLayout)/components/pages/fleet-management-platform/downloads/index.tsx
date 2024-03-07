import React from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FleetManagementPlatformDownloads = () => {
  return (
    <Grid container spacing={3} justifyContent="center" pt={4}>
      <Grid item xs={12} lg={8}>
        <Typography
          variant="h2"
          fontWeight={700}
          textAlign="center"
          mb={8}
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
        >
          Downloads{" "}
        </Typography>{" "}
        <div className="flex items-center justify-center pb-14">
          <div className="flex gap-4">
            <Link
              target="_blank"
              href="https://play.google.com/store/apps/details?id=host.exp.exponent"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl inline-flex items-center duration-200"
            >
              <span>Get it on</span>
              <Image
                src="/images/icons8/google-play.png"
                alt="Appstore"
                width={50}
                height={50}
              />
              <span>Google Play</span>
            </Link>
            <Link
              target="_blank"
              href="https://apps.apple.com/us/app/expo-go/id982107779"
              className="border border-red-500   font-bold py-2 px-4 rounded-xl hover:bg-red-50 duration-200 inline-flex items-center "
            >
              <span>Explore it on</span>
              <Image
                src="/images/icons8/app-gallery.png"
                alt="Appstore"
                width={50}
                height={50}
              />
              <span>Huawei</span>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FleetManagementPlatformDownloads;
