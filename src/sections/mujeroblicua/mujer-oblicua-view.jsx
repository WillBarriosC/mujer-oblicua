import HTMLFlipBook from "react-pageflip";
import { m } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  PageCoverFront,
  Page,
  PageCoverBack,
  PageImg,
  PageMiddle1,
  PageMiddle2,
  PageVideoPoem,
} from "./book-parts";
import PdfButton from "../../components/PdfButton";
import collagePoem1 from "/media/collagePoem1.webp";
import collagePoem2 from "/media/collagePoem2.webp";
import collagePoem3 from "/media/collagePoem3.webp";
import videoPoemImg from "/media/videopoem.webp";

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
              <Page key={1} />

              <Page key={2}>
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

              <Page key={3}>
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
              <PageImg key={4} img={collagePoem1} />

              <Page key={5}>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontWeight: "bold" }}
                  >
                    Digo que no
                  </Typography>
                  <Box>
                    <Typography variant="subtitle2" align="left">
                      Todo lo logro diciendo que no
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Porque me niego a hacer de este cuerpo una catedral
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Un museo de arte obsoleto
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que ya no comunica
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Prefiero los recursos líquidos
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que tienden al movimiento:
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      la sangre, las lágrimas
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y todo lo que escurra.
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Cargo esta identidad marina
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      por lo inabarcable
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Este horizonte
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      infinito
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y cuando me siento a escribir es extenuante
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      olas de horas de olas
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      El cuerpo es un recorrido
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Y me negué otra vez a transitar
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      perfecta y lentamente la norma
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      entonces, exploro mi cuerpo como arcilla
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y me convierto en un pez que me besa
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      las manos, el vientre y el corazón
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Nadie atravesará
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      de nuevo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      esta estructura
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Nadie se atreverá a hablar
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      de los hijos que no cuidarán
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      del polvo, los platos sucios
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      las arrugas, el pelo blanco
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      la flacidez
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que traen
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      el tiempo y la experiencia.
                    </Typography>
                  </Box>
                </Stack>
              </Page>
              <PageImg key={6} img={collagePoem2} />

              <PageMiddle1 key={7} />
              <PageMiddle2 key={8} />

              <PageVideoPoem key={9} />
              <PageImg key={10} img={videoPoemImg}>
                <div>
                  <button onClick={() => alert("hola")}>Modal</button>
                </div>
              </PageImg>

              <Page key={11}>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontWeight: "bold" }}
                  >
                    Hay un pájaro muerto
                  </Typography>
                  <Box>
                    <Typography variant="subtitle2" align="left">
                      Hay un pájaro muerto
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      En la garganta de esa mujer que atraviesa la calle
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que atraviesa mi cuerpo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y revisa las líneas del tiempo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      en su vientre, en mi frente
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Es un animal
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que se pliega con miedo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      y me abraza la espalda
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Me acaricia los labios con las manos mojadas
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Y descubre jardines dentro de nuestro sexo
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      Ondula
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      un pequeño hilo sobre nuestros mundos
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      que se besan
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      desde partes diferentes
                    </Typography>
                    <Typography variant="subtitle2" align="left">
                      cada que nos miramos al espejo.
                    </Typography>
                  </Box>
                </Stack>
              </Page>
              <PageImg key={12} img={collagePoem3} />

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
