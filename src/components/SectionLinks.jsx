import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { MainAnimation, NavigateAnimation } from "./animation";
import backgroundImage from "/background/overlay.webp";

const sectionsList = [
  { title: "Intro", path: "/intro" },
  { title: "Libro expandido", path: "/libro-expandido" },
  { title: "Lectura coral", path: "/lectura-coral" },
];

export default function SectionLinks() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        filter: "grayscale(100%)",
      }}
    >
      <Container maxWidth="lg">
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
