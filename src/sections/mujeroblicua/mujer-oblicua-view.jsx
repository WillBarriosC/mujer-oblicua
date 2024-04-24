import { lazy } from "react";
import { m } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import HTMLFlipBook from "react-pageflip";
import PdfButton from "../../components/PdfButton";
import collagePoem1 from "/media/collagePoem1.webp";
import collagePoem2 from "/media/collagePoem2.webp";
import collagePoem3 from "/media/collagePoem3.webp";
import videoPoemImg from "/media/videopoem.webp";

const PageFrontCover = lazy(() => import("./components/PageFrontCover"));
const PageTypography = lazy(() => import("./components/PageTypography"));
const PageCollage = lazy(() => import("./components/PageCollage"));
const PageMiddleLeft = lazy(() => import("./components/PageMiddleLeft"));
const PageMiddleRight = lazy(() => import("./components/PageMiddleRight"));
const PageVideoPoem = lazy(() => import("./components/PageVideoPoem"));
const PageBackCover = lazy(() => import("./components/PageBackCover"));

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
              <PageFrontCover />

              <PageTypography key={1} />
              <PageTypography key={2}>
                <Typography
                  variant="h6"
                  align="center"
                  fontWeight="bold"
                  paragraph
                >
                  Estos poemas que ahora son sangre
                </Typography>
                <Container sx={{ ml: 3 }}>
                  <Typography variant="caption" align="justify" paragraph>
                    Mentiría si dijera que no soy una mujer política en
                    absoluto. En realidad, tengo que unir las dos palabras,
                    política y poética. Para ser sincera, he de admitir que doy
                    más importancia a la poesía. Lo hago para que la política no
                    me ahogue, porque la política es algo cruel, difícil y tan
                    rigurosamente real que a veces siento la necesidad de
                    consolarme, llorando lágrimas de poesía.
                  </Typography>
                  <Typography
                    variant="caption"
                    align="justify"
                    fontWeight="bold"
                    paragraph
                  >
                    Verena Andermatt C.
                  </Typography>
                </Container>
                <Typography variant="subtitle2" align="justify" paragraph>
                  Los nacimientos siempre ocurren gracias a la sangre y estas
                  palabras no podrían ser la excepción. Y entre todo lo que
                  puede ser caliente -aquí todo hace parte de una entropía
                  molusca, por lo tibiay por lo resbalosadibujo mi voz. Cosas
                  que he hecho con mi sangre: pintar mi cara, regar mis plantas,
                  dibujar sobre mi cuerpo.
                </Typography>
                <Typography variant="subtitle2" align="justify" paragraph>
                  Estos poemas hacen parte de una voz ancestral, aquí no hay
                  nada nuevo, hablo de nosotras porque nunca está de más; por
                  eso me defino desde lo oblicuo, desde la niña que ya no siente
                  miedo de manchar con su sangre y perdió el asco a que la
                  definan y la nombren como sucia, a la mujer que entiende que
                  la construcción de su voz, ha sido el desmantelamiento, a
                  cinceladas, del lenguaje masculino.
                </Typography>
                <Typography variant="subtitle2" align="right" fontWeight="bold">
                  Daniela Prado
                </Typography>
              </PageTypography>

              <PageTypography key={3}>
                <Typography
                  variant="h6"
                  align="left"
                  fontWeight="bold"
                  paragraph
                >
                  No es una herida
                </Typography>
                <Typography variant="subtitle2" align="left">
                  Desorientada
                  <br />
                  estoy desubicada
                  <br />
                  en este cuerpo que envejece mudo
                  <br />
                  y lleno de huesos lastimados
                  <br />
                  Adentro:
                  <br />
                  siempre fuego
                  <br />
                  siempre sangre
                  <br />
                  siempre ciclo
                  <br />
                  El círculo: figura perfecta
                  <br />
                  Cada mes
                  <br />
                  soy mi sexo taciturno
                  <br />
                  Me doblo en mí misma
                  <br />
                  y observo desde adentro
                  <br />
                  Humedad y resina roja
                  <br />
                  Hago pactos
                  <br />
                  Es el tiempo de la luna
                  <br />
                  Aúlla, aúlla
                  <br />
                  Escucha, recuerda
                  <br />
                  la anciana-niña interna
                  <br />
                  que también eres:
                  <br />
                </Typography>
              </PageTypography>
              <PageCollage key={4} img={collagePoem1} />

              <PageTypography key={5}>
                <Typography
                  variant="h6"
                  align="left"
                  fontWeight="bold"
                  paragraph
                >
                  Digo que no
                </Typography>
                <Typography variant="subtitle2" align="left" fontSize={11}>
                  Todo lo logro diciendo que no
                  <br />
                  Porque me niego a hacer de este cuerpo una catedral
                  <br />
                  Un museo de arte obsoleto
                  <br />
                  que ya no comunica
                  <br />
                  Prefiero los recursos líquidos
                  <br />
                  que tienden al movimiento:
                  <br />
                  la sangre, las lágrimas
                  <br />
                  y todo lo que escurra.
                  <br />
                  Cargo esta identidad marina
                  <br />
                  por lo inabarcable
                  <br />
                  Este horizonte
                  <br />
                  infinito
                  <br />
                  y cuando me siento a escribir es extenuante
                  <br />
                  <em>olas de horas de olas</em>
                  <br />
                  El cuerpo es un recorrido
                  <br />
                  Y me negué otra vez a transitar
                  <br />
                  perfecta y lentamente la norma
                  <br />
                  entonces, exploro mi cuerpo como arcilla
                  <br />
                  y me convierto en un pez que me besa
                  <br />
                  las manos, el vientre y el corazón
                  <br />
                  Nadie atravesará
                  <br />
                  de nuevo
                  <br />
                  esta estructura
                  <br />
                  Nadie se atreverá a hablar
                  <br />
                  de los hijos que no cuidarán
                  <br />
                  del polvo, los platos sucios
                  <br />
                  las arrugas, el pelo blanco
                  <br />
                  la flacidez
                  <br />
                  que traen
                  <br />
                  el tiempo y la experiencia.
                </Typography>
              </PageTypography>
              <PageCollage key={6} img={collagePoem2} />

              <PageMiddleLeft key={7} />
              <PageMiddleRight key={8} />

              <PageVideoPoem key={9} />
              <PageCollage key={10} img={videoPoemImg} />

              <PageTypography key={11}>
                <Typography
                  variant="h6"
                  align="left"
                  fontWeight="bold"
                  paragraph
                >
                  Hay un pájaro muerto
                </Typography>
                <Typography variant="subtitle2" align="left">
                  Hay un pájaro muerto
                  <br />
                  En la garganta de esa mujer que atraviesa la calle
                  <br />
                  que atraviesa mi cuerpo
                  <br />
                  y revisa las líneas del tiempo
                  <br />
                  en su vientre, en mi frente
                  <br />
                  Es un animal
                  <br />
                  que se pliega con miedo
                  <br />
                  y me abraza la espalda
                  <br />
                  Me acaricia los labios con las manos mojadas
                  <br />
                  Y descubre jardines dentro de nuestro sexo
                  <br />
                  Ondula
                  <br />
                  un pequeño hilo sobre nuestros mundos
                  <br />
                  que se besan
                  <br />
                  desde partes diferentes
                  <br />
                  cada que nos miramos al espejo.
                </Typography>
              </PageTypography>
              <PageCollage key={12} img={collagePoem3} />

              <PageBackCover />
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
