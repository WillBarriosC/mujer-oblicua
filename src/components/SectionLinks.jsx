import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import backgroundImage from "/background/overlay.webp";

const sectionsList = [
  { text: "Intro", link: "intro" },
  { text: "Mujer Oblicua", link: "mujer-oblicua" },
  { text: "Lectura Coral", link: "lectura-coral" },
  { text: "Olas de Horas", link: "olas-de-horas" },
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
          {sectionsList.map((text, index) => (
            <Box key={index}>
              <m.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={[
                    {
                      p: 1,
                      color: "white",
                      letterSpacing: "3px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    },
                  ]}
                  onClick={() => navigate(`/${text.link}`)}
                >
                  {text.text}
                </Typography>
              </m.div>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
