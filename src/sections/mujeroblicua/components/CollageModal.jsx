import {
  Box,
  Dialog,
  IconButton,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const CollageModal = ({
  open,
  onClose,
  image,
  overlayVideos = [],
  showAlertMessage = true,
  imageWidth,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const overlayRefs = useRef([]);

  useEffect(() => {
    if (open && showAlertMessage) setShowAlert(true);
  }, [open, showAlertMessage]);

  const handleClick = (index) => {
    const { videoRef, audioRef } = overlayRefs.current[index] || {};
    const {
      loopDuration,
      videoDelay = 1000,
      audioDelay = 1000,
    } = overlayVideos[index] || {};

    if (videoRef) {
      setTimeout(() => {
        videoRef.loop = true;
        videoRef.play();
        if (loopDuration) {
          setTimeout(() => {
            videoRef.pause();
            videoRef.currentTime = 0;
            videoRef.loop = false;
          }, loopDuration);
        }
      }, videoDelay);
    }
    if (audioRef) {
      setTimeout(() => {
        audioRef.play();
      }, audioDelay);
    }
  };

  return (
    <Dialog
      maxWidth="sm"
      open={open}
      onClose={onClose}
      transitionDuration={400}
    >
      <Box sx={{ p: 2, bgcolor: "black", position: "relative" }}>
        {showAlertMessage && (
          <Snackbar
            open={showAlert}
            autoHideDuration={10000}
            onClose={() => setShowAlert(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <MuiAlert
              elevation={15}
              variant="contained"
              onClose={() => setShowAlert(false)}
              severity="info"
              sx={{
                fontSize: "1.1rem",
                textAlign: "center",
                bgcolor: "rgba(0, 0, 0)",
                color: "white",
                mt: 15,
              }}
            >
              Haz click en las imágenes para descrubrir sus mensajes expandidos.
            </MuiAlert>
          </Snackbar>
        )}
        <Box
          component="img"
          src={image}
          loading="lazy"
          sx={{ borderRadius: 1 }}
          style={{ width: imageWidth || "100%" }}
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
              zIndex: video.zIndex,
              pointerEvents: "none",
            }}
          >
            <video
              ref={(el) => {
                if (!overlayRefs.current[index])
                  overlayRefs.current[index] = {};
                overlayRefs.current[index].videoRef = el;
              }}
              src={video.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              muted
            />
            <audio
              ref={(el) => {
                if (!overlayRefs.current[index])
                  overlayRefs.current[index] = {};
                overlayRefs.current[index].audioRef = el;
              }}
              src={video.sound}
            />
            <Box
              onClick={() => {
                const count = video.repeatCount || 1;
                const delay = (video.loopDuration || 2000) + 200;
                for (let i = 0; i < count; i++) {
                  setTimeout(() => {
                    handleClick(index);
                  }, i * delay);
                }
              }}
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
                pointerEvents: "auto",
              }}
            />
          </Box>
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

CollageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  overlayVideos: PropTypes.array.isRequired,
  showAlertMessage: PropTypes.bool,
  imageWidth: PropTypes.string,
};

export default CollageModal;
