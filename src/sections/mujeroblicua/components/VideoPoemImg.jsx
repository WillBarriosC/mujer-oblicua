import { forwardRef, memo, useCallback, useState } from "react";
import { Card, CardMedia, Container, CardActionArea } from "@mui/material";
import VideoModal from "./VideoModal";

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

const VideoPoemImgBase = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Container ref={ref} sx={containerSx}>
      <Card sx={cardSx}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image="/media/videopoem-img.jpg"
            alt="Video poema"
            loading="lazy"
          />
        </CardActionArea>
      </Card>

      <VideoModal open={open} onClose={handleClose} />
    </Container>
  );
});

VideoPoemImgBase.displayName = "VideoPoemImg";

const VideoPoemImg = memo(VideoPoemImgBase);

export default VideoPoemImg;