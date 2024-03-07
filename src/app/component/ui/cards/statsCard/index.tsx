"use client";
import { Icon } from "@iconify/react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

interface propTypes {
  title: string;
  icon: string;
  value: any;
  isPercentage?: boolean;
  isLoading?: boolean;
}

const StatsCard = ({
  title,
  icon,
  value,
  isPercentage = false,
  isLoading,
}: propTypes) => {
  return (
    <Card
      sx={{
        padding: 0,
        backgroundColor: "info.light",
        position: "relative",
      }}
      elevation={9}
      variant={"outlined"}
    >
      <Image
        src="/images/backgrounds/top-info-shape.png"
        alt="img"
        className="top-img"
        width={59}
        height={81}
      />
      <CardContent>
        <Box mb={5}>
          <Avatar
            sx={{
              bgcolor: "info.main",
              width: 48,
              height: 48,
            }}
          >
            <Icon icon={icon} className="text-2xl" />
          </Avatar>
        </Box>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          <Typography variant="h6">{title}</Typography>

          {isLoading && !value ? (
            <div className="flex justify-end">
              <Skeleton count={1} height={20} width={100} />
            </div>
          ) : !!value &&(
            <Typography
              variant="subtitle1"
              fontWeight={500}
              fontSize={25}
              color="primary.main"
            >
              {value}
              {isPercentage && "%"}
            </Typography>
          )}
        </Stack>
        {isPercentage && (
          <LinearProgress value={Number(value)} variant="determinate" />
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
