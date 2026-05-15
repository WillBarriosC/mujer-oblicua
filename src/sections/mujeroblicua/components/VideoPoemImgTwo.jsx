import { forwardRef, memo, useCallback, useState } from "react";
import { Card, CardMedia, Container, CardActionArea } from "@mui/material";
import VideoModalTwo from "./VideoModalTwo";

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

const VideoPoemImgTwoBase = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Container ref={ref} sx={containerSx}>
      <Card sx={cardSx}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image="/media/videopoem-img-two.jpg"
            alt="Video poema dos"
            loading="lazy"
          />
        </CardActionArea>
      </Card>

      <VideoModalTwo open={open} onClose={handleClose} />
    </Container>
  );
});

VideoPoemImgTwoBase.displayName = "VideoPoemImgTwo";

const VideoPoemImgTwo = memo(VideoPoemImgTwoBase);

export default VideoPoemImgTwo;
