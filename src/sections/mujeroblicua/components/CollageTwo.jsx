import { forwardRef, memo, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import CollageModal from "./CollageModal";
/* import collage2 from "/media/collage-2.jpg";
import bgCollage2 from "/media/bg-collage-2.jpg";
import videoCollage2_1 from "/media/videocollage-2_1.mp4";
import videoCollage2_2 from "/media/videocollage-2_2.webm";
import videoCollage2_3 from "/media/videocollage-2_3.webm";
import soundCollage2_1 from "/media/soundcollage-2_1.mp3";
import soundCollage2_2 from "/media/soundcollage-2_2.mp3";
import soundCollage2_3 from "/media/soundcollage-2_3.mp3"; */

const CollageTwo = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 600;

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
            <CardMedia component={"img"} image={"/media/collage-2.jpg"} alt="Lo que honro" />
          </CardActionArea>
        </Card>

        <CollageModal
          open={open}
          onClose={handleClose}
          image={"/media/bg-collage-2.jpg"}
          overlayVideos={[
            {
              src: "/media/videocollage-2_1.mp4",
              zIndex: 1,
              sound: "/media/soundcollage-2_1.mp3",
              triggerTop: "20%",
              triggerLeft: "46%",
              triggerWidth: isMobile ? "40vw" : "300px",
              triggerHeight: isMobile ? "50vw" : "350px",
              showTrigger: false,
              loopDuration: 10000,
              repeatCount: 7
            },
            {
              src: "/media/videocollage-2_2.webm",
              zIndex: 2,
              sound: "/media/soundcollage-2_2.mp3",
              triggerTop: "48%",
              triggerLeft: "3%",
              triggerWidth: isMobile ? "30vw" : "240px",
              triggerHeight: isMobile ? "33vw" : "260px",
              showTrigger: false,
              loopDuration: 88000,
            },
            {
              src: "/media/videocollage-2_3.webm",
              zIndex: 3,
              sound: "/media/soundcollage-2_3.mp3",
              triggerTop: "12%",
              triggerLeft: "20%",
              triggerWidth: isMobile ? "14vw" : "82px",
              triggerHeight: isMobile ? "22vw" : "120px",
              showTrigger: false,
              loopDuration: 36000,
              repeatCount: 3
            },
          ]}
        />
      </Container>
    );
  });

export default CollageTwo;

CollageTwo.displayName = "CollageTwo";
CollageTwo.propTypes = {
  img: PropTypes.any,
};
