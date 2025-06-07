import { forwardRef, useCallback, useState } from "react";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import poemTwoB from "/media/poem-two-b.jpg";
import collage4 from "/media/collage-4.jpg";
import CollageModal from "./CollageModal";

const PoemTwoB = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <Container
      ref={ref}
      sx={{
        width: 1,
        height: 1,
        backgroundImage: `url(${poemTwoB})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Card
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          objectFit: "cover",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia component="img" image={collage4} alt="Lo que honro" />
        </CardActionArea>
      </Card>
      <CollageModal
        open={open}
        onClose={handleClose}
        image={collage4}
        showAlertMessage={false}
      />
    </Container>
  );
});

export default PoemTwoB;

PoemTwoB.displayName = "PoemTwoB";
