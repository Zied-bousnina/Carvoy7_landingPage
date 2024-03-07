"use client";
import React, {  useLayoutEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeSettings } from "@/utils/theme/Theme";
import { store } from "@/store/store";
import { useDispatch } from "@/store/hooks";
import { Provider } from "react-redux";

// import NextNProgress from "nextjs-progressbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/utils/i18n";
import { NextAppDirEmotionCacheProvider } from "@/utils/theme/EmotionCache";
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { refreshAuthentication } from "@/utils/methods/auth";
import { usePathname, useRouter } from "next/navigation";
import 'react-loading-skeleton/dist/skeleton.css'



export const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  //*router hook
  const router = useRouter();
  //*pathname hook
  const pathname=usePathname()

  //*stay loggedin on reload
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    //custom middleware function
    refreshAuthentication(dispatch,router,pathname);
  }, []);
  return (
    <>
      <NextAppDirEmotionCacheProvider options={{ key: "modernize" }}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Xgenbox</title>
      </head>
      <body>
        <ToastContainer />
        <Provider store={store}>
          {loading ? (
            // eslint-disable-next-line react/no-children-prop
            <MyApp children={children} />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Provider>
      </body>
    </html>
  );
}
