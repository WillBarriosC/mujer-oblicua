import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container } from "@mui/material";
import collage2 from "/media/collage-2.jpg";

const CollageTwo = forwardRef((props, ref) => (
  <Container ref={ref} sx={{ backgroundColor: "white", borderRadius: 4 }}>
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CardMedia component={"img"} sx={{ height: "auto" }} image={collage2} />
    </Card>
  </Container>
));

export default CollageTwo;

CollageTwo.displayName = "CollageTwo";
CollageTwo.propTypes = {
  img: PropTypes.any,
};
