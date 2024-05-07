import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { MainAnimation, NavigateAnimation } from "./animation";
import backgroundImage from "/background/overlay.webp";

const sectionsList = [
  { title: "Intro", path: "/intro" },
  { title: "Mujer Oblicua", path: "/mujer-oblicua" },
  { title: "Lectura Coral", path: "/lectura-coral" },
  { title: "Olas de Horas", path: "/olas-de-horas" },
];

export default function SectionLinks() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 2 }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {sectionsList.map((item, index) => (
            <Box sx={{ p: 1 }} key={index}>
              <MainAnimation>
                <NavigateAnimation>
                  <Typography
                    variant="h4"
                    component="a"
                    sx={[
                      {
                        p: 1,
                        color: "white",
                        letterSpacing: "3px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      },
                    ]}
                    onClick={() => navigate(item.path)}
                  >
                    {item.title}
                  </Typography>
                </NavigateAnimation>
              </MainAnimation>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
