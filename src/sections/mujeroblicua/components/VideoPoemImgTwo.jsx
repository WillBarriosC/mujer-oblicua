import { forwardRef, memo, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container, CardActionArea } from "@mui/material";
import videoPoemImgTwo from "/media/videopoem-img-two.jpg";
import VideoModalTwo from "./VideoModalTwo";

const VideoPoemImgTwo = memo(
  forwardRef((props, ref) => {
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
          <CardActionArea>
            <CardMedia
              component={"img"}
              image={videoPoemImgTwo}
              alt="Video Poema Dos"
            />
          </CardActionArea>
        </Card>

        <VideoModalTwo open={open} onClose={handleClose} />
      </Container>
    );
  })
);

export default VideoPoemImgTwo;

VideoPoemImgTwo.displayName = "VideoPoemImgTwo";
VideoPoemImgTwo.propTypes = {
  img: PropTypes.any,
};
