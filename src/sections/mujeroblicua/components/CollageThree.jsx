import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container } from "@mui/material";
import collage3 from "/media/collage-3.jpg";

const CollageThree = forwardRef((props, ref) => (
  <Container ref={ref} sx={{ backgroundColor: "white", borderRadius: 4 }}>
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CardMedia component={"img"} sx={{ height: "auto" }} image={collage3} />
    </Card>
  </Container>
));

export default CollageThree;

CollageThree.displayName = "CollageThree";
CollageThree.propTypes = {
  img: PropTypes.any,
};
