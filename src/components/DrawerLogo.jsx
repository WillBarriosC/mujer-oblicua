import { useState } from "react";
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
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ilustration from "/src/assets/media/ilustration_1.webp";

const sectionsList = [
  { text: "Intro", link: "intro" },
  { text: "Mujer Oblicua", link: "mujer-oblicua" },
  { text: "Lectura Coral", link: "lectura-coral" },
  { text: "Olas de Horas", link: "olas-de-horas" },
];

const otherList = [
  { text: "Acerca de mi", link: "acerca-de-mi" },
  { text: "Donacion", link: "donacion" },
  { text: "Contacto", link: "contacto" },
];

const sideBarLogo = <img src={ilustration} height={75} />;

export default function DrawerLogo() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
            }}
          >
            MUJER OBLICUA
          </Typography>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} onClick={() => navigate("/")} />
          </ListItemButton>
        </ListItem>

        <Divider />

        {sectionsList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text.text}
                onClick={() => navigate(`/${text.link}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider />

        {otherList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text.text}
                onClick={() => navigate(`/${text.link}`)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton disableRipple onClick={toggleDrawer(true)}>
        {sideBarLogo}
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
        {DrawerList}
      </Drawer>
    </>
  );
}
