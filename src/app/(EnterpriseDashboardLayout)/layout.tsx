"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import Header from "./layout/vertical/header/Header";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Customizer from "./layout/shared/customizer/Customizer";
import Navigation from "./layout/horizontal/navbar/Navigation";
import HorizontalHeader from "./layout/horizontal/header/Header";
import { useSelector } from "@/store/hooks";
import { AppState } from "@/store/store";

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();

  const MainWrapper = styled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    padding: customizer.isHorizontal ? 0 : "20px",
    // backgroundColor: (theme) =>
    //   theme.palette.mode === "dark" ? "#212946" : theme.palette.grey[200]
  }));

  return (
    <MainWrapper>
      <title>Xgenbox</title>

      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <Box width="100%">
        {/* PageContent */}

        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}
        {customizer.isHorizontal ? "" : <Sidebar />}

        {customizer.isHorizontal ? <HorizontalHeader /> : ""}

        {customizer.isHorizontal ? <Navigation /> : ""}
        <PageWrapper
          className="page-wrapper"
          sx={{
            ...(customizer.isCollapse && {
              [theme.breakpoints.up("lg")]: {
                ml: `${customizer.MiniSidebarWidth}px`,
              },
            }),
            ...(!customizer.isCollapse &&
              !customizer.isHorizontal && {
                [theme.breakpoints.up("lg")]: {
                  ml: `${customizer.SidebarWidth}px`,
                },
              }),
          }}
        >
          <Container maxWidth={false}>
            {/* ------------------------------------------- */}
            {/* Header */}
            {/* ------------------------------------------- */}
            {customizer.isHorizontal ? " " : <Header />}

            {/* ------------------------------------------- */}
            {/* PageContent */}
            {/* ------------------------------------------- */}

            <Box
              sx={{
                minHeight: "calc(100vh - 170px)",

                py: { sm: 3 },
              }}
            >
              {/* <Outlet /> */}
              {children}
              {/* <Index /> */}
            </Box>

            {/* ------------------------------------------- */}
            {/* End Page */}
            {/* ------------------------------------------- */}
          </Container>
          <Customizer />
        </PageWrapper>
      </Box>
    </MainWrapper>
  );
}
