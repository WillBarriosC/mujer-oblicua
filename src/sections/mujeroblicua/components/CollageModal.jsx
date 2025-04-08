import { Box, Dialog, Fade, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useRef } from "react";

const CollageModal = ({ open, onClose, image, overlayVideos = [] }) => {
  const videoRefs = useRef([]);
  const audioRefs = useRef([]);

  const handleClick = (index, videoDelay = 1000, audioDelay = 1000) => {
    const video = videoRefs.current[index];
    const audio = audioRefs.current[index];
    const { loopDuration } = overlayVideos[index];

    if (video) {
      setTimeout(() => {
        video.loop = true;
        video.play();
  
        if (loopDuration) {
          setTimeout(() => {
            video.pause();
            video.currentTime = 0;
            video.loop = false;
          }, loopDuration);
        }
      }, videoDelay);
    }


    if (audio) {
      setTimeout(() => {
        audio.play();
      }, audioDelay);
    }
  };

  return (
    <Dialog maxWidth="sm" open={open} onClose={onClose} TransitionComponent={Fade} transitionDuration={400}>
      <Box sx={{ p: 2, bgcolor: "black", position: "relative" }}>
        <Box
          component="img"
          src={image}
          sx={{ width: "100%", borderRadius: 1 }}
        />

        {overlayVideos.map((video, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 1,
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: video.zIndex,
            }}
            onClick={() => handleClick(index, video.delay || 500)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              muted
            />
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={video.sound}
            />
          </Box>
        ))}

        {overlayVideos.map((video, index) => (
          <Box
            key={`trigger-${index}`}
            onClick={() =>
              handleClick(index, video.delay || 1000, video.audioDelay || 1000)
            }
            sx={{
              position: "absolute",
              width: video.triggerWidth,
              height: video.triggerHeight,
              top: video.triggerTop,
              left: video.triggerLeft,
              backgroundColor: video.showTrigger
                ? "rgba(255,255,255,0.5)"
                : "transparent",
              borderRadius: "50%",
              zIndex: 9999,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: video.showTrigger ? "0 0 5px white" : "none",
            }}
          ></Box>
        ))}

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 18,
            top: 18,
            zIndex: 9999,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Dialog>
  );
};

export default CollageModal;

CollageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  overlayVideos: PropTypes.array.isRequired,
};
