// DrawerComponent.js
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  List,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Rule as RuleIcon,
  Upload as PublishIcon,
  EditNotifications as EditNotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function DrawerComponent({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const menuItems = [
    { text: "대시보드", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "공지사항 관리", icon: <EditNotificationsIcon />, path: "/admin/noticelist" },
    { text: "공유마당", icon: <PublishIcon />, path: "/admin/predict" },
    { text: "희망도서신청승인", icon: <RuleIcon />, path: "/admin/approval" },
    { text: "Saved reports", isHeader: true },
    { text: "Current month", icon: <AssignmentIcon />, path: "/current-month" },
    { text: "Last quarter", icon: <AssignmentIcon />, path: "/last-quarter" },
    { text: "Year-end sale", icon: <AssignmentIcon />, path: "/year-end-sale" },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <List component="nav">
        {menuItems.map((item, index) =>
          item.isHeader ? (
            <ListSubheader key={index} component="div" inset>
              {item.text}
            </ListSubheader>
          ) : (
            <ListItemButton key={index} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          )
        )}
      </List>
    </Drawer>
  );
}
