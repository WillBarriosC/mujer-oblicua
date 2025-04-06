import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container } from "@mui/material";
import videoPoemImg from "/media/videopoem-img.jpg";
import CollageModal from "./CollageModal";

const VideoPoemImg = forwardRef((props, ref) => {
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
          width: "90%",
          objectFit: "cover",
        }}
        onClick={handleOpen}
      >
        <CardMedia component={"img"} image={videoPoemImg} alt="Video Poema" />
      </Card>

      <CollageModal open={open} onClose={handleClose} image={videoPoemImg} />
    </Container>
  );
});

export default VideoPoemImg;

VideoPoemImg.displayName = "VideoPoemImg";
VideoPoemImg.propTypes = {
  img: PropTypes.any,
};
