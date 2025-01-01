import { useSelector } from "@/store/hooks";
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { AppState } from "@/store/store";
import Image from "next/image";

export default function Logo() {
  const customizer = useSelector((state: AppState) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "40px" : "210px",
    overflow: "hidden",
    display: "block",
  }));


    return (
      <LinkStyled href="/" >
        {customizer.activeMode === "dark" ? (
          <Image
            src="/images/svgs/logo-c-white.svg"
            alt="logo"
            height={customizer.TopbarHeight}
            width={75}
            priority
          />
        ) : (
          <Image
            src={"/images/svgs/logo_carvoy.svg"}
            alt="logo"
            height={customizer.TopbarHeight}
            width={75}
            priority
          />
        )}
      </LinkStyled>
    );


  // return (
  //   <LinkStyled href="/">
  //     {customizer.activeMode === "dark" ? (
  //       <Image
  //         src="/images/logos/logo-light-rtl.svg"
  //         alt="logo"
  //         height={customizer.TopbarHeight}
  //         width={174}
  //         priority
  //       />
  //     ) : (
  //       <Image
  //         src="/images/logos/logo-dark-rtl.svg"
  //         alt="logo"
  //         height={customizer.TopbarHeight}
  //         width={174}
  //         priority
  //       />
  //     )}
  //   </LinkStyled>
  // );
}
