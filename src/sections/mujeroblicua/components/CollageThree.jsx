import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import collage3 from "/media/collage-3.jpg";
import CollageModal from "./CollageModal";

const CollageThree = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container ref={ref} sx={{ backgroundColor: "white", borderRadius: 4 }}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia
            component={"img"}
            sx={{ height: "auto" }}
            image={collage3}
          />
        </CardActionArea>
      </Card>

      <CollageModal open={open} onClose={handleClose} image={collage3} />
    </Container>
  );
});

export default CollageThree;

CollageThree.displayName = "CollageThree";
CollageThree.propTypes = {
  img: PropTypes.any,
};
