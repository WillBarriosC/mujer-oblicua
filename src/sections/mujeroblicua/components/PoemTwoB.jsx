import { forwardRef, memo, useCallback, useState } from "react";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import CollageModal from "./CollageModal";

const containerSx = {
  backgroundImage: "url(/media/poem-two-b.jpg)",
  borderRadius: 4,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  width: "100%",
  height: "100%",
};

const cardSx = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
};

const PoemTwoBBase = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Container ref={ref} sx={containerSx}>
      <Card sx={cardSx}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            image="/media/collage-4.jpg"
            alt="Lo que honro"
            loading="lazy"
          />
        </CardActionArea>
      </Card>

      <CollageModal
        open={open}
        onClose={handleClose}
        image="/media/collage-4.jpg"
        showAlertMessage={false}
      />
    </Container>
  );
});

PoemTwoBBase.displayName = "PoemTwoB";

const PoemTwoB = memo(PoemTwoBBase);

export default PoemTwoB;