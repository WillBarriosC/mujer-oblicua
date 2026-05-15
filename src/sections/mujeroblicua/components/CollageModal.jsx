import {
  Box,
  Dialog,
  IconButton,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";

const containerSx = {
  p: 2,
  bgcolor: "black",
  position: "relative",
};

const imageSx = {
  borderRadius: 1,
  display: "block",
  width: "100%",
};

const alertSx = {
  fontSize: "1.1rem",
  textAlign: "center",
  bgcolor: "rgba(0, 0, 0)",
  color: "white",
  mt: 15,
};

const closeButtonSx = {
  position: "absolute",
  right: 18,
  top: 18,
  zIndex: 9999,
  color: "grey.500",
};

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
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const stopAllMedia = useCallback(() => {
    overlayRefs.current.forEach((entry) => {
      entry?.videoRef?.pause?.();
      entry?.audioRef?.pause?.();

      if (entry?.videoRef) {
        entry.videoRef.currentTime = 0;
        entry.videoRef.loop = false;
      }

      if (entry?.audioRef) {
        entry.audioRef.currentTime = 0;
      }
    });
  }, []);

  useEffect(() => {
    if (open && showAlertMessage) {
      setShowAlert(true);
    }

    if (!open) {
      clearTimers();
      stopAllMedia();
      setShowAlert(false);
    }
  }, [open, showAlertMessage, clearTimers, stopAllMedia]);

  useEffect(() => {
    return () => {
      clearTimers();
      stopAllMedia();
    };
  }, [clearTimers, stopAllMedia]);

  const handleClick = useCallback(
    (index) => {
      const refs = overlayRefs.current[index];
      const config = overlayVideos[index];

      if (!refs || !config) return;

      const {
        loopDuration,
        videoDelay = 1000,
        audioDelay = 1000,
      } = config;

      const { videoRef, audioRef } = refs;

      if (videoRef) {
        const videoStartTimer = setTimeout(() => {
          videoRef.currentTime = 0;
          videoRef.loop = true;
          videoRef.play?.();

          if (loopDuration) {
            const videoStopTimer = setTimeout(() => {
              videoRef.pause?.();
              videoRef.currentTime = 0;
              videoRef.loop = false;
            }, loopDuration);

            timersRef.current.push(videoStopTimer);
          }
        }, videoDelay);

        timersRef.current.push(videoStartTimer);
      }

      if (audioRef) {
        const audioStartTimer = setTimeout(() => {
          audioRef.currentTime = 0;
          audioRef.play?.();
        }, audioDelay);

        timersRef.current.push(audioStartTimer);
      }
    },
    [overlayVideos]
  );

  const handleTriggerClick = useCallback(
    (video, index) => {
      const count = video.repeatCount || 1;
      const delay = (video.loopDuration || 2000) + 200;

      for (let i = 0; i < count; i += 1) {
        const timer = setTimeout(() => {
          handleClick(index);
        }, i * delay);

        timersRef.current.push(timer);
      }
    },
    [handleClick]
  );

  return (
    <Dialog
      maxWidth="sm"
      open={open}
      onClose={onClose}
      transitionDuration={400}
    >
      <Box sx={containerSx}>
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
              sx={alertSx}
            >
              Haz click en las imágenes para descubrir sus mensajes expandidos.
            </MuiAlert>
          </Snackbar>
        )}

        <Box
          component="img"
          src={image}
          loading="lazy"
          alt="Collage expandido"
          sx={{ ...imageSx, width: imageWidth || "100%" }}
        />

        {overlayVideos.map((video, index) => (
          <Box
            key={video.src || index}
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
                if (!overlayRefs.current[index]) overlayRefs.current[index] = {};
                overlayRefs.current[index].videoRef = el;
              }}
              src={video.src}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              muted
              playsInline
              preload="metadata"
            />

            <audio
              ref={(el) => {
                if (!overlayRefs.current[index]) overlayRefs.current[index] = {};
                overlayRefs.current[index].audioRef = el;
              }}
              src={video.sound}
              preload="none"
            />

            <Box
              onClick={() => handleTriggerClick(video, index)}
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

        <IconButton aria-label="close" onClick={onClose} sx={closeButtonSx}>
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