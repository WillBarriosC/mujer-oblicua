import { Box, Dialog, Fade, Paper } from "@mui/material";
import PropTypes from "prop-types";
import VideoPlayer from "react-player/lazy";

const VideoModal = ({ open, onClose }) => {
  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={onClose} TransitionComponent={Fade} transitionDuration={400} >
      <Paper elevation={24} sx={{ p: 2, bgcolor: "black"}}>
        <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
          <VideoPlayer
            controls
            url={"https://www.youtube.com/watch?v=vdVUYptvRgE"}
            playing={true}
            width="100%"
            height="100%"
            onEnded={onClose}
          />
        </Box>
      </Paper>
    </Dialog>
  );
};

export default VideoModal;

VideoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
