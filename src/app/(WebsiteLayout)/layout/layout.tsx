import React from "react";
import Footer from "../components/pages/landingpage/footer/Footer";
import LpHeader from "../components/pages/landingpage/header/Header";
import C2a2 from "../components/pages/landingpage/c2a/C2a2";

const PageLayout = ({ children }: any) => {
  return (
    <>
      <LpHeader />
      {children}
      <C2a2/>
      <Footer />
    </>
  );
};

export default PageLayout;
