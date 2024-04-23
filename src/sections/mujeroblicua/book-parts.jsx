import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, Container } from "@mui/material";
import portraitImage from "/media/portrait.webp";
import imgCoverFrontIn from "/media/ilustration_2.webp";
import backCoverImage from "/media/back-cover.webp";
import pageMiddle1 from "/media/middle_1.webp";
import pageMiddle2 from "/media/middle_2.webp";

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

export const PageVideoPoem = forwardRef((props, ref) => {
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

export const PageMiddle1 = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${pageMiddle1})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

export const PageMiddle2 = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${pageMiddle2})`,
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
        <CardMedia component={"img"} sx={{ height: 600 }} image={props.img} />
        {props.children}
      </Card>
    </Container>
  );
});

export const PageCoverBack = forwardRef((props, ref) => {
  return (
    <Container
      ref={ref}
      sx={{
        backgroundImage: `url(${backCoverImage})`,
        borderRadius: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
});

PageCoverFront.displayName = "PageCoverFront";
PageVideoPoem.displayName = "PageCoverFrontIn";
Page.displayName = "Page";
PageImg.displayName = "PageImg";
PageCoverBack.displayName = "PageCoverBack";
PageMiddle1.displayName = "PageMiddle1";
PageMiddle2.displayName = "PageMiddle2";

Page.propTypes = {
  children: PropTypes.node,
};

PageImg.propTypes = {
  children: PropTypes.node,
  img: PropTypes.any,
};
