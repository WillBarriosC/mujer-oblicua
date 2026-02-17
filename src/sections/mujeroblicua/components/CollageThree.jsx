import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CollageModal from "./CollageModal";
/* import collage3 from "/media/collage-3.jpg";
import bgCollage3 from "/media/bg-collage-3.jpg";
import videoCollage3_1 from "/media/videocollage-3_1.webm";
import videoCollage3_2 from "/media/videocollage-3_2.webm";
import videoCollage3_3 from "/media/videocollage-3_3.webm";
import videoCollage3_4 from "/media/videocollage-3_4.webm";
import soundCollage3_1 from "/media/soundcollage-3_1.mp3";
import soundCollage3_2 from "/media/soundcollage-3_2.mp3";
import soundCollage3_3 from "/media/soundcollage-3_3.mp3";
import soundCollage3_4 from "/media/soundcollage-3_4.mp3"; */

const CollageThree = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const imageWidth = useMediaQuery("(max-width:600px)") ? "100%" : "50dvh";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
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
          width: "70%",
          objectFit: "cover",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia component={"img"} image={"/media/collage-3.jpg"} alt="Niña nido" />
        </CardActionArea>
      </Card>

      <CollageModal
        open={open}
        onClose={handleClose}
        image={"/media/bg-collage-3.jpg"}
        imageWidth={imageWidth}
        overlayVideos={[
          {
            src: "/media/videocollage-3_1.webm",
            zIndex: 4,
            sound: "/media/soundcollage-3_1.mp3",
            triggerTop: "23%",
            triggerLeft: "63%",
            triggerWidth: isMobile ? "25vw" :"160px",
            triggerHeight: isMobile ? "12vw" : "84px",
            showTrigger: false,
            audioDelay: 6000,
            loopDuration: 6000,
            repeatCount: 3
          },
          {
            src: "/media/videocollage-3_2.webm",
            zIndex: 3,
            sound: "/media/soundcollage-3_2.mp3",
            triggerTop: "33%",
            triggerLeft: "13%",
            triggerWidth: isMobile ? "14vw" :"100px",
            triggerHeight: isMobile ? "46vw" : "330px",
            showTrigger: false,
            loopDuration: 24000
          },
          {
            src: "/media/videocollage-3_3.webm",
            zIndex: 2,
            sound: "/media/soundcollage-3_3.mp3",
            triggerTop: "17%",
            triggerLeft: "30%",
            triggerWidth: isMobile ? "26vw" : "180px",
            triggerHeight: isMobile ? "38vw" : "276px",
            showTrigger: false,
            loopDuration: 13000,
            repeatCount: 3
          },
          {
            src: "/media/videocollage-3_4.webm",
            zIndex: 1,
            sound: "/media/soundcollage-3_4.mp3",
            triggerTop: "57%",
            triggerLeft: "44%",
            triggerWidth: isMobile ? "20vw" : "140px",
            triggerHeight: isMobile ? "20vw" : "140px",
            showTrigger: false,
            loopDuration: 7000,
            repeatCount: 3
          },
        ]}
      />
    </Container>
  );
});

export default CollageThree;

CollageThree.displayName = "CollageThree";
CollageThree.propTypes = {
  img: PropTypes.any,
};