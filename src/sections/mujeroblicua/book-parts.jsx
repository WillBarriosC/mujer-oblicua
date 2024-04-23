import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, Container } from "@mui/material";
import portraitImage from "/src/assets/media/portrait.webp";
import imgCoverFrontIn from "../../assets/media/ilustration_2.webp";

export const PageCoverFront = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${portraitImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export const PageCoverFrontIn = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${imgCoverFrontIn})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export const Page = forwardRef((props, ref) => {
  return (
    <Container
      component={"div"}
      ref={ref}
      sx={{ background: "#FFFFF5", color: "#993031", borderRadius: 4 }}
    >
      <Box sx={{ p: 2 }}>{props.children}</Box>
    </Container>
  );
});

export const PageImg = forwardRef((props, ref) => {
  return (
    <Container
      component={"div"}
      ref={ref}
      sx={{ background: "#FFFFF5", color: "#993031", borderRadius: 4 }}
    >
      <Card>
        <CardMedia component={"image"} sx={{ height: 600 }} image={props.img} />
      </Card>
    </Container>
  );
});

export const PageCoverBack = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${portraitImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

PageCoverFront.displayName = "PageCoverFront";
PageCoverFrontIn.displayName = "PageCoverFrontIn";
Page.displayName = "Page";
PageImg.displayName = "PageImg";
PageCoverBack.displayName = "PageCoverBack";

Page.propTypes = {
  children: PropTypes.node,
};

PageImg.propTypes = {
  img: PropTypes.any,
};
