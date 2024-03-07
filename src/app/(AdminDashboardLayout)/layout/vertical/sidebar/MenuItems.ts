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
    icon: "screencast-2-line-duotone",
    bgcolor: "primary",
    href: "/admin/dashboard",
  },
  {
    navlabel: true,
    subheader: "Services",
  },
  {
    id: uniqueId(),
    title: "List of users",
    icon: "users-group-two-rounded-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/users",
  },
  {
    id: uniqueId(),
    title: "List of bins",
    icon: "trash-bin-2-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/bins",
  },
  {
    id: uniqueId(),
    title: "List of points",
    icon: "map-point-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/bin-points",
  },
  {
    id: uniqueId(),
    title: "Partnership requests",
    icon: "users-group-rounded-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/municipal-requests",
  },
  {
    id: uniqueId(),
    title: "Quote requests",
    icon: "archive-check-line-duotone",
    bgcolor: "primary",
    href: "/admin/dashboard/quote-requests",
  },
  {
    id: uniqueId(),
    title: "Technical assistance",
    icon: "question-circle-outline",
    bgcolor: "primary",
    href: "/admin/dashboard/technical-assistance",
  },
  {
    id: uniqueId(),
    title: "Contact requests",
    icon: "chat-round-call-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/contact-requests",
  },
  {
    id: uniqueId(),
    title: "Reports",
    icon: "arrow-to-down-left-linear",
    bgcolor: "primary",
    href: "/admin/dashboard/reports",
  },
];

export default Menuitems;
