import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container } from "@mui/material";
import videoPoemImg from "/media/videopoem-img.jpg";

const VideoPoemImg = forwardRef((props, ref) => (
  <Container ref={ref} sx={{ backgroundColor: "white", borderRadius: 4 }}>
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CardMedia
        component={"img"}
        sx={{ height: "auto" }}
        image={videoPoemImg}
      />
    </Card>
  </Container>
));

export default VideoPoemImg;

VideoPoemImg.displayName = "VideoPoemImg";
VideoPoemImg.propTypes = {
  img: PropTypes.any,
};
