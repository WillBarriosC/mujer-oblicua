import { forwardRef, memo, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import collage2 from "/media/collage-2.jpg";
import bgCollage2 from "/media/bg-collage-2.jpg";
import CollageModal from "./CollageModal";
import videoCollage2_1 from "/media/videocollage-2_1.mp4";
import videoCollage2_2 from "/media/videocollage-2_2.webm";
import videoCollage2_3 from "/media/videocollage-2_3.webm";
import soundCollage2_1 from "/media/soundcollage-2_1.mp3";
import soundCollage2_2 from "/media/soundcollage-2_2.mp3";
import soundCollage2_3 from "/media/soundcollage-2_3.mp3";

const CollageTwo = memo(
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
            <CardMedia component={"img"} image={collage2} alt="Lo que honro" />
          </CardActionArea>
        </Card>

        <CollageModal
          open={open}
          onClose={handleClose}
          image={bgCollage2}
          overlayVideos={[
            {
              src: videoCollage2_1,
              zIndex: 1,
              sound: soundCollage2_1,
              triggerTop: "20%",
              triggerLeft: "46%",
              triggerWidth: "300px",
              triggerHeight: "350px",
              showTrigger: false,
              loopDuration: 9000,
            },
            {
              src: videoCollage2_2,
              zIndex: 2,
              sound: soundCollage2_2,
              triggerTop: "45%",
              triggerLeft: "3%",
              triggerWidth: "240px",
              triggerHeight: "260px",
              showTrigger: false,
              loopDuration: 88000,
            },
            {
              src: videoCollage2_3,
              zIndex: 3,
              sound: soundCollage2_3,
              triggerTop: "12%",
              triggerLeft: "20%",
              triggerWidth: "82px",
              triggerHeight: "120px",
              showTrigger: false,
              loopDuration: 36000,
            },
          ]}
        />
      </Container>
    );
  })
);

export default CollageTwo;

CollageTwo.displayName = "CollageTwo";
CollageTwo.propTypes = {
  img: PropTypes.any,
};
