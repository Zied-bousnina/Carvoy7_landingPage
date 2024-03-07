import { uniqueId } from "lodash";
interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  bgcolor?: any;
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

// import { useTheme } from '@mui/material';
// const theme = useTheme();

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: 'screencast-2-line-duotone',
    bgcolor: "primary",
    href: "/user/dashboard",
  },
  {
    navlabel: true,
    subheader: "Services",
  },

  {
    id: uniqueId(),
    title: "Cleaning service",
    icon: 'archive-check-line-duotone',
    bgcolor: "primary",
    href: "/user/dashboard/cleaning-service",
  },

  {
    id: uniqueId(),
    title: "Scan QR code",
    icon: 'qr-code-outline',
    bgcolor: "primary",
    href: "/user/dashboard/scan",
  },
  {
    id: uniqueId(),
    title: "Manage access",
    icon: 'airbuds-case-minimalistic-linear',
    bgcolor: "primary",
    href: "/user/dashboard/manage-access",

  },
  {
    id: uniqueId(),
    title: "Users",
    icon: 'users-group-two-rounded-broken',
    bgcolor: "primary",
    href: "/user/dashboard/users",
  },
];

export default Menuitems;
