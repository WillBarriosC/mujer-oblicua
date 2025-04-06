import { Box, CardMedia, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const CollageModal = ({ open, onClose, image }) => (
  <Dialog maxWidth="sm" open={open} onClose={onClose}>
    <Box sx={{ p: 2, bgcolor: "black" }}>
      <CardMedia component="img" sx={{ borderRadius: 1 }} image={image} />
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 18,
          top: 18,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  </Dialog>
);

export default CollageModal;

CollageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
