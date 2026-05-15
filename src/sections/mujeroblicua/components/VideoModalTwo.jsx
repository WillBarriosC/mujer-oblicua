import { Box, Dialog, Fade, Paper } from "@mui/material";
import PropTypes from "prop-types";
import VideoPlayer from "react-player/lazy";

const paperSx = {
  p: 2,
  bgcolor: "black",
};

const videoWrapperSx = {
  width: "100%",
  aspectRatio: "16 / 9",
};

const VideoModalTwo = ({ open, onClose }) => {
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      transitionDuration={400}
    >
      <Paper elevation={24} sx={paperSx}>
        <Box sx={videoWrapperSx}>
          <VideoPlayer
            controls
            url="https://www.youtube.com/watch?v=H_AkANhOtxY"
            playing={open}
            width="100%"
            height="100%"
            onEnded={onClose}
          />
        </Box>
      </Paper>
    </Dialog>
  );
};

export default VideoModalTwo;

VideoModalTwo.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};