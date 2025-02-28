import { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { m } from "framer-motion";
import Logo from "./Logo";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ContactsIcon from "@mui/icons-material/Contacts";
import imgSideBarLogo from "/media/ilustration_1.webp";
import imgSideBarMenuLogo from "/media/ilustration_3.webp";
import PropTypes from "prop-types";

const sectionsList = [
  { title: "Intro", path: "/intro", icon: <PlayArrowIcon /> },
  {
    title: "Libro expandido",
    path: "/libro-expandido",
    icon: <AutoStoriesIcon />,
  },
  { title: "Lectura coral", path: "/lectura-coral", icon: <MenuBookIcon /> },
];

const otherList = [
  {
    title: "Acerca de mí",
    path: "/acerca-de-mi",
    icon: <SelfImprovementIcon />,
  },
  { title: "Donación", path: "/donacion", icon: <VolunteerActivismIcon /> },
  { title: "Contacto", path: "/contacto", icon: <ContactsIcon /> },
];

const sideBarLogo = <img src={imgSideBarLogo} height={75} alt="sideBarLogo" />;
const sideBarMenuLogo = (
  <img
    src={imgSideBarMenuLogo}
    width={"100%"}
    height={75}
    alt="sideBarMenuLogo"
  />
);

const DrawerList = memo(({ navigate, toggleDrawer }) => (
  <Box sx={{ width: 320 }} role="presentation" onClick={toggleDrawer(false)}>
    <Box sx={{ p: 3 }} display="flex" justifyContent="center">
      <Logo />
    </Box>

    <Divider />

    <List sx={{ p: 0 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} onClick={() => navigate("/")} />
        </ListItemButton>
      </ListItem>

      <Divider />

      {sectionsList.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.title}
              onClick={() => navigate(item.path)}
            />
          </ListItemButton>
        </ListItem>
      ))}

      <Divider />

      {otherList.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.title}
              onClick={() => navigate(item.path)}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
));

DrawerList.displayName = "DrawerList";

DrawerList.propTypes = {
  navigate: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default function DrawerLogo() {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = useCallback(
    (newOpen) => () => {
      setOpen(newOpen);
    },
    []
  );

  return (
    <>
      <IconButton
        disableRipple
        onClick={toggleDrawer(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <m.div
            key="menuLogo"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {sideBarMenuLogo}
          </m.div>
        ) : (
          <m.div
            key="sideLogo"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {sideBarLogo}
          </m.div>
        )}
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
        <DrawerList navigate={navigate} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
