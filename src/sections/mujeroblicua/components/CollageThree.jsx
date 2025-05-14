import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, Container } from "@mui/material";
import collage3 from "/media/collage-3.jpg";
import bgCollage3 from "/media/bg-collage-3.jpg";
import CollageModal from "./CollageModal";
import videoCollage3_1 from "/media/videocollage-3_1.webm";
import videoCollage3_2 from "/media/videocollage-3_2.webm";
import videoCollage3_3 from "/media/videocollage-3_3.webm";
import videoCollage3_4 from "/media/videocollage-3_4.webm";
import soundCollage3_1 from "/media/soundcollage-3_1.mp3";
import soundCollage3_2 from "/media/soundcollage-3_2.mp3";
import soundCollage3_3 from "/media/soundcollage-3_3.mp3";
import soundCollage3_4 from "/media/soundcollage-3_4.mp3";

const CollageThree = forwardRef((props, ref) => {
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
          width: "70%",
          objectFit: "cover",
        }}
        onClick={handleOpen}
      >
        <CardActionArea>
          <CardMedia component={"img"} image={collage3} alt="Niña nido" />
        </CardActionArea>
      </Card>

      <CollageModal
        open={open}
        onClose={handleClose}
        image={bgCollage3}
        overlayVideos={[
          {
            src: videoCollage3_1,
            zIndex: 4,
            sound: soundCollage3_1,
            triggerTop: "23%",
            triggerLeft: "63%",
            triggerWidth: "160px",
            triggerHeight: "84px",
            showTrigger: false,
            audioDelay: 6000,
            loopDuration: 6000,
          },
          {
            src: videoCollage3_2,
            zIndex: 3,
            sound: soundCollage3_2,
            triggerTop: "33%",
            triggerLeft: "13%",
            triggerWidth: "100px",
            triggerHeight: "330px",
            showTrigger: false,
            loopDuration: 28000,
          },
          {
            src: videoCollage3_3,
            zIndex: 2,
            sound: soundCollage3_3,
            triggerTop: "17%",
            triggerLeft: "30%",
            triggerWidth: "180px",
            triggerHeight: "276px",
            showTrigger: false,
            loopDuration: 13000,
          },
          {
            src: videoCollage3_4,
            zIndex: 1,
            sound: soundCollage3_4,
            triggerTop: "57%",
            triggerLeft: "44%",
            triggerWidth: "140px",
            triggerHeight: "140px",
            showTrigger: false,
            loopDuration: 5000,
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
