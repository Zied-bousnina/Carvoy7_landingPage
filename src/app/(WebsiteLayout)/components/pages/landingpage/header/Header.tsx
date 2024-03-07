import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo";
import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";
import { IconMenu2 } from "@tabler/icons-react";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import Link from "next/link";
import RegisterTypeDialog from "../../../ui/dialog/auth/registerType";
import { useSelector } from "@/store/hooks";
const LpHeader = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "100px",
    },
    backgroundColor: theme.palette.background.default,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    justifyContent: "space-between",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }));

  //   sidebar
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // const [y, setY] = React.useState(0);

  // const handleNavigation = React.useCallback(
  //   (e: Event | any) => {
  //     const window = e.currentTarget;
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  // React.useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <AppBarStyled
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "#e5e7eb" }}
    >
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Link href="/">
            <Logo />
          </Link>
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <IconMenu2 size="20" />
            </IconButton>
          ) : null}
          {lgUp ?auth.isLoggedIn?<>hello</>: (
            <>
              <Stack spacing={1} direction="row" alignItems="center" gap={1}>
                <Navigations />
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <Link href="/login">
                  <Button
                    color="primary"
                    variant="contained"
                    startIcon={<LoginTwoToneIcon />}
                  >
                    Login
                  </Button>
                </Link>
                <RegisterTypeDialog isBtn={true} />
              </Stack>
            </>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: "0 !important",
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default LpHeader;
