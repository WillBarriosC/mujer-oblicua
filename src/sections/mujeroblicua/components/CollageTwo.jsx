import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Paper,
} from "@mui/material";
import collage2 from "/media/collage-2.jpg";
import CollageModal from "./CollageModal";

const CollageTwo = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container ref={ref} sx={{ backgroundColor: "white", borderRadius: 4 }}>
      <Paper>
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            objectFit: "cover",
          }}
          onClick={handleOpen}
        >
          <CardActionArea>
            <CardMedia component={"img"} image={collage2} alt="Lo que honro" />
          </CardActionArea>
        </Card>
      </Paper>

      <CollageModal open={open} onClose={handleClose} image={collage2} />
    </Container>
  );
});

export default CollageTwo;

CollageTwo.displayName = "CollageTwo";
CollageTwo.propTypes = {
  img: PropTypes.any,
};
