import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { MainAnimation, NavigateAnimation } from "./animation";
import backgroundImage from "/background/overlay.webp";
import { useMemo } from "react";

const sectionsList = [
  { title: "Intro", path: "/intro" },
  { title: "Libro expandido", path: "/libro-expandido" },
  { title: "Lectura coral", path: "/lectura-coral" },
];

export default function SectionLinks() {
  const navigate = useNavigate();
  const renderedSections = useMemo(() => {
    return sectionsList.map((item, index) => (
      <Box sx={{ p: 1 }} key={index}>
        <MainAnimation>
          <NavigateAnimation>
            <Typography
              variant="h4"
              sx={[
                {
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
    ));
  }, [navigate]);

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        filter: "grayscale(100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 2 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {renderedSections}
        </Stack>
      </Container>
    </Box>
  );
}
