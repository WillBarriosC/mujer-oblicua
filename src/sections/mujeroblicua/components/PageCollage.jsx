import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, Container } from "@mui/material";

const PageCollage = forwardRef((props, ref) => {
  return (
    <Container ref={ref} sx={{ background: "#FFFFF5", borderRadius: 4 }}>
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
          image={props.img}
        />
      </Card>
    </Container>
  );
});

export default PageCollage;

PageCollage.displayName = "PageCollage";
PageCollage.propTypes = {
  img: PropTypes.any,
};
