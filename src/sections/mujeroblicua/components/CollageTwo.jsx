import { forwardRef, memo, useCallback, useMemo, useState } from "react";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
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
  width: "90%",
};

const CollageTwoBase = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;

  const overlayVideos = useMemo(
    () => [
      {
        src: "/media/videocollage-2_1.mp4",
        zIndex: 1,
        sound: "/media/soundcollage-2_1.mp3",
        triggerTop: "20%",
        triggerLeft: "46%",
        triggerWidth: isMobile ? "40vw" : "300px",
        triggerHeight: isMobile ? "50vw" : "350px",
        showTrigger: false,
        loopDuration: 10000,
        repeatCount: 3,
      },
      {
        src: "/media/videocollage-2_2.webm",
        zIndex: 2,
        sound: "/media/soundcollage-2_2.mp3",
        triggerTop: "48%",
        triggerLeft: "3%",
        triggerWidth: isMobile ? "30vw" : "240px",
        triggerHeight: isMobile ? "33vw" : "260px",
        showTrigger: false,
        loopDuration: 88000,
      },
      {
        src: "/media/videocollage-2_3.webm",
        zIndex: 3,
        sound: "/media/soundcollage-2_3.mp3",
        triggerTop: "12%",
        triggerLeft: "20%",
        triggerWidth: isMobile ? "14vw" : "82px",
        triggerHeight: isMobile ? "22vw" : "120px",
        showTrigger: false,
        loopDuration: 36000,
        repeatCount: 3,
      },
    ],
    [isMobile],
  );

  return (
    <Container ref={ref} sx={containerSx}>
      <Card sx={cardSx}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image="/media/collage-2.jpg"
            alt="Lo que honro"
            loading="lazy"
          />
        </CardActionArea>
      </Card>

      <CollageModal
        open={open}
        onClose={handleClose}
        image="/media/bg-collage-2.jpg"
        overlayVideos={overlayVideos}
      />
    </Container>
  );
});

CollageTwoBase.displayName = "CollageTwo";

const CollageTwo = memo(CollageTwoBase);

export default CollageTwo;
