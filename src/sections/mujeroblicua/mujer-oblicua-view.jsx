import HTMLFlipBook from "react-pageflip";
import { m } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  PageCoverFront,
  Page,
  PageCoverBack,
  PageCoverFrontIn,
  PageImg,
} from "./book-parts";
import PdfButton from "../../components/PdfButton";
import collagePoem1 from "/media/ilustration_2.webp";

export default function MujerOblicuaView() {
  return (
    <>
      <Container maxWidth={"md"}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Stack spacing={2}>
            <HTMLFlipBook
              width={300}
              height={450}
              size="stretch"
              showCover={true}
              flippingTime={800}
              maxShadowOpacity={0}
              mobileScrollSupport={true}
              showPageCorners={false}
            >
              <PageCoverFront />
              <PageCoverFrontIn />

              <Page key={1}>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    Estos poemas que ahora son sangre
                  </Typography>
                  <Container>
                    <Stack spacing={1}>
                      <Typography variant="caption" align="justify">
                        Mentiría si dijera que no soy una mujer política en
                        absoluto. En realidad, tengo que unir las dos palabras,
                        política y poética. Para ser sincera, he de admitir que
                        doy más importancia a la poesía. Lo hago para que la
                        política no me ahogue, porque la política es algo cruel,
                        difícil y tan rigurosamente real que a veces siento la
                        necesidad de consolarme, llorando lágrimas de poesía.
                      </Typography>
                      <Typography
                        variant="caption"
                        align="justify"
                        sx={{ fontWeight: "bold" }}
                      >
                        Verena Andermatt C.
                      </Typography>
                    </Stack>
                  </Container>
                  <Typography variant="subtitle2" align="justify">
                    Los nacimientos siempre ocurren gracias a la sangre y estas
                    palabras no podrían ser la excepción. Y entre todo lo que
                    puede ser caliente -aquí todo hace parte de una entropía
                    molusca, por lo tibiay por lo resbalosadibujo mi voz. Cosas
                    que he hecho con mi sangre: pintar mi cara, regar mis
                    plantas, dibujar sobre mi cuerpo.
                  </Typography>
                  <Typography variant="subtitle2" align="justify">
                    Estos poemas hacen parte de una voz ancestral, aquí no hay
                    nada nuevo, hablo de nosotras porque nunca está de más; por
                    eso me defino desde lo oblicuo, desde la niña que ya no
                    siente miedo de manchar con su sangre y perdió el asco a que
                    la definan y la nombren como sucia, a la mujer que entiende
                    que la construcción de su voz, ha sido el desmantelamiento,
                    a cinceladas, del lenguaje masculino.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="right"
                    sx={{ fontWeight: "bold" }}
                  >
                    Daniela Prado
                  </Typography>
                </Stack>
              </Page>

              <Page key={2}>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontWeight: "bold" }}
                  >
                    No es una herida
                  </Typography>
                  <Box>
                    <Typography variant="subtitle2" align="left">
                      Desorientada
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      estoy desubicada
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      en este cuerpo que envejece mudo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y lleno de huesos lastimados
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Adentro:
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      siempre fuego
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      siempre sangre
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      siempre ciclo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      El círculo: figura perfecta
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Cada mes
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      soy mi sexo taciturno
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Me doblo en mí misma
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y observo desde adentro
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Humedad y resina roja
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Hago pactos
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Es el tiempo de la luna
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Aúlla, aúlla
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Escucha, recuerda
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      la anciana-niña interna
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que también eres:
                    </Typography>
                  </Box>
                </Stack>
              </Page>

              <PageImg key={3} img={collagePoem1} />

              <PageCoverBack />
            </HTMLFlipBook>

            <Box
              sx={{ flexGrow: 1 }}
              display={"flex"}
              justifyContent={"center"}
            >
              <PdfButton />
            </Box>
          </Stack>
        </m.div>
      </Container>
    </>
  );
}
