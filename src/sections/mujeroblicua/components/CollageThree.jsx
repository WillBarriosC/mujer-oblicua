import { forwardRef, memo, useCallback, useMemo, useState } from "react";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CollageModal from "./CollageModal";

const containerSx = {
  position: "relative",
  backgroundColor: "white",
  borderRadius: 4,
  width: "100%",
  height: "100%",
};

const cardSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
};

const CollageThreeBase = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");
  const imageWidth = isMobile ? "100%" : "50dvh";

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const overlayVideos = useMemo(
    () => [
      {
        src: "/media/videocollage-3_1.webm",
        zIndex: 4,
        sound: "/media/soundcollage-3_1.mp3",
        triggerTop: "23%",
        triggerLeft: "63%",
        triggerWidth: isMobile ? "25vw" : "160px",
        triggerHeight: isMobile ? "12vw" : "84px",
        showTrigger: false,
        audioDelay: 6000,
        loopDuration: 6000,
        repeatCount: 3,
      },
      {
        src: "/media/videocollage-3_2.webm",
        zIndex: 3,
        sound: "/media/soundcollage-3_2.mp3",
        triggerTop: "33%",
        triggerLeft: "13%",
        triggerWidth: isMobile ? "14vw" : "100px",
        triggerHeight: isMobile ? "46vw" : "330px",
        showTrigger: false,
        loopDuration: 24000,
      },
      {
        src: "/media/videocollage-3_3.webm",
        zIndex: 2,
        sound: "/media/soundcollage-3_3.mp3",
        triggerTop: "17%",
        triggerLeft: "30%",
        triggerWidth: isMobile ? "26vw" : "180px",
        triggerHeight: isMobile ? "38vw" : "276px",
        showTrigger: false,
        loopDuration: 13000,
        repeatCount: 3,
      },
      {
        src: "/media/videocollage-3_4.webm",
        zIndex: 1,
        sound: "/media/soundcollage-3_4.mp3",
        triggerTop: "57%",
        triggerLeft: "44%",
        triggerWidth: isMobile ? "20vw" : "140px",
        triggerHeight: isMobile ? "20vw" : "140px",
        showTrigger: false,
        loopDuration: 7000,
        repeatCount: 3,
      },
    ],
    [isMobile]
  );

  return (
    <Container ref={ref} sx={containerSx}>
      <Card sx={cardSx}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image="/media/collage-3.jpg"
            alt="Niña nido"
            loading="lazy"
          />
        </CardActionArea>
      </Card>

      <CollageModal
        open={open}
        onClose={handleClose}
        image="/media/bg-collage-3.jpg"
        imageWidth={imageWidth}
        overlayVideos={overlayVideos}
      />
    </Container>
  );
});

CollageThreeBase.displayName = "CollageThree";

const CollageThree = memo(CollageThreeBase);

export default CollageThree;