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
    href: "/enterprise/dashboard",
    bgcolor: "primary",
  },
  {
    navlabel: true,
    subheader: "services",
  },
  {
    id: uniqueId(),
    title: "Specific request",
    icon: 'chat-round-call-linear',
    href: "/enterprise/dashboard/specific-request",
    bgcolor: "primary",
  },
  {
    id: uniqueId(),
    title: "Appointment request",
    icon: 'calendar-linear',
    href: "/enterprise/dashboard/appointment-request",
    bgcolor: "primary",
  },
  {
    id: uniqueId(),
    title: "Scan QR code",
    icon: 'qr-code-linear',
    href: "/enterprise/dashboard/qr-code",
    bgcolor: "primary",
  },
];

export default Menuitems;
