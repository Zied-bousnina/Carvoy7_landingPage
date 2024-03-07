import { ContactDetailsChipData } from "@/app/(WebsiteLayout)/constant/data";
import { Icon } from "@iconify/react";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ContactDetailsMap = () => {
  return (
    <Box
      overflow="hidden"
      borderRadius="0"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        textAlign="center"
        mb={1}
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
        Location
      </Typography>
      <Typography
        textAlign="center"
        mb={8}
        sx={{
          fontSize: {
            lg: "16px",
            xs: "13px",
          },
        }}
      >
        Exploring the Coordinates of Our World
      </Typography>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center px-4 gap-12">
        <iframe
          className="lg:w-1/2 w-full sm:1/2 h-[550px] rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12784.65166088452!2d10.210111!3d36.766659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd367d86ee0f63%3A0xc92b9c9cf6c49dba!2sJebel%20Jelloud%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1683624829166!5m2!1sen!2sus"
        />
        <div>
          {ContactDetailsChipData.map((chipData, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  text-white md:h-14 md:w-14 md:rounded-xl">
                <Avatar
                  sx={{
                    bgcolor: "primary.light",
                    color: "primary.main",
                    width: 50,
                    height: 50,
                    borderRadius: "18px",
                  }}
                >
                  {" "}
                  <Icon icon={chipData.icon} />
                </Avatar>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {chipData.title}
                </h3>
                <p className="mb-2 text-gray-500">{chipData.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ContactDetailsMap;
