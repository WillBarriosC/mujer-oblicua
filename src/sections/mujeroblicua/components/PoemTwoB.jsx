import { forwardRef, memo, useCallback, useState } from "react";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import CollageModal from "./CollageModal";
/* import poemTwoB from "/media/poem-two-b.jpg";
import collage4 from "/media/collage-4.jpg"; */

const PoemTwoB = memo(
  forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    return (
      <Container
        ref={ref}
        sx={{
          backgroundImage: "url(/media/poem-two-b.jpg)",
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
            <CardMedia component="img" image={"/media/collage-4.jpg"} alt="Lo que honro" />
          </CardActionArea>
        </Card>
        <CollageModal
          open={open}
          onClose={handleClose}
          image={"/media/collage-4.jpg"}
          showAlertMessage={false}
        />
      </Container>
    );
  })
);

export default PoemTwoB;

PoemTwoB.displayName = "PoemTwoB";
