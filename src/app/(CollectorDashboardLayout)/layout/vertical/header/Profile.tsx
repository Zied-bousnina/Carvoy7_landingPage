import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Icon } from "@iconify/react";

import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "@/store/hooks";
import { authActions } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/hooks/useToast";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  //*router hook
  const router = useRouter();
  //*toast hook
  const toast = useToast();

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const logout = () => {
    dispatch(authActions.logout({ router }));
    toast("info", "Logging you out");
  };
  return (
    <div className="bg-transparent hover:bg-[#e5f3fb] duration-200 cursor-pointer rounded-xl">
      <Box>
        <Button
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          sx={{
            ...(typeof anchorEl2 === "object" && {
              color: "primary.main",
            }),
            display: "flex",
            gap: 2,
          }}
          onClick={handleClick2}
        >
          <Avatar
            src={"/images/profile/collector.png"}
            alt={"ProfileImg"}
            sx={{
              width: 45,
              height: 45,
            }}
          />

          {lgUp ? (
            <Box textAlign="left">
              <Typography
                variant="h6"
                color="textPrimary"
                display="flex"
                alignItems="center"
              >
                {" "}
                {auth.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {" "}
                {auth.role}
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Button>
        {/* ------------------------------------------- */}
        {/* Message Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
          id="msgs-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{
            "& .MuiMenu-paper": {
              width: "360px",
              p: 4,
            },
          }}
        >
          <Typography variant="h5">Profile</Typography>
          <Stack direction="row" py={3} spacing={2} alignItems="center">
            <Avatar
              src={"/images/profile/collector.png"}
              alt={"ProfileImg"}
              sx={{ width: 95, height: 95 }}
            />
            <Box>
              <Typography variant="h6" color="textPrimary" fontWeight={600}>
                {auth.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {auth.role}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Icon icon="solar:letter-line-duotone" width="15" height="15" />
                {auth.email}
              </Typography>
            </Box>
          </Stack>
          <Divider />

          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={logout}
              fullWidth
            >
              Log out
            </Button>
          </Box>
        </Menu>
      </Box>
    </div>
  );
};

export default Profile;
